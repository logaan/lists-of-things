(ns lists-of-things.load
  (:use [datomic.api :only [db q] :as d]
        [clojure.pprint]))

(def uri "datomic:mem://lists_of_things")      

(d/create-database uri)

(def conn (d/connect uri))

(def lists-of-things-schema
  [
   {:db/id #db/id[:db.part/db] ; no idea what this means
    :db/ident :thing/name
    :db/valueType :db.type/string ; check max length
    :db/cardinality :db.cardinality/one
    :db/fulltext true
    :db/doc "A thing's name"
    :db.install/_attribute :db.part/db} ; no idea what this means either

   {:db/id #db/id[:db.part/db] ; no idea what this means
    :db/ident :thing/children
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/doc "A thing's child things"
    :db.install/_attribute :db.part/db} ; no idea what this means either
  ])

; Returns true or errors. Not interesting.
(.get (d/transact conn lists-of-things-schema))

(def movies
  (let [bambi      {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Bambi"}
        pokahontas {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Pokahontas"}
        cinderella {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Cinderella"}
        movies     {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Movies"
                    :thing/children (map :db/id [bambi pokahontas cinderella])}]
    [bambi pokahontas cinderella movies]))

; Returns true or errors. Not interesting.
@(d/transact conn movies)

; This grabs a snapshop of the database
(def tdb (db conn))

; Query database
(def all-entities-with-thing-names
   (q '[:find ?d :where [?d :thing/name]] tdb))

; Could this be using @(d/entity ...) instead?
(def thing-names
  (map #(get (d/entity tdb (first %1)) :thing/name)
       all-entities-with-thing-names))

thing-names

(def all-the-things
  (q '[:find ?name ?children
       :where [?thing :thing/name ?name]
              [?thing :thing/children ?children]] tdb))

all-the-things

