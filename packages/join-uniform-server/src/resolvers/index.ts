import { QueryResolvers } from "./generated";
export * from "./generated";

import { htmlConfig } from "./htmlConfig";

const Query: QueryResolvers = {
  htmlConfig,
};

export const resolvers = {
  Query,
};
