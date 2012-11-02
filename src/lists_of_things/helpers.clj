(ns lists-of-things.helpers
  (:use hiccup.core))

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

(defn thing-path [thing]
  (str "/things/" (:db/id thing)))

(defn link-to-thing [thing]
  [:a {:href (thing-path thing)} (:thing/name thing)])

(defn new-thing-form
  ([]          (new-thing-form nil))
  ([parent-id] [:form {:action "/things" :method "POST"}
                [:input {:type "hidden" :name "parent-id" :value parent-id}]
                [:p
                 [:input#name {:name "name" :placeholder "New thing"}]
                 [:input {:type "submit" :value "Create"}]]]))

(defn parent-item [parent]
  [:li (link-to-thing parent)
   " ( " [:a {:href "#"} "Remove"] " ) "])

(defn parents-sans-one [child parent]
  (filter #(not (= (:db/id %) (:db/id parent)))
          (:thing/_children child)))

(defn child-row [parent child]
  [:tr
   [:td [:input {:type "checkbox"}]]
   [:td
    [:h3 (link-to-thing child)]
    [:ul#parents
     (map parent-item (parents-sans-one child parent))]]
   [:td
    [:form {:action (thing-path child) :method "POST"}
     [:input {:type "hidden" :name "_method" :value "DELETE"}]
     [:input {:type "hidden" :name "parent-id" :value (:db/id parent)}]
     [:input {:type "submit" :value "Delete"}]]]])

(defn content-item [content]
  [:li
   [:p (:content/text content)]])

(def not-found
  (html [:h1 "Not found"]))

(defn layout [& body]
  (html
    [:html
     [:head
      [:link {:rel "stylesheet" :type "text/css" :href "/styles.css"}]
      [:script {:type "text/javascript" :src "/js/main.js"}]
      [:script {:type "text/javascript"} "goog.require('hello')"]]
     [:body
      [:form#search {:action "/search" :method "GET"}
       [:input {:name "query" :placeholder "Search"}]]
       body]]))

(defn search-result [thing]
  [:li
   [:a {:href (thing-path thing)} (:thing/name thing)]])

(defn search-results-page [query results]
  (layout
    [:h1 "Results for \"" query "\""]
    [:ul#results
     (map search-result results)]))

(defn preview-side [thing]
  [:div#preview.container
   [:h2 (:thing/name thing)]
   [:h3 "Edit"]
   [:form#edit-thing {:action (thing-path thing) :method "POST"}
    [:input {:type "hidden" :name "_method" :value "PUT"}]
    [:input {:type "hidden" :name "old-name" :value (:thing/name thing)}]
    [:input {:name "new-name" :value (:thing/name thing)}]
    [:input {:type "submit"}]]
   [:ul
    (map content-item (:thing/content thing))]
   [:form#new-content {:action "/content" :method "POST"}
    [:input {:type "hidden" :name "thing-id" :value (:db/id thing)}]
    [:div#toolbar]
    [:div#editMe]
    [:input {:type "hidden" :id "fieldContents" :name "text"}]
    [:input {:type "submit" :value "Create content"}]]
   [:script {:type "text/javascript"} "hello.setupEditor()"]])

(def introduction
  [:div#introduction.container
   [:h2 "Welcome to lists of things"]
   [:p "This app is meant to store all your lists. Your shopping lists, recipes,
       movies you want to see, restaurants you want to visit, things you need to
       do (or have done), even what stock your business has or where all your cards
       are on your project wall."]
   [:p "Here are the rules:"]
   [:ol
    [:li "Things can many children"]
    [:li "Things can have many parents"]
    [:li "Things can be in many places at once"]
    [:li "Things can have content"]]
   [:p "And here's an example of those rules put to use:"]
   [:ul
    [:li "Recipes"
     [:ul
      [:li "Paella"]
      [:li "Bacon and Eggs"]
      [:li "Chicken soup"]]]
    [:li "Moves to see"
     [:ul
      [:li "Brave"]
      [:li "FernGully"]]]
    [:li "Tasks"
     [:ul
      [:li "Todo"
       [:ul
        [:li "Pump bike tyres"]
        [:li "Wash dishes"]
        [:li "Pay back mike"]]]
      [:li "Done"
       [:ul
        [:li "Feed the cat"]
        [:li "Visit the bank"]]]]]]
   [:p "As you can see it's pretty flexible and light weight. Give it a
       try."]])

(defn thing-page [thing]
  (layout
    [:div#browse.container
     [:h1 (:thing/name thing)]
     [:ul#parents
      (if (zero? (count (:thing/_children thing)))
        [:li [:a {:href "/"} "Orphans"]]
        (map parent-item (:thing/_children thing)))
      [:li.new [:a {:href "#"} [:em "Add"]]]]
     [:table#children
      (map (partial child-row thing) (:thing/children thing))]
     (new-thing-form (:db/id thing))]
    (if (:db/id thing)
      (preview-side thing)
      introduction)))

