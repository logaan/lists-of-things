(ns lists-of-things.graph
  (:use lists-of-things.web
        [datomic.api :only [db q] :as d])
  (:require [clojure.string :as str]))

(defn label [thing]
  (str (:db/id thing) " [label=\"" (:thing/name thing) "\"];"))

(defn children [thing]
  (str/join "\n"
            (for [child (:thing/children thing)]
              (str (:db/id thing) " -> " (:db/id child) ";"))))

(defn dotify [thing]
  (str (label thing) "\n" (children thing)))

(defn things-to-digraph [things]
  (str "digraph { \n"
       (str/join "\n" (map dotify things))
       " }"))

(defn draw-graph-of-all-things []
  (let [db      (db @conn)
        results (q '[:find ?eid :where [?eid :thing/name]] db)
        things  (for [[eid] results] (d/entity db eid))]
    (things-to-digraph things)))

(make-connection!)

(q '[:find ?i
     :where [?eid ?a 17592186045536]
            [?a :db/ident ?i]]
   (db @conn))



;(spit "/Users/logaan/Desktop/lots.dot" (draw-graph-of-all-things))
