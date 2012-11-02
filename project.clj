(defproject lists-of-things "1.0.0-SNAPSHOT"
  :description "FIXME: write description"

  :main lists-of-things.web

  :ring {:handler lists-of-things.web/app}

  :dependencies [[org.clojure/clojure "1.4.0"]
                 [com.datomic/datomic-free "0.8.3438"]
                 [compojure "1.1.1"]
                 [hiccup "1.0.0"]
                 [midje "1.4.0"]
                 [ring/ring-jetty-adapter "1.1.3"]
                 [org.clojars.mikejs/ring-gzip-middleware "0.1.0-SNAPSHOT"]]
  :dev-dependencies [[lein-marginalia "0.7.1"]
                     [com.stuartsierra/lazytest "1.2.3"]
                     [ring-mock "0.1.2"]]

  :plugins [[lein-ring "0.7.1"]
            [lein-cljsbuild "0.1.9"]]

  :repositories {"stuartsierra-releases" "http://stuartsierra.com/maven2"}

  :cljsbuild {
    :builds [{:source-path "src-cljs"
              :compiler {:optimizations :advanced
                         :output-to "resources/public/js/main.js"}}]})

