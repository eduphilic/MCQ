import {
  MutationResolvers,
  QueryResolvers,
} from "@join-uniform/graphql/server";

import { htmlConfig } from "./htmlConfig";
import { logoConfig } from "./logoConfig";
import { translation } from "./translation";

import { category } from "./category";
import { entries } from "./entries";
import { entry } from "./entry";
import { entryCategories } from "./entryCategories";

import { createCategoryExistingEntry } from "./createCategoryExistingEntry";
import { createCategoryNewEntry } from "./createCategoryNewEntry";
import { deleteCategories } from "./deleteCategories";
import { deleteEntry } from "./deleteEntry";
import { setCategoryActivationStatus } from "./setCategoryActivationStatus";

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
  entry,
  entryCategories,
};

const Mutation: MutationResolvers = {
  createCategoryExistingEntry,
  createCategoryNewEntry,
  deleteCategories,
  deleteEntry,
  setCategoryActivationStatus,

  generateCloudinarySignature,
  generateCloudinaryMediaLibraryAuthenticationToken,
};

export const resolvers = {
  Query,
  Mutation,
};
