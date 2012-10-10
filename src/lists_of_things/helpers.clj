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

(defn link-to-thing [id name]
  [:a {:href (str "/things/" id)} name])

(defn listed-thing [[id name]]
  [:li
    (link-to-thing id name)])

(defn listed-things [things]
  [:ul {:style "display: inline; float: left;"}
   (map listed-thing things)])

(defn thing-row [[id name child-count]]
  [:tr
    [:td
      (link-to-thing id name)]
    [:td
      (link-to-thing id (str child-count " children"))]
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

(def not-found
  (html [:h1 "Not found"]))

(def browse-and-preview
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
