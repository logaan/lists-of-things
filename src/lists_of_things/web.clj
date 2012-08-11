(ns lists_of_things.web
  (:use compojure.core
        hiccup.core
        [datomic.api :only [db q] :as d])
  (:require [compojure.handler :as handler]
            [compojure.route   :as route]))

(def uri "datomic:mem://lists_of_things")
(def conn (d/connect uri))

(defn orphan? [db entity-id]
  (nil? (get (d/entity db entity-id) :thing/_children)))

(defn template [& body]
  (html 
    [:html
      [:head
        [:title "Lists of things!"]]
      [:body
       (concat [[:h1 "Lists of things!"]] body)]]))

(defroutes app-routes
  (GET "/" [] (template
    [:h2 "Here're all your things man"]
    [:div#new
      [:a {:href "/things/new"} "New"]]
    (vec
      (concat [:ul]
        (mapv (fn [[name]] [:li name])
              (q '[:find ?name
                   :where
                   [?e :thing/name ?name]
                   [(lists-of-things.load/orphan? $ ?e)]]
                 (db conn)))))))

  (GET "/things/new" [] (template
    [:h2 "Want a new thing?"]
    [:form {:action "/things" :method "POST"}
      [:p
       [:label {:for "name"} "What's it called?"]
        [:input#name {:name "name"}]]
      [:p
        [:input {:type "submit" :value "Make it happen"}]]]))

  (POST "/things" {params :params}
    @(d/transact conn [
      [:db/add (d/tempid :db.part/user)
               :thing/name (params :name)]])
    (template
      [:h2 "I've done it."]
      [:p "I made your thing " [:strong (params :name)]]
      [:p [:a {:href "/"} "Checkout your list of things"]]))

  (route/not-found
    (html [:h1 "Not found"])))

(def app
  (handler/site app-routes))

