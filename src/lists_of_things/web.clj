(ns lists-of-things.web
  (:gen-class)
  (:use compojure.core
        hiccup.core
        ring.adapter.jetty
        [datomic.api :only [db q] :as d])
  (:require [compojure.handler :as handler]
            [compojure.route   :as route]
            [lists-of-things.seed :as seed]
            [lists-of-things.db   :as lotsdb]
            [ring.util.response   :as response]))

(def conn (atom nil))

; Helpers
(defn layout [& body]
  (html 
    [:html
      [:head
        [:title "Lists of things!"]]
      [:body
       [:h1 "Lists of things!"]
       (seq body)]]))

; Is there a library of helpers for inputs?
(defn listed-thing [[id name child-count]]
  [:li
    [:a {:href (str "/things/" id)} name] " "
    [:a {:href (str "/things/" id "/children")} (str child-count " children")]
    [:form {:action (str "/things/" id) :method "POST"}
      [:input {:type "hidden" :name "_method" :value "DELETE"}]
      [:input {:type "submit" :value "Delete"}]]])

(defn listed-things [things]
  [:ul
    (map listed-thing things)])

(defn listed-text-content [[id text]]
  [:form {:action (str "/contents/" id) :method "POST"}
    [:input {:type "hidden" :name "_method" :value "DELETE"}]
    [:input {:type "submit" :value "Delete"}]
    [:p.text.content text]])

(defn listed-text-contents [content]
  (map listed-text-content content))

; Move out to a views ns
(defn new-page [parent-id]
  (layout
    [:h2 "Want a new thing?"]
    [:form {:action "/things" :method "POST"}
      [:input {:type "hidden" :name "parent-id" :value parent-id}]
      [:p
       [:label {:for "name"} "What's it called?"]
        [:input#name {:name "name"}]]
      [:p
        [:input {:type "submit" :value "Make it happen"}]]]))

; Routes, controllers and views all munged together
(defroutes app-routes
  (GET "/" []
    (let [db      (db @conn)
          orphans (q lotsdb/orphans-for-listing db)]
      (layout
        [:h2 "Here're all your things man"]
        [:div#new
          [:a {:href "/things/new"} "New"]
          (listed-things orphans)])))

  (GET "/things/new" []
    (new-page nil))

  (POST "/things" {params :params}
    (let [parent-id (params :parent-id)
          name      (params :name)
          thing     {:thing/name name}]

      ; There's probably a more elegant way of doing this
      (if (not (empty? parent-id))
          (do
            (lotsdb/create-child @conn (Long/parseLong parent-id) thing)
            (response/redirect (str "/things/" parent-id "/children")))
          (do
            (lotsdb/create @conn thing)
            (response/redirect "/")))))

  (GET "/things/:id" [id]
    (let [thing-id (Long/parseLong id)
          thing (d/entity (db @conn) thing-id)
          texts (q lotsdb/content-for-listing (db @conn) thing-id)]
      (layout
        [:h2 (:thing/name thing)]
        (listed-text-contents texts)
        [:form#new-content {:action "/content" :method "POST"}
          [:input {:type "hidden" :name "thing-id" :value id}]
          [:textarea {:name "text" :placeholder "Write something"}]
          [:input {:type "submit" :value "Create content"}]])))

  (POST "/content" {params :params}
    (let [thing-id (params :thing-id)
          text     (params :text)
          content  {:content/text text}]

      (lotsdb/create-content @conn (Long/parseLong thing-id) content)
      (response/redirect (str "/things/" thing-id))))

  (GET "/things/:id/children" [id]
    (let [children (q lotsdb/children-for-listing (db @conn) (Long/parseLong id))]
      (layout
        [:h2 "Its babies."]
          [:div#new
            [:a {:href (str "/things/" id "/new")} "New"]
            (listed-things children)])))
  
  (GET "/things/:id/new" [id]
    (new-page id))

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

  (route/not-found
    (html [:h1 "Not found"])))

(defn app [request]
  (if (not @conn)
    (reset! conn (seed/seed "datomic:free://localhost:4334/lists_of_things")))
  ((handler/site app-routes) request))

(defn -main [& args]
  (run-jetty app {:port 3000}))

