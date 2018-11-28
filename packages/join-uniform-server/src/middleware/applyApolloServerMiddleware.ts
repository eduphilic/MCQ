import { ContextFunction } from "apollo-server-core";
import { ApolloServer, makeExecutableSchema } from "apollo-server-koa";
import { DocumentNode } from "graphql";
import Koa from "koa";

type Options = {
  koaApp: Koa;
  contextFactory: ContextFunction;
  typeDefs: DocumentNode;
};

export function applyApolloServerMiddleware(options: Options) {
  const apolloServer = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: options.typeDefs,
      resolvers: {},
    }),
    context: options.contextFactory,

    // Disable built in GraphQL Playground middleware because we'll be
    // implementing this as a custom page route due to CSRF token requirements.
    // playground: false,
  });

  apolloServer.applyMiddleware({
    app: options.koaApp,
    bodyParserConfig: false,
    cors: false,
  });
}
