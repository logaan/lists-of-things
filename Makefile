default: work
work:
	screen lein vimclojure
	screen make transactor
	screen lein ring server
	vim
transactor:
	cd ../datomic-free-0.8.3438/ && ./bin/transactor config/samples/free-transactor-template.properties


