ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
UID:=$(shell id -u)
GID:=$(shell id -g)

cli:
	docker-compose exec node sh
up:
	docker-compose up -d $(c)
build:
	docker-compose build
down:
	docker-compose down $(c)
down-volumes:
	docker-compose down -v $(c)
start:
	docker-compose start $(c)
stop:
	docker-compose stop $(c)
exec:
	docker-compose exec $(c)
logs:
	docker-compose logs -f $(c)

#
stats:
	docker-compose exec node npm run stats
	webpack-bundle-analyzer ./app/stats.json
prod:
	docker-compose exec node rm -rf app/dist/*
	docker-compose exec node yarn build
up-and-watch:
	make up
	docker-compose exec node yarn watch
install:
	docker-compose exec node yarn install
