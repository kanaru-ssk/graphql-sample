FROM node:22-alpine AS build

ARG SERVICE

WORKDIR /app

COPY package.json package-lock.json .

RUN npm ci

ARG APP_ENV
COPY . .
RUN pnpm run build:${APP_ENV}

FROM gcr.io/distroless/nodejs22:nonroot
COPY --from=build /app /app
ENTRYPOINT ["/app"]