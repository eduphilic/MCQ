import * as enums from "./enums";
import * as inputs from "./inputs";
import * as scalars from "./scalars";
import * as types from "./types";

import Mutation from "./Mutation.graphql";
import Query from "./Query.graphql";

export const typeDefs = [
  Query,
  Mutation,
  ...Object.values(enums),
  ...Object.values(inputs),
  ...Object.values(scalars),
  ...Object.values(types),
];

/* tslint:disable-next-line:no-console */
console.log(typeDefs);
