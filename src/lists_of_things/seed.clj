(ns lists-of-things.seed
  (:use [datomic.api :only [db q] :as d]))

(def schema
  [{:db/id                  #db/id[:db.part/db]
    :db/ident               :thing/name
    :db/valueType           :db.type/string
    :db/cardinality         :db.cardinality/one
    :db/fulltext            true
    :db/doc                 "A thing's name"
    :db.install/_attribute  :db.part/db}

   {:db/id                  #db/id[:db.part/db]
    :db/ident               :thing/children
    :db/valueType           :db.type/ref
    :db/cardinality         :db.cardinality/many
    :db/doc                 "A thing's child things"
    :db.install/_attribute  :db.part/db}

   {:db/id                  #db/id[:db.part/db]
    :db/ident               :thing/content
    :db/valueType           :db.type/ref
    :db/cardinality         :db.cardinality/many
    :db/doc                 "A thing's contents"
    :db.install/_attribute  :db.part/db}

   {:db/id                  #db/id[:db.part/db]
    :db/ident               :content/text
    :db/valueType           :db.type/string
    :db/cardinality         :db.cardinality/one
    :db/fulltext            true
    :db/doc                 "The body of text content"
    :db.install/_attribute  :db.part/db}])

(defn seed [uri]
  (let [res  (d/create-database uri)
        conn (d/connect uri)]
    @(d/transact conn schema)
    conn))
