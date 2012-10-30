; This namespace contains side effects
(ns lists-of-things.web
  (:gen-class)
  (:use matchure
        clojure.pprint
        lists-of-things.helpers
        ring.adapter.jetty
        ring.middleware.resource
        ring.middleware.file-info
        ring.util.response
        [datomic.api :only [db q] :as d])
  (:require [lists-of-things.seed :as seed]
            [lists-of-things.db   :as lotsdb]))

(def conn (atom nil))

(defn-match controller

  ([{:request-method :get :uri "/"}]
    (let [children (lotsdb/entities (db @conn) lotsdb/orphans)]
      (response (thing-page {:thing/name "Orphans" :thing/children children}))))

;  (GET "/things/:id" [id]
;    (->> (Long/parseLong id)
;         (d/entity (db @conn))
;         thing-page
;         response))
;
;  (POST "/things" {{:keys [parent-id name]} :params}
;    (let [thing {:thing/name name}]
;
;      ; There's probably a more elegant way of doing this
;      (if (not (empty? parent-id))
;          (do
;            (lotsdb/create-child @conn (Long/parseLong parent-id) thing)
;            (redirect (str "/things/" parent-id)))
;          (do
;            (lotsdb/create @conn thing)
;            (redirect "/")))))
;
;  (DELETE "/things/:id" {{:keys [parent-id id]} :params}
;    (lotsdb/destroy @conn (Long/parseLong id))
;    (redirect (if (empty? parent-id) "/" (str "/things/" parent-id))))
;  
;  (PUT "/things/:id" {{:keys [id old-name new-name]} :params}
;    (lotsdb/edit-thing @conn (Long/parseLong id) old-name new-name)
;    (redirect (str "/things/" id)))
;
;  (POST "/content" {{:keys [thing-id text]} :params}
;    (lotsdb/create-content @conn (Long/parseLong thing-id) {:content/text text})
;    (redirect (str "/things/" thing-id)))
;
;  (DELETE "/contents/:id" [id]
;    (lotsdb/destroy @conn (Long/parseLong id))
;
;    (layout
;      [:h2 (str id " is gone.")]
;      [:p [:a {:href "/"} "Checkout your list of things"]]))
;
  ([_] (not-found not-found-page)))

(defn make-connection! []
  (reset! conn (seed/seed "datomic:free://localhost:4334/lists_of_things")))

(defn app [request]
  (if (not @conn) (make-connection!))
  (controller request))

(defn -main [& args]
  (run-jetty
    (-> app
        (wrap-resource "public")
        (wrap-file-info))
    ; NOTE: May not actually need these.. seems to work fine in dev without.
    {:port 3000}))

