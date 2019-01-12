import TypeDefMutation from "./Mutation.graphql";
import TypeDefQuery from "./Query.graphql";

import { typeDefs as inputTypeDefs } from "./inputs";
import { Mutation, typeDefs as mutationTypeDefs } from "./mutations";
import { Query, typeDefs as queryTypeDefs } from "./queries";
import { typeDefs as scalarTypeDefs } from "./scalars";
import { typeDefs as typeTypeDefs } from "./types";

/**
 * GraphQL schema definition.
 */
export const typeDefs = [
  TypeDefMutation,
  TypeDefQuery,
  ...inputTypeDefs,
  ...mutationTypeDefs,
  ...queryTypeDefs,
  ...scalarTypeDefs,
  ...typeTypeDefs,
];

/**
 * GraphQL resolvers.
 */
export const resolvers = {
  Query,
  Mutation,
};
