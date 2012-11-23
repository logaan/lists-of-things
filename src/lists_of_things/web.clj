; This namespace contains side effects
(ns lists-of-things.web
  (:gen-class)
  (:use compojure.core
        lists-of-things.helpers
        [datomic.api :only [db entity]])
  (:require [compojure.handler        :as handler]
            [lists-of-things.wrappers :as wrappers]
            [cheshire.core            :as json]
            [compojure.route          :as route]
            [lists-of-things.db       :as lotsdb]
            [ring.adapter.jetty       :as jetty]
            [ring.util.response       :as response]))

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

(defroutes api-routes
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

(defroutes app-routes
  (context "/api" [] (-> api-routes wrappers/json wrappers/jsonp))

  (GET "/" [conn]
    (let [children (lotsdb/entities (db conn) lotsdb/orphans)]
      (thing-page {:thing/name "Orphans" :thing/children children})))

  (GET "/things/:id" [id conn]
    (->> (Long/parseLong id)
         (entity (db conn))
         thing-page))

  (GET "/search" [query conn]
    (let [results (lotsdb/entities (db conn) lotsdb/search query)]
      (search-results-page query results)))

  (GET "/results" [term conn]
     (let [results (lotsdb/entities (db conn) lotsdb/search (str term "*"))
          formatted (map (fn [r] {"id"    (:db/id r)
                                  "label" (:thing/name r)
                                  "value" (:thing/name r)}) results)]
     (json/generate-string formatted)))

  (POST "/things/:id/add-parent" [parent-id id conn]
    (lotsdb/add-parent conn (Long/parseLong id) (Long/parseLong parent-id))
    (response/redirect (str "/things/" id)))

  (POST "/things/:id/remove-parent" [parent-id id conn]
    (lotsdb/remove-parent conn (Long/parseLong id) (Long/parseLong parent-id))
    (response/redirect (str "/things/" id)))

  (POST "/things" [parent-id name conn]
    (let [thing {:thing/name name}]

      ; There's probably a more elegant way of doing this
      (if (not (empty? parent-id))
          (do
            (lotsdb/create-child conn (Long/parseLong parent-id) thing)
            (response/redirect (str "/things/" parent-id)))
          (do
            (lotsdb/create conn thing)
            (response/redirect "/")))))

  (DELETE "/things/:id" [parent-id id conn]
    (lotsdb/destroy conn (Long/parseLong id))
    (response/redirect (if (empty? parent-id) "/" (str "/things/" parent-id))))

  (PUT "/things/:id" [id old-name new-name conn]
    (lotsdb/edit-thing conn (Long/parseLong id) old-name new-name)
    (response/redirect (str "/things/" id)))

  (POST "/content" [thing-id text conn]
    (lotsdb/create-content conn (Long/parseLong thing-id) {:content/text text})
    (response/redirect (str "/things/" thing-id)))

  (DELETE "/contents/:id" [id conn]
    (lotsdb/destroy conn (Long/parseLong id))

    (layout
      [:h2 (str id " is gone.")]
      [:p [:a {:href "/"} "Checkout your list of things"]]))

  (route/resources "/")

  (route/not-found
    not-found))

(def app (->
  app-routes
  handler/site
  wrappers/access-control
  wrappers/connection))

(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))

