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
        [:title "Lists of things"]
        [:meta {:name "viewport"
                :content "initial-scale=1.0,maximum-scale=1.0"}]]
      [:body
       [:h1 "Lists of things"]
       (seq body)]]))

; Is there a library of helpers for inputs?
(defn link-to-thing [id name]
  [:a {:href (str "/things/" id)} name])

(defn link-to-things-children [id name]
  [:a {:href (str "/things/" id "/children")} name])

(defn listed-thing [[id name]]
  [:li
    (link-to-things-children id name)])

(defn listed-things [things]
  [:ul {:style "display: inline; float: left;"}
   (map listed-thing things)])

(defn thing-row [[id name child-count]]
  [:tr
    [:td
      (link-to-thing id name)]
    [:td
      [:a {:href (str "/things/" id "/children")} (str child-count " children")]]
    [:td
      [:form {:action (str "/things/" id) :method "POST"}
        [:input {:type "hidden" :name "_method" :value "DELETE"}]
        [:input {:type "submit" :value "Delete"}]]]])

(defn table-of-things [things]
  [:table {:style "width: 100%"}
    (map thing-row things)])

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
        [:h2 "Orphaned things"]
        [:div#orphans {:style "border: 1px solid black; padding: 1em;"}
          [:div#new
            [:a {:href "/things/new"} "Add new thing"]]
          (table-of-things orphans)])))

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
          [:div#children {:style "border: 1px solid black; padding: 1em; clear: both;"}
            [:div#new
              [:a {:href (str "/things/" id "/new")} "Add new child"]]
            (table-of-things children)])))
  
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

