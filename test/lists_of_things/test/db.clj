(ns lists-of-things.test.db
  (:use midje.sweet
        [datomic.api :only [q] :as d])
  (:require [lists-of-things.seed :as seed]
            [lists-of-things.db :as db]))

; Utility
(defn element->name [db [eid]]
  (:thing/name (d/entity db eid)))

(defn names [elements db]
  (into #{} (map (partial element->name db) elements)))

(defn query-for-names [db query & args]
  (names (apply (partial q query db) args) db))

; Setup
(def uri "datomic:mem://lists_of_things")

(d/create-database uri)

(def conn (d/connect uri))

@(d/transact conn seed/schema)

; Creation and deletion
(db/create conn {:thing/name "Logan"})

(fact (query-for-names (d/db conn) db/all) => #{"Logan"})

(for [[eid] (q db/search (d/db conn) "Logan")]
  (db/destroy conn eid))

; Queries
(def data-db
  (d/with (d/db conn) seed/test-data))

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

