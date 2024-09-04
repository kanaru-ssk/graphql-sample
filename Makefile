.PHONY: subgraph-gen
subgraph-gen:
	go run -C ./backend/graph-server/accounts github.com/99designs/gqlgen generate &\
	go run -C ./backend/graph-server/products github.com/99designs/gqlgen generate &\
	go run -C ./backend/graph-server/reviews github.com/99designs/gqlgen generate

.PHONY: supergraph-gen
supergraph-gen:
	npm run supergraph:gen --prefix ./backend/api-gateway

.PHONY: docker-tag
docker-tag:
	docker tag graphql-sample-$(target):latest us-central1-docker.pkg.dev/velvety-glazing-420809/graphql-sample-repo/graphql-sample-$(target):latest

.PHONY: docker-push
docker-push:
	docker push us-central1-docker.pkg.dev/velvety-glazing-420809/graphql-sample-repo/graphql-sample-$(target):latest

.PHONY: gcloud-deploy
gcloud-deploy:
	gcloud run services replace ./.infra/$(target).yaml --project=velvety-glazing-420809 --region=us-central1