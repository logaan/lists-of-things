(ns lists-of-things.web
  (:use compojure.core
        hiccup.core
        [datomic.api :only [db q] :as d])
  (:require [compojure.handler :as handler]
            [compojure.route   :as route]
            [lists-of-things.seed :as seed]
            [lists-of-things.db   :as lotsdb]))

(def conn
  (seed/seed "datomic:free://localhost:4334/lists_of_things"))

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
    (let [db      (db conn)
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
          (lotsdb/create-child conn (Long/parseLong parent-id) thing)
          (lotsdb/create conn thing))

    (layout
      [:h2 "I've done it."]
      [:p "I made your thing " [:strong name]]
      [:p [:a {:href (str "/things/" parent-id "/children")} "Go to parent"]]
      [:p [:a {:href "/"} "Checkout your orphans"]])))

  (GET "/things/:id" [id]
    (let [thing-id (Long/parseLong id)
          thing (d/entity (db conn) thing-id)
          texts (q lotsdb/content (db conn) thing-id)]
      (layout
        [:h2 (:thing/name thing)]
        (map (fn [[text]] [:p text]) texts)
        [:form#new-content {:action "/content" :method "POST"}
          [:input {:type "hidden" :name "thing-id" :value id}]
          [:textarea {:name "text" :placeholder "Write something"}]
          [:input {:type "submit" :value "Create content"}]])))
  
  (POST "/content" {params :params}
    (let [thing-id (params :thing-id)
          text     (params :text)
          content  {:content/text text}]

      (lotsdb/create-content conn (Long/parseLong thing-id) content)
      
      (layout
        [:h2 "Holy shit! Contenet?!"]
        [:p "No way."]
        [:p [:a {:href (str "/things/" thing-id)} "Back to thing"]])))

  (GET "/things/:id/children" [id]
    (let [children (q lotsdb/children-for-listing (db conn) (Long/parseLong id))]
      (layout
        [:h2 "Its babies."]
          [:div#new
            [:a {:href (str "/things/" id "/new")} "New"]
            (listed-things children)])))
  
  (GET "/things/:id/new" [id]
    (new-page id))

  (DELETE "/things/:id" [id]
    (lotsdb/destroy conn (Long/parseLong id))

    (layout
      [:h2 (str id " is gone.")]
      [:p [:a {:href "/"} "Checkout your list of things"]]))

  (route/not-found
    (html [:h1 "Not found"])))

(def app
  (handler/site app-routes))

