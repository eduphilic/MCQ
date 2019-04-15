import { QueryResolvers } from "~/generated";

import { categories, TypeDefCategories } from "./categories";
import {
  categoriesByEntryId,
  TypeDefCategoriesByEntryId,
} from "./categoriesByEntryId";
import { categoriesByIds, TypeDefCategoriesByIds } from "./categoriesByIds";
import { cloudinaryApiKey, TypeDefCloudinaryApiKey } from "./cloudinaryApiKey";
import {
  cloudinaryCloudName,
  TypeDefCloudinaryCloudName,
} from "./cloudinaryCloudName";
import { entries, TypeDefEntries } from "./entries";
import { entriesByIds, TypeDefEntriesByIds } from "./entriesByIds";
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
  TypeDefCategories,
  TypeDefCategoriesByEntryId,
  TypeDefCategoriesByIds,
  TypeDefCloudinaryApiKey,
  TypeDefCloudinaryCloudName,
  TypeDefEntries,
  TypeDefEntriesByIds,
  TypeDefHtmlConfig,
  TypeDefIndexCards,
  TypeDefIndexCardsByEntryIds,
  TypeDefIndexPageConfig,
  TypeDefLogoConfig,
  TypeDefLogoConfig,
  TypeDefYoutubeVideos,
];

export const Query: QueryResolvers = {
  categories,
  categoriesByEntryId,
  categoriesByIds,
  cloudinaryApiKey,
  cloudinaryCloudName,
  entries,
  entriesByIds,
  htmlConfig,
  indexCards,
  indexCardsByEntryIds,
  indexPageConfig,
  logoConfig,
  youtubeVideos,
};
