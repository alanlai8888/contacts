serve: ## run server
	cd project && python -m SimpleHTTPServer

css: ## run scss
	compass watch --poll ./project/static -c ./config.rb