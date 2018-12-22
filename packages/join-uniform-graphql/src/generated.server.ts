// AUTO-GENERATED - DO NOT EDIT
// SCRIPT-> yarn build
// @ts-ignore
import * as models from "./models";

export interface CategoryCreationRequestExistingEntry {
  readonly categoryName: string;

  readonly categoryEducation: string;

  readonly pricePerPaper: number;

  readonly existingEntryId: string;
}

export interface CategoryCreationRequestNewEntry {
  readonly categoryName: string;

  readonly categoryEducation: string;

  readonly pricePerPaper: number;

  readonly entryLogoUrl: string;

  readonly entryName: string;

  readonly entryExplanation: string;
}

export interface EntryUpdate {
  readonly name: string;

  readonly logoUrl: string;

  readonly description: string;
}

export interface CategoryUpdate {
  readonly name: string;

  readonly education: string;

  readonly pricePerPaperRs: number;
}
/** Supported localization languages. */
export enum Language {
  English = "English",
  Hindi = "Hindi",
}

/** Represents a localized string.The Hindi field is optional.Fields:- key: String!- en: String!- hi: String */
export type LocalizedString = models.LocalizedString;

/** A set of localized strings for a language. */
export type Translation = any;

export type Json = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  htmlConfig: HtmlConfig;

  logoConfig: LogoConfig;

  indexPageConfig: IndexPageConfig;

  translation: Translation;

  entry?: Entry | null;

  entries: Entry[];

  entryCategories: Category[];

  category?: Category | null;

  indexCards: IndexCard[];

  youtubeVideos: IndexYouTubeVideo[];

  cloudinaryCloudName: string;

  cloudinaryApiKey: string;
}

/** Configuration for the html document sent in response to all requests. */
export interface HtmlConfig {
  /** Google Analytics ID. */
  googleAnalyticsId?: string | null;
  /** Meta "keywords" tag. */
  metaKeywords?: string | null;
  /** Meta "description" tag. */
  metaDescription?: string | null;
  /** Meta "author" tag. */
  metaAuthor?: string | null;
  /** Meta "abstract" tag. */
  metaAbstract?: string | null;
  /** Meta "copyright" tag. */
  metaCopyright?: string | null;
}

/** Logo image configuration. */
export interface LogoConfig {
  /** Url of logo image. */
  url: string;
}

/** Configuration for the landing page / index page. */
export interface IndexPageConfig {
  /** The url to the hero image. */
  heroBackgroundImageUrl: string;
  /** The transparency of the hero image. */
  heroBackgroundAlpha: number;
  /** The primary hero text (large top text). */
  heroPrimaryText: LocalizedString;
  /** List of features below the primary hero text. */
  heroFeatures: LocalizedString[];
  /** Text in the green section below the hero section. */
  heroFooterText: LocalizedString;
  /** About section title. */
  aboutTitle: LocalizedString;
  /** Text below the about title. */
  aboutText: LocalizedString;
  /** Images in the about section. */
  aboutImages: IndexPageAboutImage[];
}

/** Image and supporting text in index about section. */
export interface IndexPageAboutImage {
  /** Image URL. */
  imageUrl: string;
  /** Large text below image. */
  title: LocalizedString;
  /** Small text below image. */
  text: LocalizedString;
}

/** Represents a military service branch (Entry). */
export interface Entry {
  id: string;

  name: string;

  logoUrl: string;

  description: string;

  categories: string[];
}

/** Represents an Entry Category. */
export interface Category {
  id: string;

  name: string;

  education: string;

  pricePerPaperRs: number;

  activated: boolean;
}

/** One of the Index Cards on main landing page. */
export interface IndexCard {
  entryId: string;

  title: string;

  categories: TypeIndexCardCategory[];

  entryLogoUrl: string;

  colorBlock: string;

  colorCategoryBackground: string;

  colorLogoBackground: string;

  colorTitle: string;
}

export interface TypeIndexCardCategory {
  categoryId: string;

  title: string;

  visible: boolean;
}

export interface IndexYouTubeVideo {
  /** Will contain the Entry ID that the video corresponds to assuming that theEntry has not been removed. */
  entryId?: string | null;
  /** Order of appearance. */
  position: number;

  youtubeUrl: string;

  title: LocalizedString;
}

export interface Mutation {
  createCategoryExistingEntry?: boolean | null;

  createCategoryNewEntry?: boolean | null;

  updateEntry?: boolean | null;

  deleteEntry?: boolean | null;

  updateCategory?: boolean | null;

  deleteCategories?: boolean | null;

  setCategoryActivationStatus?: boolean | null;
  /** Signs the parameters passed by the Cloudinary Upload Widget.See: https://cloudinary.com/documentation/upload_widget#signed_uploads */
  generateCloudinarySignature: string;
  /** Generates the authentication parameters required for creating a session foruse with the Cloudinary Media Library widget. */
  generateCloudinaryMediaLibraryAuthenticationToken: CloudinaryMediaWidgetAuthenticationToken;
}

/** Authentication parameters for Cloudinary Media Library widget. */
export interface CloudinaryMediaWidgetAuthenticationToken {
  cloud_name: string;

  api_key: string;

  username: string;

  timestamp: string;

  signature: string;
}

// ====================================================
// Arguments
// ====================================================

export interface TranslationQueryArgs {
  language: Language;
}
export interface EntryQueryArgs {
  entryId: string;
}
export interface EntryCategoriesQueryArgs {
  entryId: string;
}
export interface CategoryQueryArgs {
  id: string;
}
export interface CreateCategoryExistingEntryMutationArgs {
  request: CategoryCreationRequestExistingEntry;
}
export interface CreateCategoryNewEntryMutationArgs {
  request: CategoryCreationRequestNewEntry;
}
export interface UpdateEntryMutationArgs {
  entryId: string;

  update: EntryUpdate;
}
export interface DeleteEntryMutationArgs {
  entryId: string;
}
export interface UpdateCategoryMutationArgs {
  categoryId: string;

  update: CategoryUpdate;
}
export interface DeleteCategoriesMutationArgs {
  entryId: string;

  categoryIds: string[];
}
export interface SetCategoryActivationStatusMutationArgs {
  categoryId: string;

  activated: boolean;
}
export interface GenerateCloudinarySignatureMutationArgs {
  paramsToSign: Json;
}

import { GraphQLResolveInfo } from "graphql";

import { ApolloContext } from "../../join-uniform-server/src/ApolloContext";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export interface QueryResolvers<Context = ApolloContext, TypeParent = {}> {
  htmlConfig?: QueryHtmlConfigResolver<HtmlConfig, TypeParent, Context>;

  logoConfig?: QueryLogoConfigResolver<LogoConfig, TypeParent, Context>;

  indexPageConfig?: QueryIndexPageConfigResolver<
    IndexPageConfig,
    TypeParent,
    Context
  >;

  translation?: QueryTranslationResolver<Translation, TypeParent, Context>;

  entry?: QueryEntryResolver<Entry | null, TypeParent, Context>;

  entries?: QueryEntriesResolver<Entry[], TypeParent, Context>;

  entryCategories?: QueryEntryCategoriesResolver<
    Category[],
    TypeParent,
    Context
  >;

  category?: QueryCategoryResolver<Category | null, TypeParent, Context>;

  indexCards?: QueryIndexCardsResolver<IndexCard[], TypeParent, Context>;

  youtubeVideos?: QueryYoutubeVideosResolver<
    IndexYouTubeVideo[],
    TypeParent,
    Context
  >;

  cloudinaryCloudName?: QueryCloudinaryCloudNameResolver<
    string,
    TypeParent,
    Context
  >;

  cloudinaryApiKey?: QueryCloudinaryApiKeyResolver<string, TypeParent, Context>;
}

export type QueryHtmlConfigResolver<
  R = HtmlConfig,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type QueryLogoConfigResolver<
  R = LogoConfig,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type QueryIndexPageConfigResolver<
  R = IndexPageConfig,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type QueryTranslationResolver<
  R = Translation,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, QueryTranslationArgs>;
export interface QueryTranslationArgs {
  language: Language;
}

export type QueryEntryResolver<
  R = Entry | null,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, QueryEntryArgs>;
export interface QueryEntryArgs {
  entryId: string;
}

export type QueryEntriesResolver<
  R = Entry[],
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type QueryEntryCategoriesResolver<
  R = Category[],
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, QueryEntryCategoriesArgs>;
export interface QueryEntryCategoriesArgs {
  entryId: string;
}

export type QueryCategoryResolver<
  R = Category | null,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, QueryCategoryArgs>;
export interface QueryCategoryArgs {
  id: string;
}

export type QueryIndexCardsResolver<
  R = IndexCard[],
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type QueryYoutubeVideosResolver<
  R = IndexYouTubeVideo[],
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type QueryCloudinaryCloudNameResolver<
  R = string,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type QueryCloudinaryApiKeyResolver<
  R = string,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
/** Configuration for the html document sent in response to all requests. */
export interface HtmlConfigResolvers<
  Context = ApolloContext,
  TypeParent = HtmlConfig
> {
  /** Google Analytics ID. */
  googleAnalyticsId?: HtmlConfigGoogleAnalyticsIdResolver<
    string | null,
    TypeParent,
    Context
  >;
  /** Meta "keywords" tag. */
  metaKeywords?: HtmlConfigMetaKeywordsResolver<
    string | null,
    TypeParent,
    Context
  >;
  /** Meta "description" tag. */
  metaDescription?: HtmlConfigMetaDescriptionResolver<
    string | null,
    TypeParent,
    Context
  >;
  /** Meta "author" tag. */
  metaAuthor?: HtmlConfigMetaAuthorResolver<string | null, TypeParent, Context>;
  /** Meta "abstract" tag. */
  metaAbstract?: HtmlConfigMetaAbstractResolver<
    string | null,
    TypeParent,
    Context
  >;
  /** Meta "copyright" tag. */
  metaCopyright?: HtmlConfigMetaCopyrightResolver<
    string | null,
    TypeParent,
    Context
  >;
}

export type HtmlConfigGoogleAnalyticsIdResolver<
  R = string | null,
  Parent = HtmlConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type HtmlConfigMetaKeywordsResolver<
  R = string | null,
  Parent = HtmlConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type HtmlConfigMetaDescriptionResolver<
  R = string | null,
  Parent = HtmlConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type HtmlConfigMetaAuthorResolver<
  R = string | null,
  Parent = HtmlConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type HtmlConfigMetaAbstractResolver<
  R = string | null,
  Parent = HtmlConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type HtmlConfigMetaCopyrightResolver<
  R = string | null,
  Parent = HtmlConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
/** Logo image configuration. */
export interface LogoConfigResolvers<
  Context = ApolloContext,
  TypeParent = LogoConfig
> {
  /** Url of logo image. */
  url?: LogoConfigUrlResolver<string, TypeParent, Context>;
}

export type LogoConfigUrlResolver<
  R = string,
  Parent = LogoConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
/** Configuration for the landing page / index page. */
export interface IndexPageConfigResolvers<
  Context = ApolloContext,
  TypeParent = IndexPageConfig
> {
  /** The url to the hero image. */
  heroBackgroundImageUrl?: IndexPageConfigHeroBackgroundImageUrlResolver<
    string,
    TypeParent,
    Context
  >;
  /** The transparency of the hero image. */
  heroBackgroundAlpha?: IndexPageConfigHeroBackgroundAlphaResolver<
    number,
    TypeParent,
    Context
  >;
  /** The primary hero text (large top text). */
  heroPrimaryText?: IndexPageConfigHeroPrimaryTextResolver<
    LocalizedString,
    TypeParent,
    Context
  >;
  /** List of features below the primary hero text. */
  heroFeatures?: IndexPageConfigHeroFeaturesResolver<
    LocalizedString[],
    TypeParent,
    Context
  >;
  /** Text in the green section below the hero section. */
  heroFooterText?: IndexPageConfigHeroFooterTextResolver<
    LocalizedString,
    TypeParent,
    Context
  >;
  /** About section title. */
  aboutTitle?: IndexPageConfigAboutTitleResolver<
    LocalizedString,
    TypeParent,
    Context
  >;
  /** Text below the about title. */
  aboutText?: IndexPageConfigAboutTextResolver<
    LocalizedString,
    TypeParent,
    Context
  >;
  /** Images in the about section. */
  aboutImages?: IndexPageConfigAboutImagesResolver<
    IndexPageAboutImage[],
    TypeParent,
    Context
  >;
}

export type IndexPageConfigHeroBackgroundImageUrlResolver<
  R = string,
  Parent = IndexPageConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexPageConfigHeroBackgroundAlphaResolver<
  R = number,
  Parent = IndexPageConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexPageConfigHeroPrimaryTextResolver<
  R = LocalizedString,
  Parent = IndexPageConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexPageConfigHeroFeaturesResolver<
  R = LocalizedString[],
  Parent = IndexPageConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexPageConfigHeroFooterTextResolver<
  R = LocalizedString,
  Parent = IndexPageConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexPageConfigAboutTitleResolver<
  R = LocalizedString,
  Parent = IndexPageConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexPageConfigAboutTextResolver<
  R = LocalizedString,
  Parent = IndexPageConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexPageConfigAboutImagesResolver<
  R = IndexPageAboutImage[],
  Parent = IndexPageConfig,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
/** Image and supporting text in index about section. */
export interface IndexPageAboutImageResolvers<
  Context = ApolloContext,
  TypeParent = IndexPageAboutImage
> {
  /** Image URL. */
  imageUrl?: IndexPageAboutImageImageUrlResolver<string, TypeParent, Context>;
  /** Large text below image. */
  title?: IndexPageAboutImageTitleResolver<
    LocalizedString,
    TypeParent,
    Context
  >;
  /** Small text below image. */
  text?: IndexPageAboutImageTextResolver<LocalizedString, TypeParent, Context>;
}

export type IndexPageAboutImageImageUrlResolver<
  R = string,
  Parent = IndexPageAboutImage,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexPageAboutImageTitleResolver<
  R = LocalizedString,
  Parent = IndexPageAboutImage,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexPageAboutImageTextResolver<
  R = LocalizedString,
  Parent = IndexPageAboutImage,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
/** Represents a military service branch (Entry). */
export interface EntryResolvers<Context = ApolloContext, TypeParent = Entry> {
  id?: EntryIdResolver<string, TypeParent, Context>;

  name?: EntryNameResolver<string, TypeParent, Context>;

  logoUrl?: EntryLogoUrlResolver<string, TypeParent, Context>;

  description?: EntryDescriptionResolver<string, TypeParent, Context>;

  categories?: EntryCategoriesResolver<string[], TypeParent, Context>;
}

export type EntryIdResolver<
  R = string,
  Parent = Entry,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type EntryNameResolver<
  R = string,
  Parent = Entry,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type EntryLogoUrlResolver<
  R = string,
  Parent = Entry,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type EntryDescriptionResolver<
  R = string,
  Parent = Entry,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type EntryCategoriesResolver<
  R = string[],
  Parent = Entry,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
/** Represents an Entry Category. */
export interface CategoryResolvers<
  Context = ApolloContext,
  TypeParent = Category
> {
  id?: CategoryIdResolver<string, TypeParent, Context>;

  name?: CategoryNameResolver<string, TypeParent, Context>;

  education?: CategoryEducationResolver<string, TypeParent, Context>;

  pricePerPaperRs?: CategoryPricePerPaperRsResolver<
    number,
    TypeParent,
    Context
  >;

  activated?: CategoryActivatedResolver<boolean, TypeParent, Context>;
}

export type CategoryIdResolver<
  R = string,
  Parent = Category,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type CategoryNameResolver<
  R = string,
  Parent = Category,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type CategoryEducationResolver<
  R = string,
  Parent = Category,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type CategoryPricePerPaperRsResolver<
  R = number,
  Parent = Category,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type CategoryActivatedResolver<
  R = boolean,
  Parent = Category,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
/** One of the Index Cards on main landing page. */
export interface IndexCardResolvers<
  Context = ApolloContext,
  TypeParent = IndexCard
> {
  entryId?: IndexCardEntryIdResolver<string, TypeParent, Context>;

  title?: IndexCardTitleResolver<string, TypeParent, Context>;

  categories?: IndexCardCategoriesResolver<
    TypeIndexCardCategory[],
    TypeParent,
    Context
  >;

  entryLogoUrl?: IndexCardEntryLogoUrlResolver<string, TypeParent, Context>;

  colorBlock?: IndexCardColorBlockResolver<string, TypeParent, Context>;

  colorCategoryBackground?: IndexCardColorCategoryBackgroundResolver<
    string,
    TypeParent,
    Context
  >;

  colorLogoBackground?: IndexCardColorLogoBackgroundResolver<
    string,
    TypeParent,
    Context
  >;

  colorTitle?: IndexCardColorTitleResolver<string, TypeParent, Context>;
}

export type IndexCardEntryIdResolver<
  R = string,
  Parent = IndexCard,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexCardTitleResolver<
  R = string,
  Parent = IndexCard,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexCardCategoriesResolver<
  R = TypeIndexCardCategory[],
  Parent = IndexCard,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexCardEntryLogoUrlResolver<
  R = string,
  Parent = IndexCard,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexCardColorBlockResolver<
  R = string,
  Parent = IndexCard,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexCardColorCategoryBackgroundResolver<
  R = string,
  Parent = IndexCard,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexCardColorLogoBackgroundResolver<
  R = string,
  Parent = IndexCard,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexCardColorTitleResolver<
  R = string,
  Parent = IndexCard,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;

export interface TypeIndexCardCategoryResolvers<
  Context = ApolloContext,
  TypeParent = TypeIndexCardCategory
> {
  categoryId?: TypeIndexCardCategoryCategoryIdResolver<
    string,
    TypeParent,
    Context
  >;

  title?: TypeIndexCardCategoryTitleResolver<string, TypeParent, Context>;

  visible?: TypeIndexCardCategoryVisibleResolver<boolean, TypeParent, Context>;
}

export type TypeIndexCardCategoryCategoryIdResolver<
  R = string,
  Parent = TypeIndexCardCategory,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type TypeIndexCardCategoryTitleResolver<
  R = string,
  Parent = TypeIndexCardCategory,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type TypeIndexCardCategoryVisibleResolver<
  R = boolean,
  Parent = TypeIndexCardCategory,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;

export interface IndexYouTubeVideoResolvers<
  Context = ApolloContext,
  TypeParent = IndexYouTubeVideo
> {
  /** Will contain the Entry ID that the video corresponds to assuming that theEntry has not been removed. */
  entryId?: IndexYouTubeVideoEntryIdResolver<
    string | null,
    TypeParent,
    Context
  >;
  /** Order of appearance. */
  position?: IndexYouTubeVideoPositionResolver<number, TypeParent, Context>;

  youtubeUrl?: IndexYouTubeVideoYoutubeUrlResolver<string, TypeParent, Context>;

  title?: IndexYouTubeVideoTitleResolver<LocalizedString, TypeParent, Context>;
}

export type IndexYouTubeVideoEntryIdResolver<
  R = string | null,
  Parent = IndexYouTubeVideo,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexYouTubeVideoPositionResolver<
  R = number,
  Parent = IndexYouTubeVideo,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexYouTubeVideoYoutubeUrlResolver<
  R = string,
  Parent = IndexYouTubeVideo,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type IndexYouTubeVideoTitleResolver<
  R = LocalizedString,
  Parent = IndexYouTubeVideo,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;

export interface MutationResolvers<Context = ApolloContext, TypeParent = {}> {
  createCategoryExistingEntry?: MutationCreateCategoryExistingEntryResolver<
    boolean | null,
    TypeParent,
    Context
  >;

  createCategoryNewEntry?: MutationCreateCategoryNewEntryResolver<
    boolean | null,
    TypeParent,
    Context
  >;

  updateEntry?: MutationUpdateEntryResolver<
    boolean | null,
    TypeParent,
    Context
  >;

  deleteEntry?: MutationDeleteEntryResolver<
    boolean | null,
    TypeParent,
    Context
  >;

  updateCategory?: MutationUpdateCategoryResolver<
    boolean | null,
    TypeParent,
    Context
  >;

  deleteCategories?: MutationDeleteCategoriesResolver<
    boolean | null,
    TypeParent,
    Context
  >;

  setCategoryActivationStatus?: MutationSetCategoryActivationStatusResolver<
    boolean | null,
    TypeParent,
    Context
  >;
  /** Signs the parameters passed by the Cloudinary Upload Widget.See: https://cloudinary.com/documentation/upload_widget#signed_uploads */
  generateCloudinarySignature?: MutationGenerateCloudinarySignatureResolver<
    string,
    TypeParent,
    Context
  >;
  /** Generates the authentication parameters required for creating a session foruse with the Cloudinary Media Library widget. */
  generateCloudinaryMediaLibraryAuthenticationToken?: MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver<
    CloudinaryMediaWidgetAuthenticationToken,
    TypeParent,
    Context
  >;
}

export type MutationCreateCategoryExistingEntryResolver<
  R = boolean | null,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, MutationCreateCategoryExistingEntryArgs>;
export interface MutationCreateCategoryExistingEntryArgs {
  request: CategoryCreationRequestExistingEntry;
}

export type MutationCreateCategoryNewEntryResolver<
  R = boolean | null,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, MutationCreateCategoryNewEntryArgs>;
export interface MutationCreateCategoryNewEntryArgs {
  request: CategoryCreationRequestNewEntry;
}

export type MutationUpdateEntryResolver<
  R = boolean | null,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, MutationUpdateEntryArgs>;
export interface MutationUpdateEntryArgs {
  entryId: string;

  update: EntryUpdate;
}

export type MutationDeleteEntryResolver<
  R = boolean | null,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, MutationDeleteEntryArgs>;
export interface MutationDeleteEntryArgs {
  entryId: string;
}

export type MutationUpdateCategoryResolver<
  R = boolean | null,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, MutationUpdateCategoryArgs>;
export interface MutationUpdateCategoryArgs {
  categoryId: string;

  update: CategoryUpdate;
}

export type MutationDeleteCategoriesResolver<
  R = boolean | null,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, MutationDeleteCategoriesArgs>;
export interface MutationDeleteCategoriesArgs {
  entryId: string;

  categoryIds: string[];
}

export type MutationSetCategoryActivationStatusResolver<
  R = boolean | null,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, MutationSetCategoryActivationStatusArgs>;
export interface MutationSetCategoryActivationStatusArgs {
  categoryId: string;

  activated: boolean;
}

export type MutationGenerateCloudinarySignatureResolver<
  R = string,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, MutationGenerateCloudinarySignatureArgs>;
export interface MutationGenerateCloudinarySignatureArgs {
  paramsToSign: Json;
}

export type MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver<
  R = CloudinaryMediaWidgetAuthenticationToken,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
/** Authentication parameters for Cloudinary Media Library widget. */
export interface CloudinaryMediaWidgetAuthenticationTokenResolvers<
  Context = ApolloContext,
  TypeParent = CloudinaryMediaWidgetAuthenticationToken
> {
  cloud_name?: CloudinaryMediaWidgetAuthenticationTokenCloudNameResolver<
    string,
    TypeParent,
    Context
  >;

  api_key?: CloudinaryMediaWidgetAuthenticationTokenApiKeyResolver<
    string,
    TypeParent,
    Context
  >;

  username?: CloudinaryMediaWidgetAuthenticationTokenUsernameResolver<
    string,
    TypeParent,
    Context
  >;

  timestamp?: CloudinaryMediaWidgetAuthenticationTokenTimestampResolver<
    string,
    TypeParent,
    Context
  >;

  signature?: CloudinaryMediaWidgetAuthenticationTokenSignatureResolver<
    string,
    TypeParent,
    Context
  >;
}

export type CloudinaryMediaWidgetAuthenticationTokenCloudNameResolver<
  R = string,
  Parent = CloudinaryMediaWidgetAuthenticationToken,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type CloudinaryMediaWidgetAuthenticationTokenApiKeyResolver<
  R = string,
  Parent = CloudinaryMediaWidgetAuthenticationToken,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type CloudinaryMediaWidgetAuthenticationTokenUsernameResolver<
  R = string,
  Parent = CloudinaryMediaWidgetAuthenticationToken,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type CloudinaryMediaWidgetAuthenticationTokenTimestampResolver<
  R = string,
  Parent = CloudinaryMediaWidgetAuthenticationToken,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type CloudinaryMediaWidgetAuthenticationTokenSignatureResolver<
  R = string,
  Parent = CloudinaryMediaWidgetAuthenticationToken,
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
