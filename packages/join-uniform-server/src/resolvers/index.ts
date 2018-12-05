import { QueryResolvers } from "./generated";
export * from "./generated";

import { htmlConfig } from "./htmlConfig";
import { logoConfig } from "./logoConfig";

const Query: QueryResolvers = {
  htmlConfig,
  logoConfig,
};

export const resolvers = {
  Query,
};
