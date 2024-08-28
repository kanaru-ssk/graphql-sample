graph-gen:
	go run -C ./backend/graph-server/accounts github.com/99designs/gqlgen generate &\
	go run -C ./backend/graph-server/products github.com/99designs/gqlgen generate