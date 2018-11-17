import { IResolvers } from "graphql-tools";
import { MutationResolvers, QueryResolvers } from "../generated";

import { adminLoginPageConfig } from "./AdminLoginPageConfigQuery";
import { htmlConfig } from "./HtmlConfigQuery";
import { indexPageConfig } from "./IndexPageConfigQuery";
import { language } from "./LanguageQuery";
import { sessionFormConfig } from "./SessionFormConfigQuery";
import { session } from "./SessionQuery";

import { JSON } from "./JSONScalar";
import { login } from "./LoginMutation";

const Query: QueryResolvers = {
  adminLoginPageConfig,
  htmlConfig,
  indexPageConfig,
  language,
  sessionFormConfig,
  session,
};

const Mutation: MutationResolvers = {
  login,
};

export const resolvers: IResolvers = {
  Query: Query as any,

  Mutation: Mutation as any,

  JSON,
};
