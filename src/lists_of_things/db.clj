; This module defines all the database operations for now. It could be broken
; into a db ns and then a further namespace for each kind of thing we'll be
; persisting perhaps.
(ns lists-of-things.db
  (:use [datomic.api :only [q] :as d]
        midje.sweet)
  (:require [lists-of-things.seed :as seed]))

; Make sure this blows away the db first. Or inserts the data as a "what if"
; kinda deal.
(def uri "datomic:mem://lists_of_things")
(d/create-database uri)
(def conn (d/connect uri))
@(d/transact conn seed/schema)
@(d/transact conn seed/test-data)
(def db (d/db conn))

(defn element->name [db element]
  (->> element first (d/entity db) :thing/name))

(defn names [elements db]
  (into #{} (map (partial element->name db) elements)))

(defn query-for-names [db query & args]
  (names (apply (partial q query db) args) db))

(def search
  '[:find ?e
    :in $ ?query
    :where [(fulltext $ :thing/name ?query) [[?e]]]])


(fact (query-for-names db search "Bambi")
  => #{"Bambi"})

(def children
  '[:find ?c
    :in $ ?parent-name
    :where [?p :thing/name ?parent-name]
           [?p :thing/children ?c]])

(fact (query-for-names db children "Disney")
  => #{"Cinderella" "Bambi" "Pokahontas"})

(def parents
  '[:find ?p
    :in $ ?child-name
    :where [?c :thing/name ?child-name]
           [?p :thing/children ?c]])

(fact (query-for-names db parents "Pokahontas")
  => #{"Disney"})

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

(fact (query-for-names db ancestors ancestor "Pokahontas")
  => #{"Disney" "Movies"})

(fact (query-for-names db descendants descendant "Movies")
  => #{"Cinderella" "Disney" "Bambi" "Pokahontas"})

(defn orphan? [db entity-id]
  (nil? (get (d/entity db entity-id) :thing/_children)))

; Seems wrong that this needs something like name
(def orphans
  '[:find ?e
    :where [?e :thing/name]
           [(lists-of-things.db/orphan? $ ?e)]])

(fact (query-for-names db orphans)
  => #{"Movies"})

; "Creation"
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
; "Teardown"
; 
; (def all-things
;   (map first (q '[:find ?e :where [?e :thing/name]] (db conn))))
; 
; (map #(retract % conn) all-things)

