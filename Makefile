default: work
work:
	screen -t "vimclojure" lein vimclojure
	screen -t "datomic" make transactor
	screen -t "server" lein ring server
	screen -t "clojurescript" lein cljsbuild auto
	vim
transactor:
	cd ../datomic-free-0.8.3438/ && ./bin/transactor config/samples/free-transactor-template.properties
deploy:
	lein uberjar
	scp target/lists-of-things-1.0.0-SNAPSHOT-standalone.jar listsofthings.com:/var/www/apps/clojure
	ssh listsofthings.com
combine-css:
	touch ./resources/public/styles.css
	rm ./resources/public/styles.css
	cat ./resources/public/browse-and-preview.css >> ./resources/public/styles.css
	cat ./resources/public/css/common.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/button.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/colormenubutton.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/colorpalette.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/demo.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/dialog.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/editor/bubble.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/editor/dialog.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/editor/equationeditor.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/editor/linkdialog.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/editortoolbar.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/linkbutton.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/menu.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/menuitem.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/menuseparator.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/palette.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/tab.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/tabbar.css >> ./resources/public/styles.css
	cat ./resources/public/css/editor/toolbar.css >> ./resources/public/styles.css
