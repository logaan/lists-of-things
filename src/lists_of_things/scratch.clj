;; This file exists for playing around with ideas and testing queries against
;; the db. Think of it like a little repl/workpad.
(remove-ns 'lists-of-things.scratch)

(ns lists-of-things.scratch
  (:use [datomic.api :only [q] :as datomic]
        midje.sweet
        clojure.pprint)
  (:require [lists-of-things.helpers :as helpers]
            [lists-of-things.db :as db]))

(def conn (datomic/connect "datomic:free://localhost:4334/lists_of_things"))

(def db (datomic/db conn))

(def thing-ids
  (map first
       (q '[:find ?eid
            :where [?eid :thing/name]]
          db)))

(def things
  (map (partial datomic/entity db) thing-ids))

(def todo-id 17592186045461)

(def todo (datomic/entity db todo-id))

(def allen-keys-id 17592186045470)

(def allen-keys (datomic/entity db allen-keys-id))

; (spit "/Users/logaan/Desktop/thing-page.html" (helpers/thing-page todo))

;; Parent lifecycle
(def monkey-wrench-eid
  (db/id-of-created (db/create conn {:thing/name "Monkey Wrench"})))

(defn parent-names [eid]
  (map :thing/name
       (:thing/_children
         (datomic/entity (datomic/db conn) eid))))

(parent-names monkey-wrench-eid)

(db/add-parent conn monkey-wrench-eid allen-keys-id)

(parent-names monkey-wrench-eid)

(db/change-parent conn monkey-wrench-eid allen-keys-id todo-id)

(parent-names monkey-wrench-eid)

(db/remove-parent conn monkey-wrench-eid todo-id)

(parent-names monkey-wrench-eid)

(db/destroy conn monkey-wrench-eid)

