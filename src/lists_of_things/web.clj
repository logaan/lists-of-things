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

(defn template [& body]
  (html 
    [:html
      [:head
        [:title "Lists of things!"]]
      [:body
       (concat [[:h1 "Lists of things!"]] body)]]))

(defroutes app-routes
  (GET "/" []
    (let [db (db conn)]
      (template
        [:h2 "Here're all your things man"]
        [:div#new
         [:a {:href "/things/new"} "New"]
         [:ul
          (for [[eid] (q lotsdb/orphans db)]
            (let [name  (:thing/name (d/entity db eid))]
              [:li name]))]])))

  (GET "/things/new" [] (template
    [:h2 "Want a new thing?"]
    [:form {:action "/things" :method "POST"}
      [:p
       [:label {:for "name"} "What's it called?"]
        [:input#name {:name "name"}]]
      [:p
        [:input {:type "submit" :value "Make it happen"}]]]))

  (POST "/things" {params :params}
    (lotsdb/create conn {:thing/name (params :name)})

    (template
      [:h2 "I've done it."]
      [:p "I made your thing " [:strong (params :name)]]
      [:p [:a {:href "/"} "Checkout your list of things"]]))

  (route/not-found
    (html [:h1 "Not found"])))

(def app
  (handler/site app-routes))

