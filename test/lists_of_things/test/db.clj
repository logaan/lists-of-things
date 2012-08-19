(ns lists-of-things.test.db
  (:use midje.sweet
        [datomic.api :only [q] :as d])
  (:require [lists-of-things.seed :as seed]
            [lists-of-things.db :as db]))

; Data
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

; Utility
(defn element->name [db [eid]]
  (:thing/name (d/entity db eid)))

(defn names [elements db]
  (into #{} (map (partial element->name db) elements)))

(defn query-for-names [db query & args]
  (names (apply (partial q query db) args) db))

; Setup
(def conn
  (seed/seed "datomic:mem://lists_of_things_test"))

; Creation and deletion
(db/create conn {:thing/name "Logan"})

(mapv (fn [[eid]] (db/destroy conn eid))
      (q db/search (d/db conn) "Logan"))

; Queries
(def data-db
  (d/with (d/db conn) test-data))

(fact (query-for-names data-db db/search "Bambi")
  => #{"Bambi"})

(fact (query-for-names data-db db/children "Disney")
  => #{"Cinderella" "Bambi" "Pokahontas"})

(fact (query-for-names data-db db/parents "Pokahontas")
  => #{"Disney"})

(fact (query-for-names data-db db/ancestors db/ancestor "Pokahontas")
  => #{"Disney" "Movies"})

(fact (query-for-names data-db db/descendants db/descendant "Movies")
  => #{"Cinderella" "Disney" "Bambi" "Pokahontas"})

(fact (query-for-names data-db db/orphans)
  => #{"Movies"})

(q db/orphans-for-listing data-db)

