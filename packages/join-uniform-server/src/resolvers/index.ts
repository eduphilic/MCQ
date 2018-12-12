import { QueryResolvers } from "@join-uniform/graphql/server";

import { htmlConfig } from "./htmlConfig";
import { logoConfig } from "./logoConfig";
import { translation } from "./translation";

import { category } from "./category";

const Query: QueryResolvers = {
  htmlConfig,
  logoConfig,

  translation,

  category,
};

export const resolvers = {
  Query,
};
