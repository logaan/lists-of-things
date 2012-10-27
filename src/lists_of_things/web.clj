; This namespace contains side effects
(ns lists-of-things.web
  (:gen-class)
  (:use compojure.core
        lists-of-things.helpers
        ring.adapter.jetty
        [datomic.api :only [db q] :as d])
  (:require [compojure.handler :as handler]
            [compojure.route   :as route]
            [lists-of-things.seed :as seed]
            [lists-of-things.db   :as lotsdb]
            [ring.util.response   :as response]))

(def conn (atom nil))

(defroutes app-routes
  (GET "/" []
    (let [children (lotsdb/entities (db @conn) lotsdb/orphans)]
      (thing-page {:thing/name "Oprhans" :thing/children children})))

  (GET "/things/:id" [id]
    (->> (Long/parseLong id)
         (d/entity (db @conn))
         thing-page))

  (POST "/things" {{:keys [parent-id name]} :params}
    (let [thing {:thing/name name}]

      ; There's probably a more elegant way of doing this
      (if (not (empty? parent-id))
          (do
            (lotsdb/create-child @conn (Long/parseLong parent-id) thing)
            (response/redirect (str "/things/" parent-id)))
          (do
            (lotsdb/create @conn thing)
            (response/redirect "/")))))

  (DELETE "/things/:id" {{:keys [parent-id id]} :params}
    (lotsdb/destroy @conn (Long/parseLong id))
    (response/redirect (if (empty? parent-id) "/" (str "/things/" parent-id))))
  
  (PUT "/things/:id" {{id "id" parent "parent"} :params}
    (lotsdb/add-parent @conn id parent)
    
    (layout
      [:h2 "added parent"]))

  (POST "/content" {{:keys [thing-id text]} :params}
    (lotsdb/create-content @conn (Long/parseLong thing-id) {:content/text text})
    (response/redirect (str "/things/" thing-id)))

  (DELETE "/contents/:id" [id]
    (lotsdb/destroy @conn (Long/parseLong id))

    (layout
      [:h2 (str id " is gone.")]
      [:p [:a {:href "/"} "Checkout your list of things"]]))

  (route/resources "/")

  (route/not-found
    not-found))

(defn make-connection! []
  (reset! conn (seed/seed "datomic:free://localhost:4334/lists_of_things")))

(defn app [request]
  (if (not @conn)
    (make-connection!))
  ((handler/site app-routes) request))

(defn -main [& args]
  (run-jetty app {:port 3000}))

