(ns lists-of-things.db
  (:use [datomic.api :only [q] :as d])
  (:refer-clojure :exclude [parents ancestors descendants]))

; NOTE: Do these transact calls really need to be de-refd?
; NOTE: Could we just move the transact call out into the controller? Just make
; these methods return transaction data.. That'd make this module purely
; functional.
(defn create [conn thing]
  (let [id          (d/tempid :db.part/user)
        transaction @(d/transact conn [(merge {:db/id id} thing)])]
    (d/resolve-tempid (d/db conn) (:tempids transaction) id)))

(defn create-child [conn parent-id thing]
  (let [id           (d/tempid :db.part/user)
        transaction @(d/transact conn [(merge {:db/id id} thing)
                       [:db/add parent-id :thing/children id]])]
    (d/resolve-tempid (d/db conn) (:tempids transaction) id)))

(defn edit-thing [conn id old-name new-name]
  @(d/transact conn [[:db/retract id :thing/name old-name]
                     [:db/add     id :thing/name new-name]]))

(defn create-content [conn thing-id content]
  (let [id (d/tempid :db.part/user)]
    @(d/transact conn [(merge {:db/id id} content)
                       [:db/add thing-id :thing/content id]])))

(defn destroy [conn eid]
  @(d/transact conn [[:db.fn/retractEntity eid]]))

(defn add-parent [conn child-id parent-id]
  @(d/transact conn [[:db/add parent-id :thing/children child-id]]))

(defn change-parent [conn child-id old-parent-id new-parent-id]
  @(d/transact conn [[:db/retract old-parent-id :thing/children child-id]
                     [:db/add     new-parent-id :thing/children child-id]]))

(defn remove-parent [conn child-id parent-id]
  @(d/transact conn [[:db/retract parent-id :thing/children child-id]]))

;; Helper
(defn entities [db query & params]
  (map (fn [[eid]] (d/entity db eid))
       (apply q (concat [query db] params))))

(defn id-of-created [transaction]
  (first (vals (:tempids transaction))))

;; Queries
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

(def all
  '[:find ?e
    :where [?e :thing/name]])


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


