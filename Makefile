default: work
work:
	screen -t "vimclojure" lein vimclojure
	screen -t "datomic" make transactor
	screen -t "server" lein ring server
	screen -t "clojurescript" lein cljsbuild auto
	vim
transactor:
	cd ../datomic-free-0.8.3438/ && ./bin/transactor config/samples/free-transactor-template.properties


