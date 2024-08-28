.PHONY: subgraph-gen
subgraph-gen:
	go run -C ./backend/graph-server/accounts github.com/99designs/gqlgen generate &\
	go run -C ./backend/graph-server/products github.com/99designs/gqlgen generate &\
	go run -C ./backend/graph-server/reviews github.com/99designs/gqlgen generate

.PHONY: supergraph-gen
supergraph-gen:
	npm run supergraph:gen --prefix ./backend/api-gateway