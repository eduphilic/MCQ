import {
  MutationResolvers,
  QueryResolvers,
} from "@join-uniform/graphql/server";

import { htmlConfig } from "./htmlConfig";
import { indexCards } from "./indexCards";
import { indexPageConfig } from "./indexPageConfig";
import { logoConfig } from "./logoConfig";
import { youtubeVideos } from "./youtubeVideos";

import { translation } from "./translation";

import { category } from "./category";
import { entries } from "./entries";
import { entry } from "./entry";
import { entryCategories } from "./entryCategories";

import { createCategoryExistingEntry } from "./createCategoryExistingEntry";
import { createCategoryNewEntry } from "./createCategoryNewEntry";
import { deleteCategories } from "./deleteCategories";
import { deleteEntries } from "./deleteEntries";
import { setCategoryActivationStatus } from "./setCategoryActivationStatus";
import { updateCategory } from "./updateCategory";
import { updateEntry } from "./updateEntry";
import { updateIndexPage } from "./updateIndexPage";

import { cloudinaryApiKey } from "./cloudinaryApiKey";
import { cloudinaryCloudName } from "./cloudinaryCloudName";
import { generateCloudinaryMediaLibraryAuthenticationToken } from "./generateCloudinaryMediaLibraryAuthenticationToken";
import { generateCloudinarySignature } from "./generateCloudinarySignature";

const Query: QueryResolvers = {
  htmlConfig,
  indexCards,
  indexPageConfig,
  logoConfig,
  youtubeVideos,

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
  deleteEntries,
  setCategoryActivationStatus,
  updateCategory,
  updateEntry,
  updateIndexPage,

  generateCloudinarySignature,
  generateCloudinaryMediaLibraryAuthenticationToken,
};

export const resolvers = {
  Query,
  Mutation,
};
