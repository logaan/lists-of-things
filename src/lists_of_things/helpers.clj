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

(defn listed-thing [thing]
  [:li (link-to-thing thing)])

(defn listed-things [things]
  [:ul {:style "display: inline; float: left;"}
   (map listed-thing things)])

(defn thing-row [thing]
  [:tr
    [:td
      (link-to-thing thing)]
    [:td
      (str (count (:thing/children thing)) " children")]
    [:td
      [:form {:action (thing-path thing) :method "POST"}
        [:input {:type "hidden" :name "_method" :value "DELETE"}]
        [:input {:type "submit" :value "Delete"}]]]])

(defn table-of-things [things]
  [:table {:style "width: 100%"}
    (map thing-row things)])

(defn listed-text-content [content]
  [:form {:action (str "/contents/" (:db/id content)) :method "POST"}
    [:input {:type "hidden" :name "_method" :value "DELETE"}]
    [:input {:type "submit" :value "Delete"}]
    [:p.text.content (:content/text content)]])

(defn listed-text-contents [contents]
  (map listed-text-content contents))

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
     (map parent-item (parents-sans-one child parent))]]])

(defn content-item [content]
  [:li
   [:p (:content/text content)]])

(def not-found
  (html [:h1 "Not found"]))

(defn home-page [orphans]
  (layout
    [:h2 "Orphaned things"]
    [:div#orphans {:style "border: 1px solid black; padding: 1em;"}
     (new-thing-form)
     (table-of-things orphans)]))

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

