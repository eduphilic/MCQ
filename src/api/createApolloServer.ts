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
  });
}
