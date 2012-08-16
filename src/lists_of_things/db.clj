; Is it possible to get this to the point that it doesn't need datomic.api?
(ns lists-of-things.db
  (:use [datomic.api :only [q] :as d])
  (:refer-clojure :exclude [parents ancestors descendants]))

; Creation
; 
; (let [logan-id (d/tempid :db.part/user)]
;   @(d/transact conn [
;     [:db/add logan-id :thing/name "Logan"]
;     {:db/id (d/tempid :db.part/user) :thing/name "Pei Shi" :thing/children [logan-id]}]))
; 
; (q '[:find ?name ?child-name
;      :where [?e :thing/name ?name]
;             [?e :thing/children ?child]
;             [?child :thing/name ?child-name]]
;    (db conn))
; 

; Deletion
(defn retract [conn eid]
  @(d/transact conn `[[:db.fn/retractEntity ~eid]]))

; Absolute listings
(def all
  '[:find ?e
    :where [?e :thing/name]])

(def search
  '[:find ?e
    :in $ ?query
    :where [(fulltext $ :thing/name ?query) [[?e]]]])

(defn orphan? [db entity-id]
  (nil? (get (d/entity db entity-id) :thing/_children)))

(def orphans
  '[:find ?e
    :where [?e :thing/name]
           [(lists-of-things.db/orphan? $ ?e)]])

; Relative listings
(def children
  '[:find ?c
    :in $ ?parent-name
    :where [?p :thing/name ?parent-name]
           [?p :thing/children ?c]])

(def parents
  '[:find ?p
    :in $ ?child-name
    :where [?c :thing/name ?child-name]
           [?p :thing/children ?c]])

(def ancestor
  '[[[ancestor ?descendant ?ancestor]
     [?ancestor :thing/children ?descendant]]
    [[ancestor ?descendant ?ancestor]
     [?parent :thing/children ?descendant]
     [ancestor ?parent ?ancestor]]])

(def descendant
  '[[[descendant ?ancestor ?descendant]
     [?ancestor :thing/children ?descendant]]
    [[descendant ?ancestor ?descendant]
     [?ancestor :thing/children ?child]
     [descendant ?child ?descendant]]])

(def ancestors
  '[:find ?a
    :in $ % ?name
    :where [?e :thing/name ?name]
           [ancestor ?e ?a]])

(def descendants
  '[:find ?d
    :in $ % ?name
    :where [?e :thing/name ?name]
           [descendant ?e ?d]])

