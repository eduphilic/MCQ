import { ApolloServer, gql } from "apollo-server-koa";
// import * as admin from "firebase-admin";
import { makeExecutableSchema } from "graphql-tools";

import * as HtmlMetaData from "../graphql/HtmlMetaData";
// import { FirebaseRemoteConfigClient } from "./FirebaseRemoteConfigClient";

// const app = admin.initializeApp();
// const remoteConfigClient = new FirebaseRemoteConfigClient(
//   app.options.projectId!,
// );

// remoteConfigClient.getConfigTemplate().then(template => {
//   console.log(template);
// });

const typeDefs = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = [HtmlMetaData.resolvers].reduce(
  (accumulator, resolvers) => {
    Object.keys(resolvers).forEach(resolverKey => {
      accumulator[resolverKey] = accumulator[resolverKey] || {};
      accumulator[resolverKey] = {
        ...accumulator[resolverKey],
        ...(resolvers as Record<string, object>)[resolverKey],
      };
    });
    return accumulator;
  },
  {} as Record<string, object>,
);

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, HtmlMetaData.typeDefs],
  resolvers,
});

const server = new ApolloServer({
  schema,
  context: {
    //
  },
});

export const applyApolloServerMiddleware = (app: any) => {
  server.applyMiddleware({ app, bodyParserConfig: false, cors: false });
};
