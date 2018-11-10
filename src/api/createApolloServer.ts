import { ISettings } from "@apollographql/graphql-playground-html/dist/render-playground-page";
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
    playground:
      process.env.NODE_ENV === "development"
        ? {
            settings: { "request.credentials": "same-origin" } as ISettings,
          }
        : false,
  });
}
