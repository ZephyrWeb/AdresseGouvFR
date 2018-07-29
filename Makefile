ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
UID:=$(shell id -u)
GID:=$(shell id -g)

cli:
	docker-compose exec node sh
up:
	docker-compose up -d $(c)
build-docker:
	docker-compose build
start:
	docker-compose start $(c)
stop:
	docker-compose stop $(c)
exec:
	docker-compose exec $(c)
logs:
	docker-compose logs -f $(c)

#
lint:
	docker-compose exec node yarn run lint
test:
	docker-compose exec node yarn run test
build:
	docker-compose exec node yarn build-geo
	docker-compose exec node yarn build-adresse
install:
	docker-compose exec node apk add --update --no-cache git
	docker-compose exec node npm install -g ts-node typescript tslint parcel-bundler
	docker-compose exec node yarn install
doc:
	docker-compose exec node yarn doc
	git checkout gh-pages
	cp -rf docs/* .
	git add .
	git commit -a -m "Update Doc"
	git push
	git checkout master
