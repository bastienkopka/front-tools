UID=$$(id -u $$USER)
GID=$$(id -g $$USER)
UNAME=$$(whoami)

init:
	cp ./.env.dev ./.env
	@echo "UID=$(UID)" >> .env
	@echo "GID=$(GID)" >> .env
	@echo "UNAME=$(UNAME)" >> .env

up:
	docker-compose up -d --build

shell:
	docker-compose exec -u $(UNAME) node sh