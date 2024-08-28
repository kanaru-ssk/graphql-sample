FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json .

RUN npm ci

COPY . .
RUN npm run build

FROM gcr.io/distroless/nodejs22:nonroot
COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/supergraph.graphqls /app/supergraph.graphqls
ENTRYPOINT [ "/nodejs/bin/node", "/app/build/index.js" ]