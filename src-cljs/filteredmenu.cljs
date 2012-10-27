(ns filteredmenu
  (:require [goog.dom :as dom]
            [goog.ui.Menu :as Menu]
            [goog.ui.MenuItem :as MenuItem]
            [goog.ui.FilteredMenu :as FilteredMenu]))

(def items ["Foo" "Bar" "Baz"])

(defn ^:export setupMenu []
  (let [container (dom/getElement "menu")
        menu      (new goog.ui.FilteredMenu)]
    (.setFilterLabel menu "Find or create parent")
    (mapv #(.addItem menu (new goog.ui.MenuItem %)) items)
    (.render menu container)))

