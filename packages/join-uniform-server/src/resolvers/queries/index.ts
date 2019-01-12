import { QueryResolvers } from "~/generated";

import TypeDefCategory from "./category.graphql";
import TypeDefCloudinaryApiKey from "./cloudinaryApiKey.graphql";
import TypeDefCloudinaryCloudName from "./cloudinaryCloudName.graphql";
import TypeDefEntries from "./entries.graphql";
import TypeDefEntry from "./entry.graphql";
import TypeDefEntryCategories from "./entryCategories.graphql";
import TypeDefHtmlConfig from "./htmlConfig.graphql";
import TypeDefIndexCards from "./indexCards.graphql";
import TypeDefIndexPageConfig from "./indexPageConfig.graphql";
import TypeDefLogoConfig from "./logoConfig.graphql";
import TypeDefYoutubeVideos from "./youtubeVideos.graphql";

import { category } from "./category";
import { cloudinaryApiKey } from "./cloudinaryApiKey";
import { cloudinaryCloudName } from "./cloudinaryCloudName";
import { entries } from "./entries";
import { entry } from "./entry";
import { entryCategories } from "./entryCategories";
import { htmlConfig } from "./htmlConfig";
import { indexCards } from "./indexCards";
import { indexPageConfig } from "./indexPageConfig";
import { logoConfig } from "./logoConfig";
import { youtubeVideos } from "./youtubeVideos";

export const typeDefs = [
  TypeDefCategory,
  TypeDefCloudinaryApiKey,
  TypeDefCloudinaryCloudName,
  TypeDefEntries,
  TypeDefEntry,
  TypeDefEntryCategories,
  TypeDefHtmlConfig,
  TypeDefIndexCards,
  TypeDefIndexPageConfig,
  TypeDefLogoConfig,
  TypeDefLogoConfig,
  TypeDefYoutubeVideos,
];

export const Query: QueryResolvers = {
  category,
  cloudinaryApiKey,
  cloudinaryCloudName,
  entries,
  entry,
  entryCategories,
  htmlConfig,
  indexCards,
  indexPageConfig,
  logoConfig,
  youtubeVideos,
};
