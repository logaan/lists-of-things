(ns lists-of-things.api
  (:use [compojure.core :only [defroutes GET POST DELETE]]
        [datomic.api :only [db entity] :as datomic])
  (:require [lists-of-things.wrappers :as wrappers]
            [cheshire.core            :as json]
            [lists-of-things.db       :as lotsdb]))

(defn format-content [content]
  {"text" (:content/text content)})

(defn rename [thing]
  {:id       (:db/id thing)
   :name     (:thing/name thing)})

(defn rename-with-siblings [thing]
  {:id       (:db/id thing)
   :name     (:thing/name thing)
   :parents  (map rename (:thing/_children thing))
   :children (map rename (:thing/children thing))
   :contents (map format-content (:thing/content thing))})

(defn rename-with-relations [thing]
  {:id       (:db/id thing)
   :name     (:thing/name thing)
   :children (map rename-with-siblings (:thing/children thing))
   :parents  (map rename (:thing/_children thing))
   :contents (map format-content (:thing/content thing))})

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

  ; Is there something more sensible we can return here? An undo url?
  (DELETE "/things/:id" [id conn]
    (lotsdb/destroy conn (Long/parseLong id))
    (json/generate-string {:success true}))

  ; Can you create things with :thing/_children?
  (POST "/things" [parent-id name conn]
    (let [thing {:thing/name name}]
      (json/generate-string {:id
        (if (empty? parent-id)
          (lotsdb/create conn thing)
          (lotsdb/create-child conn (Long/parseLong parent-id) thing))})))

  ; Needs sensible return
  (DELETE "/things/:child-id/parents/:parent-id" [child-id parent-id conn]
    (lotsdb/remove-parent conn (Long/parseLong child-id) (Long/parseLong parent-id))
    (json/generate-string {:success true}))

  ; Needs sensible return
  (POST "/things/:thing-id/parents" [thing-id parent-id conn]
    (lotsdb/add-parent conn (Long/parseLong thing-id) (Long/parseLong parent-id))
    (json/generate-string {:success true}))

  ; Needs sensible return
  (POST "/content" [thing-id text conn]
    (lotsdb/create-content conn (Long/parseLong thing-id) {:content/text text})
    (json/generate-string {:success true})))

; (routes {:request-method :post
;          :uri "/things/17592186047137/parents"
;          :params
;            {:conn (datomic/connect "datomic:free://localhost:4334/lists_of_things")
;             :parent-id "17592186046891"}})

