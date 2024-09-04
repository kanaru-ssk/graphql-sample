// see: https://www.apollographql.com/docs/federation/v1/gateway/#setup

import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

// Initialize an ApolloGateway instance and pass it
const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      {
        name: "accounts",
        url: "https://graphql-sample-accounts-641862643887.us-central1.run.app/query",
      },
      {
        name: "products",
        url: "https://graphql-sample-products-641862643887.us-central1.run.app/query",
      },
      {
        name: "reviews",
        url: "https://graphql-sample-reviews-641862643887.us-central1.run.app/query",
      },
    ],
  }),
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
