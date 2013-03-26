(ns lists-of-things.web
  (:gen-class)
  (:use [compojure.core :only [defroutes GET POST DELETE PUT]])
  (:require
    [lists-of-things
     [api :as api]
     [helpers :as helpers]
     [interface :as interface]
     [wrappers :as wrappers]]
    [compojure
     [handler :as handler]
     [core :as compojure]
     [route :as route]]
    [ring.adapter
     [jetty :as jetty]]
    [ring.middleware
     [gzip :as gzip]]))

(def api-controller
  (-> api/routes
      wrappers/json
      wrappers/jsonp))

(def interface-controller
  interface/routes)

(defroutes bootstrap
  (GET "/bs/things" []
    (slurp "resources/public/bs/index.html")) 
  (GET "/bs/things/:id" [id]
    (slurp "resources/public/bs/index.html")))

(compojure/defroutes routes
  bootstrap
  interface-controller
  (compojure/context "/api" [] api-controller)
  (route/resources "/")
  (route/not-found helpers/not-found))

(def app-controller (-> routes handler/site wrappers/connection gzip/wrap-gzip))

(defn -main [& args]
  (jetty/run-jetty app-controller {:port 3000}))

