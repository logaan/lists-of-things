(remove-ns 'lists-of-things.web)
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
  (GET "/browse-and-preview" []
    browse-and-preview)

  (GET "/" []
    (let [db      (db @conn)
          orphans (q lotsdb/orphans-for-listing db)]
      (layout
        [:h2 "Orphaned things"]
        [:div#orphans {:style "border: 1px solid black; padding: 1em;"}
          (new-thing-form)
          (table-of-things orphans)])))

  (POST "/things" {params :params}
    (let [parent-id (params :parent-id)
          name      (params :name)
          thing     {:thing/name name}]

      ; There's probably a more elegant way of doing this
      (if (not (empty? parent-id))
          (do
            (lotsdb/create-child @conn (Long/parseLong parent-id) thing)
            (response/redirect (str "/things/" parent-id)))
          (do
            (lotsdb/create @conn thing)
            (response/redirect "/")))))

  (POST "/content" {params :params}
    (let [thing-id (params :thing-id)
          text     (params :text)
          content  {:content/text text}]

      (lotsdb/create-content @conn (Long/parseLong thing-id) content)
      (response/redirect (str "/things/" thing-id))))

  (GET "/things/:id" [id]
    (let [db       (db @conn)
          thing-id (Long/parseLong id)
          thing    (d/entity db thing-id)
          children (q lotsdb/children-for-listing db thing-id)
          parents  (q lotsdb/parents-for-listing  db thing-id)]
      (layout
        [:h2 (:thing/name thing)]
          [:div#parents
            (if (zero? (count parents))
              [:ul [:li [:a {:href "/"} "Orphans"]]]
              (listed-things parents))]
          [:div#content
           [:ul
           (map (fn [content] [:li (:content/text content)]) (:thing/content thing))]
          [:form#new-content {:action "/content" :method "POST"}
            [:input {:type "hidden" :name "thing-id" :value id}]
            [:textarea {:name "text" :placeholder "Write something"}]
            [:input {:type "submit" :value "Create content"}]]]
          [:div#children {:style "border: 1px solid black; padding: 1em; clear: both;"}
            (new-thing-form thing-id)
            (table-of-things children)])))
  
  (DELETE "/contents/:id" [id]
    (lotsdb/destroy @conn (Long/parseLong id))

    (layout
      [:h2 (str id " is gone.")]
      [:p [:a {:href "/"} "Checkout your list of things"]]))

  (DELETE "/things/:id" [id]
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

