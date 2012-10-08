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

(defn new-thing-form
  ([]
  (new-thing-form nil))
  
  ([parent-id]
    [:form {:action "/things" :method "POST"}
     [:input {:type "hidden" :name "parent-id" :value parent-id}]
     [:p
      [:label {:for "name"} "What's it called?"]
      [:input#name {:name "name"}]
      [:input {:type "submit" :value "Make it happen"}]]]))

(defn child-row [title]
  [:tr
   [:td [:input {:type "checkbox"}]]
   [:td
    [:h3 title]
    [:ul#parents
     [:li [:a {:href "#"} "Lorem ipsum"]]
     [:li [:a {:href "#"} "Dolor sit amet"]]]]])

(defn parent-item [title]
  [:li [:a {:href "#"} title]
   " ( " [:a {:href "#"} "Remove"] " ) "])

(defroutes app-routes
  (GET "/browse-and-preview" []
    (html
      [:html
       [:head
        [:link {:rel "stylesheet" :type "text/css" :href
                "browse-and-preview.css"}]]
       [:body
        [:div#browse.container
         [:h1 "Recipes"]
          [:ul#parents
           (parent-item "Entertaining")
           (parent-item "Food")
           [:li.new [:a {:href "#"} [:em "Add"]]]]
         [:table#children
          (child-row "Paela")
          (child-row "Chorizo pasta")
          (child-row "Pasta bake")
          (child-row "Chicken caesar salad")
          (child-row "Chicken noodle soup")
          (child-row "French toast")
          (child-row "Bacon and eggs")]]
        [:div#preview.container
         [:h2 "Saganaki"]
         [:p "Saganaki (Greek σαγανάκι, literally little frying pan) refers to
             various dishes prepared in Greek cuisine and is named after the
          single-serving frying pan in which it is cooked."]
         [:div.image [:img {:src "http://www.seductionmeals.com/flaming_saganaki.jpg"}]]
         [:p [:strong "Prep Time: "] "10 minutes"]
         [:p [:strong "Cook Time: "] "15 minutes"]
         [:p [:strong "Total Time: "] "25 minutes"]
         [:h4 "Ingredients:"]
         [:ul
          [:li "1 pound (about 1/2 kg) of kefalotyri or kasseri cheese (or pecorino romano)"]
          [:li "1/2 cup of olive oil"]
          [:li "2/3 cup of flour for dredging"]
          [:li "2-3 lemons, quartered"]]
         [:h4 "Preparation:"]
         [:p "Cut the cheese into slices or wedges that are 1/2 inch thick by 2
             1/2 to 3 inches wide. Moisten each slice with cold water and
             dredge in the flour. In a sagani (Greek pan used for this dish) or
             a small heavy-bottomed frying pan (cast-iron works best), heat the
             oil over medium-high heat, and sear each slice in 1 tablespoon of
             oil until golden-brown on both sides. Serve hot with a last-minute
             squeeze of fresh lemon juice."]
         [:p "Serve with ouzo or wine, olives, vegetable mezethes, tomatoes,
             and crusty bread."]
         [:p [:strong "Yield: "] "6 servings"]]]]))

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
      (response/redirect (str "/things/" thing-id "/children"))))

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
    (html [:h1 "Not found"])))

(defn make-connection! []
  (reset! conn (seed/seed "datomic:free://localhost:4334/lists_of_things")))

(defn app [request]
  (if (not @conn)
    (make-connection!))
  ((handler/site app-routes) request))

(defn -main [& args]
  (run-jetty app {:port 3000}))

