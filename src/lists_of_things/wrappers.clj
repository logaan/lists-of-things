; This namespace contains side effects
(ns lists-of-things.wrappers
  (:require [lists-of-things.seed :as seed]
            [datomic.api :as d]))

(defn json [handler]
  (fn [request]
    (let [response (handler request)]
      (assoc response :status 200
                      :headers {"Content-Type" "application/json"}))))

(defn jsonp [callback json]
  (str callback "(" json ")"))

(defn jsonp [handler]
  (fn [request]
    (let [callback (:callback (:params request))
          response (handler request)]
      (update-in response [:body] (partial jsonp callback)))))

(def conn (atom nil))

(defn make-connection! []
  (reset! conn (d/connect "datomic:free://localhost:4334/lists_of_things")))

(defn connection [handler]
  (fn [request]
    (if (not @conn)
      (make-connection!))
    (handler (assoc-in request [:params :conn] @conn))))

(defn cacheable? [response]
  (and (= (:status response) 200)
       (re-matches #"text/html" (get-in response [:headers "Content-Type"]))))

(defn cache-control [handler]
  (fn [request]
    (let [response (handler request)]
      (if (cacheable? response) response
        (assoc-in response [:headers "Cache-Control"]
                  "172800")))))

(defn expires [handler]
  (fn [request]
    (let [response (handler request)]
      (if (cacheable? response) response
        (assoc-in response [:headers "Expires"]
                  "Fri, 02 Dec 2012 15:05:49 GMT")))))

(defn printer [handler]
  (fn [request]
    (println "Request: " request)
    (let [response (handler request)]
      (println "Response: " response)
      response)))

(defn access-control [handler]
  (fn [request]
    (let [response (handler request)]
      (assoc-in response [:headers "Access-Control-Allow-Origin"] "*"))))

