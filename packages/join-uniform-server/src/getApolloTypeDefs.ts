// import { typeDefs } from "@join-uniform/graphql/server";
import { typeDefs } from "./resolvers";

/**
 * Loads the Apollo GraphQL type definitions.
 */
export function getApolloTypeDefs() {
  return typeDefs;
}
