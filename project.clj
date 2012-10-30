(defproject lists-of-things "1.0.0-SNAPSHOT"
  :description "FIXME: write description"

  :main lists-of-things.web

  :ring {:handler lists-of-things.web/app}

  :dependencies [[org.clojure/clojure "1.4.0"]
                 [com.datomic/datomic-free "0.8.3438"]
                 [hiccup "1.0.0"]
                 [midje "1.4.0"]
                 [ring "1.1.6"]
                 [matchure "0.10.1"]]
  :dev-dependencies [[lein-marginalia "0.7.1"]
                     [com.stuartsierra/lazytest "1.2.3"]
                     [ring-mock "0.1.2"]]

  :plugins [[lein-ring "0.7.1"]
            [lein-cljsbuild "0.1.9"]]

  :repositories {"stuartsierra-releases" "http://stuartsierra.com/maven2"}

  :cljsbuild {
    :builds [{:source-path "src-cljs"
              :compiler {:optimizations :advanced :output-to "resources/public/js/main.js"}}]})

