(ns lists-of-things.api
  (:use [compojure.core :only [defroutes GET POST]]
        [datomic.api :only [db entity] :as datomic])
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
       (json/generate-string tidied)))

  ; Can you create things with :thing/_children?
  (POST "/things" [parent-id name conn]
    (let [thing {:thing/name name}]
      (json/generate-string {:id
        (if (empty? parent-id)
          (lotsdb/create conn thing)
          (lotsdb/create-child conn (Long/parseLong parent-id) thing))}))))

; (routes {:request-method :post 
;          :uri "/things"
;          :params
;          {:conn (datomic/connect "datomic:free://localhost:4334/lists_of_things")
;           :name "Foo"}})
