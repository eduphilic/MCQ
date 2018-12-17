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
/** Supported localization languages. */
export enum Language {
  English = "English",
  Hindi = "Hindi",
}

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

  translation: Translation;

  entries: Entry[];

  category?: Category | null;

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

export interface Mutation {
  createCategoryExistingEntry?: boolean | null;

  createCategoryNewEntry?: boolean | null;
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
export interface CategoryQueryArgs {
  id: string;
}
export interface CreateCategoryExistingEntryMutationArgs {
  request: CategoryCreationRequestExistingEntry;
}
export interface CreateCategoryNewEntryMutationArgs {
  request: CategoryCreationRequestNewEntry;
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

  translation?: QueryTranslationResolver<Translation, TypeParent, Context>;

  entries?: QueryEntriesResolver<Entry[], TypeParent, Context>;

  category?: QueryCategoryResolver<Category | null, TypeParent, Context>;

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
export type QueryTranslationResolver<
  R = Translation,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, QueryTranslationArgs>;
export interface QueryTranslationArgs {
  language: Language;
}

export type QueryEntriesResolver<
  R = Entry[],
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context>;
export type QueryCategoryResolver<
  R = Category | null,
  Parent = {},
  Context = ApolloContext
> = Resolver<R, Parent, Context, QueryCategoryArgs>;
export interface QueryCategoryArgs {
  id: string;
}

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
