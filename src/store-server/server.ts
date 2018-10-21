import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-koa";
import { Context } from "./Context";
import { resolvers } from "./resolvers";
import { schemaString } from "./schemaString";
import { FirebaseRemoteConfigClient } from "./services";

const typeDefs = gql`
  ${schemaString}
`;

const schema = makeExecutableSchema({
  typeDefs: gql`
    ${schemaString}
  `,
  resolvers: resolvers as any,
});

let context: Context | null = null;

export function createServer(options: { projectId: string }) {
  context = {
    firebaseRemoteConfigClient: new FirebaseRemoteConfigClient(
      options.projectId,
    ),
  };

  return new ApolloServer({
    typeDefs,
    resolvers: resolvers as any,
    context,
  });
}

export function getContext() {
  if (!context) throw new Error("Context not initialized.");
  return context;
}

export function getSchema() {
  return schema;
}
