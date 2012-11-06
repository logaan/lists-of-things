default: work
work:
	screen -t "vimclojure" lein vimclojure
	screen -t "datomic" make transactor
	screen -t "server" lein ring server
	vim
transactor:
	cd ../datomic-free-0.8.3438/ && ./bin/transactor config/samples/free-transactor-template.properties
deploy:
	lein uberjar
	scp target/lists-of-things-1.0.0-SNAPSHOT-standalone.jar listsofthings.com:/var/www/apps/clojure
	ssh listsofthings.com
