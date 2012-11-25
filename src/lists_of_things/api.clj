(ns lists-of-things.api
  (:use [compojure.core :only [defroutes GET]]
        [datomic.api :only [db entity]])
  (:require [lists-of-things.wrappers :as wrappers]
            [cheshire.core            :as json]
            [lists-of-things.db       :as lotsdb]))

(defn rename [thing]
  {:id       (:db/id thing)
   :name     (:thing/name thing)})

(defn rename-with-siblings [thing]
  {:id       (:db/id thing)
   :name     (:thing/name thing)
   :parents  (map rename (:thing/_children thing))})

(defn rename-with-relations [thing]
  {:id       (:db/id thing)
   :name     (:thing/name thing)
   :children (map rename-with-siblings (:thing/children thing))
   :parents  (map rename (:thing/_children thing))})

(defroutes routes
  (GET "/orphans" [conn]
    (let [children  (lotsdb/entities (db conn) lotsdb/orphans)
          formatted (map rename-with-relations children)
          orphan    {:name "Orphans" :children formatted}]
       (json/generate-string orphan)))

  (GET "/things/:id" [id conn]
    (->> (Long/parseLong id)
      (entity (db conn))
      rename-with-relations
      json/generate-string))

  (GET "/search" [query conn]
    (let [results (lotsdb/entities (db conn) lotsdb/search query)
          tidied  (mapv rename-with-relations results)]
       (json/generate-string tidied))))


