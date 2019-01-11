import { MutationResolvers, QueryResolvers } from "~/generated";

import { htmlConfig } from "./htmlConfig";
import { indexCards } from "./indexCards";
import { indexPageConfig } from "./indexPageConfig";
import { youtubeVideos } from "./youtubeVideos";

import { logoConfig } from "./logoConfig";
import { updateLogoUrl } from "./updateLogoUrl";

import { category } from "./category";
import { entries } from "./entries";
import { entry } from "./entry";
import { entryCategories } from "./entryCategories";

import { createCategoryExistingEntry } from "./createCategoryExistingEntry";
import { createCategoryNewEntry } from "./createCategoryNewEntry";
import { deleteCategories } from "./deleteCategories";
import { deleteEntries } from "./deleteEntries";
import { setCategoryActivationStatuses } from "./setCategoryActivationStatuses";
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
  setCategoryActivationStatuses,
  updateCategory,
  updateEntry,
  updateIndexPage,
  updateLogoUrl,

  generateCloudinarySignature,
  generateCloudinaryMediaLibraryAuthenticationToken,
};

export const resolvers = {
  Query,
  Mutation,
};
