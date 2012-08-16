(ns lists-of-things.test.db
  (:use lists-of-things.db
        midje.sweet)

(def uri "datomic:mem://lists_of_things")
(d/create-database uri)
(def conn (d/connect uri))
@(d/transact conn seed/schema)
@(d/transact conn seed/test-data)


