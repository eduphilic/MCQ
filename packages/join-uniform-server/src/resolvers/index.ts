import {
  MutationResolvers,
  QueryResolvers,
} from "@join-uniform/graphql/server";

import { htmlConfig } from "./htmlConfig";
import { logoConfig } from "./logoConfig";
import { translation } from "./translation";

import { category } from "./category";
import { entries } from "./entries";
import { entryCategories } from "./entryCategories";

import { createCategoryExistingEntry } from "./createCategoryExistingEntry";
import { createCategoryNewEntry } from "./createCategoryNewEntry";

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
  entryCategories,
};

const Mutation: MutationResolvers = {
  createCategoryExistingEntry,
  createCategoryNewEntry,

  generateCloudinarySignature,
  generateCloudinaryMediaLibraryAuthenticationToken,
};

export const resolvers = {
  Query,
  Mutation,
};
