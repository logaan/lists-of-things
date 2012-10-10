(ns lists-of-things.db
  (:use [datomic.api :only [q] :as d])
  (:refer-clojure :exclude [parents ancestors descendants]))

; NOTE: Do these transact calls really need to be de-refd?
(defn create [conn thing]
  @(d/transact conn [(merge {:db/id (d/tempid :db.part/user)} thing)]))

(defn create-child [conn parent-id thing]
  (let [id (d/tempid :db.part/user)]
    @(d/transact conn [(merge {:db/id id} thing)
                       [:db/add parent-id :thing/children id]])))

(defn create-content [conn thing-id content]
  (let [id (d/tempid :db.part/user)]
    @(d/transact conn [(merge {:db/id id} content)
                       [:db/add thing-id :thing/content id]])))

(defn destroy [conn eid]
  @(d/transact conn `[[:db.fn/retractEntity ~eid]]))

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

