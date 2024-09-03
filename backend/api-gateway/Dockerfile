FROM node:22 AS build

WORKDIR /app

COPY ./api-gateway/package.json ./api-gateway/package-lock.json .

RUN npm ci

COPY ./api-gateway/supergraph.yaml .
COPY ./graph-server/accounts/graph/schema.graphqls ./subgraph/accounts.graphqls
COPY ./graph-server/products/graph/schema.graphqls ./subgraph/products.graphqls
COPY ./graph-server/reviews/graph/schema.graphqls ./subgraph/reviews.graphqls
RUN npm run supergraph:gen

COPY ./api-gateway .
RUN npm run build

FROM gcr.io/distroless/nodejs22:nonroot
COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/supergraph.graphqls /app/supergraph.graphqls
ENTRYPOINT [ "/nodejs/bin/node", "/app/build/index.js" ]