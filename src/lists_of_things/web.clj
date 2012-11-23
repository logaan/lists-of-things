; This namespace contains side effects
(ns lists-of-things.web
  (:gen-class)
  (:use compojure.core
        lists-of-things.helpers
        ring.adapter.jetty
        cheshire.core
        [ring.middleware gzip]
        [datomic.api :only [db q] :as d])
  (:require [compojure.handler :as handler]
            [compojure.route   :as route]
            [lists-of-things.seed :as seed]
            [lists-of-things.db   :as lotsdb]
            [ring.util.response   :as response]))

(def conn (atom nil))

(defn rename [thing]
  {:id       (:db/id thing)
   :name     (:thing/name thing)})

(defn rename-with-siblings [thing]
  {:id       (:db/id thing)
   :name     (:thing/name thing)
   :parents  (map rename (:thing/_children thing))})

(defn rename-with-relations [thing]
  {:id       (:db/id thing)
   :name     (:thing/name thing)
   :children (map rename-with-siblings (:thing/children thing))
   :parents  (map rename (:thing/_children thing))})

(defn jsonp [callback json]
  (str callback "(" json ")"))

(defn wrap-json [handler]
  (fn [request]
    (let [response (handler request)]
      (assoc response :status 200
                      :headers {"Content-Type" "application/json"}))))

(defn wrap-jsonp [handler]
  (fn [request]
    (let [callback (:callback (:params request))
          response (handler request)]
      (update-in response [:body] (partial jsonp callback)))))

(defroutes api-routes
  (GET "/orphans" []
    (let [children  (lotsdb/entities (db @conn) lotsdb/orphans)
          formatted (map rename-with-relations children)
          orphan    {:name "Orphans" :children formatted}]
       (generate-string orphan)))

  (GET "/things/:id" [id]
    (->> (Long/parseLong id)
      (d/entity (db @conn))
      rename-with-relations
      generate-string))

  (GET "/search" [query]
    (let [results (lotsdb/entities (db @conn) lotsdb/search query)
          tidied  (mapv rename-with-relations results)]
       (generate-string tidied))))

(defroutes app-routes
  (context "/api" [] (-> api-routes wrap-json wrap-jsonp))

  (GET "/" []
    (let [children (lotsdb/entities (db @conn) lotsdb/orphans)]
      (thing-page {:thing/name "Orphans" :thing/children children})))

  (GET "/things/:id" [id]
    (->> (Long/parseLong id)
         (d/entity (db @conn))
         thing-page))

  (GET "/search" {{:keys [query]} :params}
    (let [results (lotsdb/entities (db @conn) lotsdb/search query)]
      (search-results-page query results)))

  (GET "/results" {{:keys [term]} :params}
     (let [results (lotsdb/entities (db @conn) lotsdb/search (str term "*"))
          formatted (map (fn [r] {"id"    (:db/id r)
                                  "label" (:thing/name r)
                                  "value" (:thing/name r)}) results)]
     (generate-string formatted)))

  (POST "/things/:id/add-parent" {{:keys [parent-id id]} :params}
    (lotsdb/add-parent @conn (Long/parseLong id) (Long/parseLong parent-id))
    (response/redirect (str "/things/" id)))

  (POST "/things/:id/remove-parent" {{:keys [parent-id id]} :params}
    (lotsdb/remove-parent @conn (Long/parseLong id) (Long/parseLong parent-id))
    (response/redirect (str "/things/" id)))

  (POST "/things" {{:keys [parent-id name]} :params}
    (let [thing {:thing/name name}]

      ; There's probably a more elegant way of doing this
      (if (not (empty? parent-id))
          (do
            (lotsdb/create-child @conn (Long/parseLong parent-id) thing)
            (response/redirect (str "/things/" parent-id)))
          (do
            (lotsdb/create @conn thing)
            (response/redirect "/")))))

  (DELETE "/things/:id" {{:keys [parent-id id]} :params}
    (lotsdb/destroy @conn (Long/parseLong id))
    (response/redirect (if (empty? parent-id) "/" (str "/things/" parent-id))))

  (PUT "/things/:id" {{:keys [id old-name new-name]} :params}
    (lotsdb/edit-thing @conn (Long/parseLong id) old-name new-name)
    (response/redirect (str "/things/" id)))

  (POST "/content" {{:keys [thing-id text]} :params}
    (lotsdb/create-content @conn (Long/parseLong thing-id) {:content/text text})
    (response/redirect (str "/things/" thing-id)))

  (DELETE "/contents/:id" [id]
    (lotsdb/destroy @conn (Long/parseLong id))

    (layout
      [:h2 (str id " is gone.")]
      [:p [:a {:href "/"} "Checkout your list of things"]]))

  (route/resources "/")

  (route/not-found
    not-found))

(defn make-connection! []
  (reset! conn (seed/seed "datomic:free://localhost:4334/lists_of_things")))

(defn wrap-connection [handler]
  (fn [request]
    (if (not @conn)
      (make-connection!))
    (handler request)))

(defn cacheable? [response]
  (and (= (:status response) 200)
       (re-matches #"text/html" (get-in response [:headers "Content-Type"]))))

(defn wrap-cache-control [handler]
  (fn [request]
    (let [response (handler request)]
      (if (cacheable? response) response
        (assoc-in response [:headers "Cache-Control"]
                  "172800")))))

(defn wrap-expires [handler]
  (fn [request]
    (let [response (handler request)]
      (if (cacheable? response) response
        (assoc-in response [:headers "Expires"]
                  "Fri, 02 Dec 2012 15:05:49 GMT")))))

(defn wrap-printer [handler]
  (fn [request]
    (println "Request: " request)
    (let [response (handler request)]
      (println "Response: " response)
      response)))

(defn wrap-access-control [handler]
  (fn [request]
    (let [response (handler request)]
      (assoc-in response [:headers "Access-Control-Allow-Origin"] "*"))))

(def app (->
  app-routes
  handler/site
  ; wrap-cache-control
  ; wrap-expires
  ; wrap-gzip
  wrap-access-control
  wrap-connection))

(defn -main [& args]
  (run-jetty app {:port 3000}))

(def request
  {:request-method :get
   :uri "/api/search"
   :headers {}
   :params {:callback "foo" :query "Brave"}})

