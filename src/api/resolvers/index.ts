import { IResolvers } from "graphql-tools";
import { MutationResolvers, QueryResolvers } from "../generated";

import { htmlConfig } from "./HtmlConfigQuery";
import { indexPageConfig } from "./IndexPageConfigQuery";
import { language } from "./LanguageQuery";

import { login } from "./LoginMutation";

const Query: QueryResolvers.Resolvers = {
  htmlConfig,
  indexPageConfig,
  language,
};

const Mutation: MutationResolvers.Resolvers = {
  login,
};

export const resolvers: IResolvers = {
  Query: Query as any,

  Mutation: Mutation as any,
};
