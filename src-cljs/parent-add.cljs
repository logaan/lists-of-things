; Note: What's up with names? Can I use clj style?
(ns parentadd 
  (:require [goog.dom :as dom]
            [goog.ui.AutoComplete.Remote :as Remote]))

(defn ^:export setupAddParentInput []
  (let [input (dom/getElement "parent-name")]
    (new goog.ui.AutoComplete/Remote "/js/parent-data.js" input)))

