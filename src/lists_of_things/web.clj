(ns lists-of-things.web
  (:gen-class)
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
     [jetty :as jetty]]))

(def api-controller
  (-> api/routes
      wrappers/printer
      wrappers/json
      wrappers/jsonp
      wrappers/access-control
      handler/api))

(def interface-controller
  (-> interface/routes
      handler/site))

(compojure/defroutes routes
  interface-controller
  (compojure/context "/api" [] api-controller)
  (route/resources "/")
  (route/not-found helpers/not-found))

(def app-controller (-> routes wrappers/connection))

(defn -main [& args]
  (jetty/run-jetty app-controller {:port 3000}))

