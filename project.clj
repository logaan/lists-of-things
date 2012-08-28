(defproject lists-of-things "1.0.0-SNAPSHOT"
  :description "FIXME: write description"

  :ring {:handler lists-of-things.web/app}

  :dependencies [[org.clojure/clojure "1.4.0"]
                 [com.datomic/datomic-free "0.8.3438"]
                 [compojure "1.1.1"]
                 [hiccup "1.0.0"]]
  :dev-dependencies [[lein-marginalia "0.7.1"]
                     [midje "1.4.0"]
                     [com.stuartsierra/lazytest "1.2.3"]
                     [ring-mock "0.1.2"]]
  :plugins [[lein-ring "0.7.1"]]
  :repositories {"stuartsierra-releases" "http://stuartsierra.com/maven2"})

