import {
  MutationResolvers,
  QueryResolvers,
} from "@join-uniform/graphql/server";

import { htmlConfig } from "./htmlConfig";
import { logoConfig } from "./logoConfig";
import { translation } from "./translation";

import { category } from "./category";
import { entries } from "./entries";

import { cloudinaryApiKey } from "./cloudinaryApiKey";
import { cloudinaryCloudName } from "./cloudinaryCloudName";
import { generateCloudinaryMediaLibraryAuthenticationToken } from "./generateCloudinaryMediaLibraryAuthenticationToken";
import { generateCloudinarySignature } from "./generateCloudinarySignature";

const Query: QueryResolvers = {
  htmlConfig,
  logoConfig,

  translation,

  cloudinaryApiKey,
  cloudinaryCloudName,

  category,
  entries,
};

const Mutation: MutationResolvers = {
  generateCloudinarySignature,
  generateCloudinaryMediaLibraryAuthenticationToken,
};

export const resolvers = {
  Query,
  Mutation,
};
