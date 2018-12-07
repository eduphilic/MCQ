import { QueryResolvers } from "@join-uniform/graphql/server";

import { htmlConfig } from "./htmlConfig";
import { logoConfig } from "./logoConfig";
import { translation } from "./translation";

const Query: QueryResolvers = {
  htmlConfig,
  logoConfig,

  translation,
};

export const resolvers = {
  Query,
};
