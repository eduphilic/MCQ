import { ContextFunction } from "apollo-server-core";
import { ApolloServer, makeExecutableSchema } from "apollo-server-koa";
import { createApolloTypeDefs } from "./createApolloTypeDefs";
import { Context } from "./models";
import { resolvers } from "./resolvers";

export function createApolloServer(contextFactory: ContextFunction<Context>) {
  const typeDefs = createApolloTypeDefs();

  return new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    context: contextFactory,

    // Disable built in GraphQL Playground middleware because we'll be
    // implementing this as a custom page route due to CSRF token requirements.
    playground: false,
  });
}
