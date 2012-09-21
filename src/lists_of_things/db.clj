(ns lists-of-things.db
  (:use [datomic.api :only [q] :as d])
  (:refer-clojure :exclude [parents ancestors descendants]))

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

(def all
  '[:find ?e
    :where [?e :thing/name]])

(def search
  '[:find ?e
    :in $ ?query
    :where [(fulltext $ :thing/name ?query) [[?e]]]])

(defn orphan? [db entity-id]
  (nil? (get (d/entity db entity-id) :thing/_children)))

(defn count-children [db entity-id]
  (if-let [children (get (d/entity db entity-id) :thing/children)]
    (count children) 0))

(def orphans
  '[:find ?e
    :where [?e :thing/name]
           [(lists-of-things.db/orphan? $ ?e)]])

(def orphans-for-listing
  '[:find ?orphan ?name ?child-count
    :where [?orphan :thing/name ?name]
           [(lists-of-things.db/count-children $ ?orphan) ?child-count]
           [(lists-of-things.db/orphan? $ ?orphan)]])

(def children
  '[:find ?children
    :in $ ?parent
    :where [?parent :thing/children ?children]])

(def content-for-listing
  '[:find ?content ?text
    :in $ ?thing
    :where [?thing :thing/content ?content]
           [?content :content/text ?text]])

(def children-for-listing
  '[:find ?child ?name ?child-count
    :in $ ?parent
    :where [?child :thing/name ?name]
           [(lists-of-things.db/count-children $ ?child) ?child-count]
           [?parent :thing/children ?child]])

(def parents-for-listing
  '[:find ?parent ?name
    :in $ ?child
    :where [?parent :thing/name ?name]
           [?parent :thing/children ?child]])

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

