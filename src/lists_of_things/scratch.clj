;; This file exists for playing around with ideas and testing queries against
;; the db. Think of it like a little repl/workpad.
(remove-ns 'lists-of-things.scratch)

(ns lists-of-things.scratch
  (:use [datomic.api :only [q] :as datomic]
        clojure.pprint)
  (:require [lists-of-things.seed :as seed]))

(def conn (datomic/connect "datomic:free://localhost:4334/lists_of_things"))

(def db (datomic/db conn))

(def thing-ids
  (map first
       (q '[:find ?eid
            :where [?eid :thing/name]]
          db)))

(def things
  (map (partial datomic/entity db) thing-ids))

(defn thing-info [thing]
  [(:db/id thing)
   (:thing/name thing)
   (count (:thing/children thing))])

(def todo       (datomic/entity db 17592186045461))
(def allen-keys (datomic/entity db 17592186045470))

(count (:thing/children todo))
(count (:thing/_children allen-keys))

