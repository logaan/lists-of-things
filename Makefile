default: repl db ring

repl:
	screen -t "repl" lein repl
db:
	screen -t "datomic" make transactor
ring:
	screen -t "server" lein ring server

transactor:
	cd ../datomic-free-0.8.3438/ && ./bin/transactor config/samples/free-transactor-template.properties

deploy:
	lein uberjar
	scp target/lists-of-things-1.0.0-SNAPSHOT-standalone.jar listsofthings.com:/var/www/apps/clojure
	ssh listsofthings.com
