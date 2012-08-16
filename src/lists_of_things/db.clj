; This module defines all the database operations for now. It could be broken
; into a db ns and then a further namespace for each kind of thing we'll be
; persisting perhaps.
(ns lists-of-things.db
  (:use [datomic.api :only [q] :as d]
        midje.sweet)
  (:require [lists-of-things.seed :as seed]))

(def uri "datomic:mem://lists_of_things")
(d/create-database uri)
(def conn (d/connect uri))
@(d/transact conn seed/schema)
@(d/transact conn seed/test-data)
(def db (d/db conn))

(def search
  '[:find ?n
    :in $ ?query
    :where [(fulltext $ :thing/name ?query)
           [[?e ?n]]]])

; Should be changed both in implementation and test to return entities not just
; names.
(fact (q search db "Bambi")
  => #{["Bambi"]})

(def children
  '[:find ?name
    :in $ ?parent-name
    :where [?e :thing/name ?parent-name]
           [?e :thing/children ?c]
           [?c :thing/name ?name]])

(fact (q children db "Disney")
  => #{["Cinderella"] ["Bambi"] ["Pokahontas"]})

(def parents
  '[:find ?name
    :in $ ?child-name
    :where [?e :thing/name ?child-name]
           [?p :thing/children ?e]
           [?p :thing/name ?name]])

(fact (q parents db "Pokahontas")
  => #{["Disney"]})

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
  '[:find ?n
    :in $ % ?name
    :where [?e :thing/name ?name]
           [ancestor ?e ?a]
           [?a :thing/name ?n]])

(def descendants
  '[:find ?n
    :in $ % ?name
    :where [?e :thing/name ?name]
           [descendant ?e ?a]
           [?a :thing/name ?n]])

(fact (q ancestors db ancestor "Pokahontas")
  => #{["Disney"] ["Movies"]})

(fact (q descendants db descendant "Movies")
  => #{["Cinderella"] ["Disney"] ["Bambi"] ["Pokahontas"]})

(defn orphan? [db entity-id]
  (nil? (get (d/entity db entity-id) :thing/_children)))

(def orphans
  '[:find ?name
    :where [?e :thing/name ?name]
           [(lists-of-things.db/orphan? $ ?e)]])

(fact (q orphans db)
  => #{["Movies"]})

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

