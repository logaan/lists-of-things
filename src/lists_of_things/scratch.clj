;; This file exists for playing around with ideas and testing queries against
;; the db. Think of it like a little repl/workpad.
(ns lists-of-things.scratch
  (:use [datomic.api :only [q] :as datomic]
        midje.sweet
        clojure.pprint)
  (:require [lists-of-things.helpers :as helpers]
            [lists-of-things.db :as db]))

(def conn (datomic/connect "datomic:free://localhost:4334/lists_of_things"))

(def snapshot (datomic/db conn))

(def matu-eid      17592186047205)
(def new-thing-eid 17592186047214)

17592186047205
17592186047214

(db/remove-parent conn new-thing-eid matu-eid)

(->> matu-eid
     (datomic/entity (datomic/db conn))
     :thing/children
     (map (juxt :thing/name :db/id)))
