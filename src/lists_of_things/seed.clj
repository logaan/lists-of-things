(ns lists-of-things.seed
  (:use [datomic.api :only [db q] :as d]))

(def schema
  [{:db/id #db/id[:db.part/db]
    :db/ident :thing/name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/fulltext true
    :db/doc "A thing's name"
    :db.install/_attribute :db.part/db}

   {:db/id #db/id[:db.part/db]
    :db/ident :thing/children
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/doc "A thing's child things"
    :db.install/_attribute :db.part/db}])

(def test-data
  (let [bambi      {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Bambi"}
        pokahontas {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Pokahontas"}
        cinderella {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Cinderella"}
        disney     {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Disney"
                    :thing/children (map :db/id [bambi pokahontas cinderella])}
        movies     {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Movies"
                    :thing/children (map :db/id [disney])}]

    [bambi pokahontas cinderella disney movies]))

(defn seed [uri]
  (let [res  (d/create-database uri)
        conn (d/connect uri)]
    @(d/transact conn schema)
    @(d/transact conn test-data)
    conn))
