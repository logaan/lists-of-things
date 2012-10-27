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

(defn thing-page [thing]
  (html
    [:html
     [:head
      [:link {:rel "stylesheet" :type "text/css" :href
              "/browse-and-preview.css"}]]
     [:body
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
      [:div#preview.container
       [:h2 (:thing/name thing)]
       [:ul
        (map content-item (:thing/content thing))]
       [:form#new-content {:action "/content" :method "POST"}
        [:input {:type "hidden" :name "thing-id" :value (:db/id thing)}]
        [:textarea {:name "text" :placeholder "Write something"}]
        [:input {:type "submit" :value "Create content"}]]]]]))

