(ns lists-of-things.web
  (:use compojure.core
        hiccup.core
        [datomic.api :only [db q] :as d])
  (:require [compojure.handler :as handler]
            [compojure.route   :as route]
            [lists-of-things.seed :as seed]
            [lists-of-things.db   :as lotsdb]))

(def conn
  (seed/seed "datomic:mem://lists_of_things"))

; Helpers
(defn layout [& body]
  (html 
    [:html
      [:head
        [:title "Lists of things!"]]
      [:body
       [:h1 "Lists of things!"]
       (seq body)]]))

; Is there a library of helpers for inputs
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
    (layout
      [:h2 "Want a new thing?"]
      [:form {:action "/things" :method "POST"}
        [:p
         [:label {:for "name"} "What's it called?"]
          [:input#name {:name "name"}]]
        [:p
          [:input {:type "submit" :value "Make it happen"}]]]))

  (POST "/things" {params :params}
    (lotsdb/create conn {:thing/name (params :name)})

    (layout
      [:h2 "I've done it."]
      [:p "I made your thing " [:strong (params :name)]]
      [:p [:a {:href "/"} "Checkout your list of things"]]))
  
  (DELETE "/things/:id" [id]
    (lotsdb/destroy conn (Long/parseLong id))

    (layout
      [:h2 (str id " is gone.")]
      [:p [:a {:href "/"} "Checkout your list of things"]]))

  (route/not-found
    (html [:h1 "Not found"])))

(def app
  (handler/site app-routes))

