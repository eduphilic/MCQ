import gql from "graphql-tag";

export * from "./domain-events";

import { typeDefs as inputTypeDefs } from "./inputs";
import { Mutation, typeDefs as mutationTypeDefs } from "./mutations";
import { Query, typeDefs as queryTypeDefs } from "./queries";
import { typeDefs as scalarTypeDefs } from "./scalars";
import { typeDefs as typeTypeDefs } from "./types";

const TypeDefQuery = gql`
  type Query {
    _empty: Boolean
  }
`;

const TypeDefMutation = gql`
  type Mutation {
    _empty: Boolean
  }
`;

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
