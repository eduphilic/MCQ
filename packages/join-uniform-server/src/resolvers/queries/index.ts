import { QueryResolvers } from "~/generated";

import { categoriesByIds, TypeDefCategoriesByIds } from "./categoriesByIds";
import { cloudinaryApiKey, TypeDefCloudinaryApiKey } from "./cloudinaryApiKey";
import {
  cloudinaryCloudName,
  TypeDefCloudinaryCloudName,
} from "./cloudinaryCloudName";
import { entries, TypeDefEntries } from "./entries";
import { entry, TypeDefEntry } from "./entry";
import { entryCategories, TypeDefEntryCategories } from "./entryCategories";
import { htmlConfig, TypeDefHtmlConfig } from "./htmlConfig";
import { indexCards, TypeDefIndexCards } from "./indexCards";
import {
  indexCardsByEntryIds,
  TypeDefIndexCardsByEntryIds,
} from "./indexCardsByEntryIds";
import { indexPageConfig, TypeDefIndexPageConfig } from "./indexPageConfig";
import { logoConfig, TypeDefLogoConfig } from "./logoConfig";
import { TypeDefYoutubeVideos, youtubeVideos } from "./youtubeVideos";

export const typeDefs = [
  TypeDefCategoriesByIds,
  TypeDefCloudinaryApiKey,
  TypeDefCloudinaryCloudName,
  TypeDefEntries,
  TypeDefEntry,
  TypeDefEntryCategories,
  TypeDefHtmlConfig,
  TypeDefIndexCards,
  TypeDefIndexCardsByEntryIds,
  TypeDefIndexPageConfig,
  TypeDefLogoConfig,
  TypeDefLogoConfig,
  TypeDefYoutubeVideos,
];

export const Query: QueryResolvers = {
  categoriesByIds,
  cloudinaryApiKey,
  cloudinaryCloudName,
  entries,
  entry,
  entryCategories,
  htmlConfig,
  indexCards,
  indexCardsByEntryIds,
  indexPageConfig,
  logoConfig,
  youtubeVideos,
};
