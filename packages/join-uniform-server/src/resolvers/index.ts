import { QueryResolvers } from "@join-uniform/graphql";

import { htmlConfig } from "./htmlConfig";
import { logoConfig } from "./logoConfig";

const Query: QueryResolvers = {
  htmlConfig,
  logoConfig,
};

export const resolvers = {
  Query,
};
