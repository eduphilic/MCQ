import { IResolvers } from "graphql-tools";
import { MutationResolvers, QueryResolvers } from "../generated";

import { adminLoginPageConfig } from "./AdminLoginPageConfigQuery";
import { cloudinaryApiKey } from "./CloudinaryApiKeyQuery";
import { cloudinaryCloudName } from "./CloudinaryCloudNameQuery";
import { htmlConfig } from "./HtmlConfigQuery";
import { indexPageConfig } from "./IndexPageConfigQuery";
import { language } from "./LanguageQuery";
import { sessionFormConfig } from "./SessionFormConfigQuery";
import { session } from "./SessionQuery";

import { generateCloudinaryMediaLibraryAuthenticationToken } from "./GenerateCloudinaryMediaLibraryAuthenticationTokenMutation";
import { generateCloudinarySignature } from "./GenerateCloudinarySignatureMutation";
import { login } from "./LoginMutation";

import { JSON } from "./JSONScalar";

const Query: QueryResolvers = {
  adminLoginPageConfig,
  htmlConfig,
  indexPageConfig,
  language,
  sessionFormConfig,
  session,
  cloudinaryCloudName,
  cloudinaryApiKey,
};

const Mutation: MutationResolvers = {
  login,
  generateCloudinarySignature,
  generateCloudinaryMediaLibraryAuthenticationToken,
};

export const resolvers: IResolvers = {
  Query: Query as any,

  Mutation: Mutation as any,

  JSON,
};
