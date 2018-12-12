import { QueryResolvers } from "@join-uniform/graphql/server";

import { htmlConfig } from "./htmlConfig";
import { logoConfig } from "./logoConfig";
import { translation } from "./translation";

import { category } from "./category";
import { entries } from "./entries";

const Query: QueryResolvers = {
  htmlConfig,
  logoConfig,

  translation,

  category,
  entries,
};

export const resolvers = {
  Query,
};
