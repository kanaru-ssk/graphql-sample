// see: https://www.apollographql.com/docs/federation/v1/gateway/#setup

import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";
import fs from "fs";
import path from "path";

const supergraphSdl = fs
  .readFileSync(path.resolve(__dirname, "../supergraph.graphqls"))
  .toString();

// Initialize an ApolloGateway instance and pass it
// the supergraph schema
const gateway = new ApolloGateway({
  supergraphSdl,
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
