(ns lists-of-things.web
  (:gen-class)
  (:use [compojure.core :only [defroutes GET POST DELETE PUT]])
  (:require
    [clj-http.lite.client :as http]
    [cheshire.core :as json]
    [lists-of-things
     [api :as api]
     [wrappers :as wrappers]]
    [compojure
     [handler :as handler]
     [core :as compojure]
     [route :as route]]
    [ring.util
     [response :as response]]
    [ring.adapter
     [jetty :as jetty]]
    [ring.middleware
     [gzip :as gzip]
     [session :as session]]))

(def api-controller
  (-> #'api/routes
      wrappers/json))

(defn verify [assertion]
  (let [host (get (System/getenv) "HOST" "http://localhost:3000")]
    (http/post "https://verifier.login.persona.org/verify"
               {:form-params {:assertion assertion
                              :audience host}})))

(defroutes bootstrap
  (GET "/" {session :session}
    (response/redirect (if (:email session) "/things" "/login.html")))
  (POST "/log-out" []
    (assoc (response/response "{ok: true}") :session nil))
  (POST "/sign-in" {session :session {assertion :assertion} :params} 
    (let [{body :body}    (verify assertion)
          {email "email"} (json/parse-string body)
          new-session     (assoc session :email email)]
      (assoc (response/response
               (str "Old" (:email session) "New" email))
             :session new-session)))
  (GET "/things" []
    (slurp "resources/public/index.html"))
  (GET "/things/:id" [id]
    (slurp "resources/public/index.html")))

(compojure/defroutes routes
  bootstrap
  (compojure/context "/api" [] #'api-controller)
  (route/resources "/"))

(def app-controller
  (-> #'routes
      handler/site
      wrappers/connection
      gzip/wrap-gzip
      session/wrap-session))

(defn -main [& args]
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "3000"))]
    (jetty/run-jetty #'app-controller {:port port})))

