default: repl datomic server

repl:
	screen -t "repl" lein repl
datomic:
	screen -t "datomic" make transactor
server:
	screen -t "server" lein ring server

transactor:
	cd ../datomic-free-0.8.3438/ && ./bin/transactor config/samples/free-transactor-template.properties

jar:
	lein uberjar

deploy:
	ssh listsofthings.com
