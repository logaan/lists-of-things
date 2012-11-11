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

