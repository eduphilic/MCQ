// This is an automatically generated file.
// DO NOT MODIFY
// Use the command: "yarn graphql" to regenerate.
import { models } from "@join-uniform/common";
export type Maybe<T> = T | null;


export interface CreateCategoryRequest {
  
  name: string;
  
  education: string;
  
  pricePerPaperRs: number;
  
  entryId: string;
}

export interface CreateEntryRequest {
  
  name: string;
  
  explanation: string;
  
  logoUrl: string;
}

export interface CategoryUpdateRequest {
  
  name: string;
  
  education: string;
  
  pricePerPaperRs: number;
}

export interface EntryUpdateRequest {
  
  name: string;
  
  logoUrl: string;
  
  description: string;
}

export interface UpdateIndexCardsRequest {
  /** Same as the id for the Entry the IndexCard represents. */
  id: string;
  
  categories: UpdateIndexCardsCategoriesRequest[];
  
  colorBlock: string;
  
  colorCategoryBackground: string;
  
  colorLogoBackground: string;
  
  colorTitle: string;
}

export interface UpdateIndexCardsCategoriesRequest {
  /** Id of the category. */
  id: string;
  
  visible: boolean;
}

export interface IndexPageUpdateRequest {
  
  heroBackgroundImageUrl: string;
  
  heroBackgroundAlpha: number;
  
  heroPrimaryTextEnglish: string;
  
  heroPrimaryTextHindi: Maybe<string>;
  
  heroFeatures: models.LocalizedString[];
  
  aboutTitleEnglish: string;
  
  aboutTitleHindi: Maybe<string>;
  
  aboutTextEnglish: string;
  
  aboutTextHindi: Maybe<string>;
  
  aboutImages: IndexPageAboutImageUpdateRequest[];
  
  indexCards: IndexPageIndexCardUpdateRequest[];
}

export interface IndexPageAboutImageUpdateRequest {
  
  id: string;
  
  imageUrl: string;
  
  title: models.LocalizedString;
  
  text: models.LocalizedString;
}

export interface IndexPageIndexCardUpdateRequest {
  
  entryId: string;
  
  colorBlock: string;
  
  colorCategoryBackground: string;
  
  colorLogoBackground: string;
  
  colorTitle: string;
  
  categories: IndexCardCategoryUpdateRequest[];
}

export interface IndexCardCategoryUpdateRequest {
  
  categoryId: string;
  
  visible: boolean;
}

/** Represents a localized string. The Hindi field is optional. Fields: - en: String! - hi: String */
export type LocalizedString = models.LocalizedString;


export type Json = any;



// ====================================================
// Scalars
// ====================================================







// ====================================================
// Types
// ====================================================



export interface Query {
  
  _empty: Maybe<boolean>;
  /** Returns all Categories. */
  categories: Category[];
  
  categoriesByEntryId: Category[];
  
  categoriesByIds: Category[];
  
  cloudinaryCloudName: string;
  
  cloudinaryApiKey: string;
  
  entries: Entry[];
  
  entriesByIds: Entry[];
  
  htmlConfig: HtmlConfig;
  
  indexCards: IndexCard[];
  /** Return the Index Cards for the specified Entries. */
  indexCardsByEntryIds: IndexCard[];
  
  indexPageConfig: IndexPageConfig;
  
  logoConfig: LogoConfig;
  
  youtubeVideos: IndexYouTubeVideo[];
}

/** Represents an Entry Category. */
export interface Category {
  
  id: string;
  
  name: string;
  
  education: string;
  
  pricePerPaperRs: number;
  
  activated: boolean;
}

/** Represents a military service branch (Entry). */
export interface Entry {
  
  id: string;
  
  name: string;
  
  logoUrl: string;
  
  description: string;
  
  categories: Category[];
}

/** Configuration for the html document sent in response to all requests. */
export interface HtmlConfig {
  /** Google Analytics ID. */
  googleAnalyticsId: Maybe<string>;
  /** Meta "keywords" tag. */
  metaKeywords: Maybe<string>;
  /** Meta "description" tag. */
  metaDescription: Maybe<string>;
  /** Meta "author" tag. */
  metaAuthor: Maybe<string>;
  /** Meta "abstract" tag. */
  metaAbstract: Maybe<string>;
  /** Meta "copyright" tag. */
  metaCopyright: Maybe<string>;
}

/** One of the Index Cards on main landing page. */
export interface IndexCard {
  /** Same as the id for the Entry the IndexCard represents. */
  id: string;
  
  title: string;
  
  categories: IndexCardCategory[];
  
  entryLogoUrl: string;
  
  colorBlock: string;
  
  colorCategoryBackground: string;
  
  colorLogoBackground: string;
  
  colorTitle: string;
}


export interface IndexCardCategory {
  /** Id of the category. */
  id: string;
  
  title: string;
  
  visible: boolean;
}

/** Configuration for the landing page / index page. */
export interface IndexPageConfig {
  /** Always "index-page-config". */
  id: string;
  /** The url to the hero image. */
  heroBackgroundImageUrl: string;
  /** The transparency of the hero image. */
  heroBackgroundAlpha: number;
  /** The primary hero text (large top text). */
  heroPrimaryText: models.LocalizedString;
  /** List of features below the primary hero text. */
  heroFeatures: models.LocalizedString[];
  /** Text in the green section below the hero section. */
  heroFooterText: models.LocalizedString;
  /** About section title. */
  aboutTitle: models.LocalizedString;
  /** Text below the about title. */
  aboutText: models.LocalizedString;
  /** Images in the about section. */
  aboutImages: IndexPageAboutImage[];
}

/** Image and supporting text in index about section. */
export interface IndexPageAboutImage {
  
  id: string;
  /** Image URL. */
  imageUrl: string;
  /** Large text below image. */
  title: models.LocalizedString;
  /** Small text below image. */
  text: models.LocalizedString;
}

/** Logo image configuration. */
export interface LogoConfig {
  
  id: string;
  /** Url of logo image. */
  url: string;
}


export interface IndexYouTubeVideo {
  /** Will contain the Entry ID that the video corresponds to assuming that the Entry has not been removed. */
  entryId: Maybe<string>;
  /** Order of appearance. */
  position: number;
  
  youtubeUrl: string;
  
  title: models.LocalizedString;
}


export interface Mutation {
  
  _empty: Maybe<boolean>;
  
  createCategory: Category;
  
  createEntry: Entry;
  /** Deletes Categories. It removes both the Category database entry and the Category's id from the corresponding Entry objects in the database. It returns the list of remaining Categories. */
  deleteCategories: Category[];
  /** Deletes the specified Entries. They most not have any Categories associated with them. Returns the remaining Entries. */
  deleteEntries: Entry[];
  /** Generates the authentication parameters required for creating a session for use with the Cloudinary Media Library widget. */
  generateCloudinaryMediaLibraryAuthenticationToken: CloudinaryMediaWidgetAuthenticationToken;
  /** Signs the parameters passed by the Cloudinary Upload Widget. See: https://cloudinary.com/documentation/upload_widget#signed_uploads */
  generateCloudinarySignature: string;
  /** Sets the activation status for the specified categories. The number of ids needs to match the number of booleans. Returns the updated Categories. */
  setCategoryActivationStatuses: Category[];
  
  updateCategory: Category;
  
  updateEntry: Entry;
  
  updateIndexCards: IndexCard[];
  
  updateIndexPage: IndexPageConfig;
  
  updateLogoUrl: LogoConfig;
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

export interface CategoriesByEntryIdQueryArgs {
  
  id: string;
}
export interface CategoriesByIdsQueryArgs {
  
  ids: string[];
}
export interface EntriesByIdsQueryArgs {
  
  ids: string[];
}
export interface IndexCardsByEntryIdsQueryArgs {
  
  ids: string[];
}
export interface CreateCategoryMutationArgs {
  
  request: CreateCategoryRequest;
}
export interface CreateEntryMutationArgs {
  
  request: CreateEntryRequest;
}
export interface DeleteCategoriesMutationArgs {
  
  categoryIds: string[];
}
export interface DeleteEntriesMutationArgs {
  
  entryIds: string[];
}
export interface GenerateCloudinarySignatureMutationArgs {
  
  paramsToSign: Json;
}
export interface SetCategoryActivationStatusesMutationArgs {
  
  categoryIds: string[];
  
  activatedStatuses: boolean[];
}
export interface UpdateCategoryMutationArgs {
  
  categoryId: string;
  
  update: CategoryUpdateRequest;
}
export interface UpdateEntryMutationArgs {
  
  entryId: string;
  
  update: EntryUpdateRequest;
}
export interface UpdateIndexCardsMutationArgs {
  
  request: UpdateIndexCardsRequest[];
}
export interface UpdateIndexPageMutationArgs {
  
  request: IndexPageUpdateRequest;
}
export interface UpdateLogoUrlMutationArgs {
  
  logoUrl: string;
}


import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';



import { ApolloContext } from './ApolloContext';

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<Result, Parent = {}, Context = {}, Args = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;


  export interface QueryResolvers<Context = ApolloContext, TypeParent = {}> {
    
    _empty?: Query_EmptyResolver<Maybe<boolean>, TypeParent, Context>;
    /** Returns all Categories. */
    categories?: QueryCategoriesResolver<Category[], TypeParent, Context>;
    
    categoriesByEntryId?: QueryCategoriesByEntryIdResolver<Category[], TypeParent, Context>;
    
    categoriesByIds?: QueryCategoriesByIdsResolver<Category[], TypeParent, Context>;
    
    cloudinaryCloudName?: QueryCloudinaryCloudNameResolver<string, TypeParent, Context>;
    
    cloudinaryApiKey?: QueryCloudinaryApiKeyResolver<string, TypeParent, Context>;
    
    entries?: QueryEntriesResolver<Entry[], TypeParent, Context>;
    
    entriesByIds?: QueryEntriesByIdsResolver<Entry[], TypeParent, Context>;
    
    htmlConfig?: QueryHtmlConfigResolver<HtmlConfig, TypeParent, Context>;
    
    indexCards?: QueryIndexCardsResolver<IndexCard[], TypeParent, Context>;
    /** Return the Index Cards for the specified Entries. */
    indexCardsByEntryIds?: QueryIndexCardsByEntryIdsResolver<IndexCard[], TypeParent, Context>;
    
    indexPageConfig?: QueryIndexPageConfigResolver<IndexPageConfig, TypeParent, Context>;
    
    logoConfig?: QueryLogoConfigResolver<LogoConfig, TypeParent, Context>;
    
    youtubeVideos?: QueryYoutubeVideosResolver<IndexYouTubeVideo[], TypeParent, Context>;
  }


  export type Query_EmptyResolver<R = Maybe<boolean>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryCategoriesResolver<R = Category[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryCategoriesByEntryIdResolver<R = Category[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, QueryCategoriesByEntryIdArgs>;
  export interface QueryCategoriesByEntryIdArgs {
    
    id: string;
  }


  export type QueryCategoriesByIdsResolver<R = Category[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, QueryCategoriesByIdsArgs>;
  export interface QueryCategoriesByIdsArgs {
    
    ids: string[];
  }


  export type QueryCloudinaryCloudNameResolver<R = string, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryCloudinaryApiKeyResolver<R = string, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryEntriesResolver<R = Entry[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryEntriesByIdsResolver<R = Entry[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, QueryEntriesByIdsArgs>;
  export interface QueryEntriesByIdsArgs {
    
    ids: string[];
  }


  export type QueryHtmlConfigResolver<R = HtmlConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryIndexCardsResolver<R = IndexCard[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryIndexCardsByEntryIdsResolver<R = IndexCard[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, QueryIndexCardsByEntryIdsArgs>;
  export interface QueryIndexCardsByEntryIdsArgs {
    
    ids: string[];
  }


  export type QueryIndexPageConfigResolver<R = IndexPageConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryLogoConfigResolver<R = LogoConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryYoutubeVideosResolver<R = IndexYouTubeVideo[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;  
/** Represents an Entry Category. */
  export interface CategoryResolvers<Context = ApolloContext, TypeParent = Category> {
    
    id?: CategoryIdResolver<string, TypeParent, Context>;
    
    name?: CategoryNameResolver<string, TypeParent, Context>;
    
    education?: CategoryEducationResolver<string, TypeParent, Context>;
    
    pricePerPaperRs?: CategoryPricePerPaperRsResolver<number, TypeParent, Context>;
    
    activated?: CategoryActivatedResolver<boolean, TypeParent, Context>;
  }


  export type CategoryIdResolver<R = string, Parent = Category, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type CategoryNameResolver<R = string, Parent = Category, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type CategoryEducationResolver<R = string, Parent = Category, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type CategoryPricePerPaperRsResolver<R = number, Parent = Category, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type CategoryActivatedResolver<R = boolean, Parent = Category, Context = ApolloContext> = Resolver<R, Parent, Context>;  
/** Represents a military service branch (Entry). */
  export interface EntryResolvers<Context = ApolloContext, TypeParent = Entry> {
    
    id?: EntryIdResolver<string, TypeParent, Context>;
    
    name?: EntryNameResolver<string, TypeParent, Context>;
    
    logoUrl?: EntryLogoUrlResolver<string, TypeParent, Context>;
    
    description?: EntryDescriptionResolver<string, TypeParent, Context>;
    
    categories?: EntryCategoriesResolver<Category[], TypeParent, Context>;
  }


  export type EntryIdResolver<R = string, Parent = Entry, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type EntryNameResolver<R = string, Parent = Entry, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type EntryLogoUrlResolver<R = string, Parent = Entry, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type EntryDescriptionResolver<R = string, Parent = Entry, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type EntryCategoriesResolver<R = Category[], Parent = Entry, Context = ApolloContext> = Resolver<R, Parent, Context>;  
/** Configuration for the html document sent in response to all requests. */
  export interface HtmlConfigResolvers<Context = ApolloContext, TypeParent = HtmlConfig> {
    /** Google Analytics ID. */
    googleAnalyticsId?: HtmlConfigGoogleAnalyticsIdResolver<Maybe<string>, TypeParent, Context>;
    /** Meta "keywords" tag. */
    metaKeywords?: HtmlConfigMetaKeywordsResolver<Maybe<string>, TypeParent, Context>;
    /** Meta "description" tag. */
    metaDescription?: HtmlConfigMetaDescriptionResolver<Maybe<string>, TypeParent, Context>;
    /** Meta "author" tag. */
    metaAuthor?: HtmlConfigMetaAuthorResolver<Maybe<string>, TypeParent, Context>;
    /** Meta "abstract" tag. */
    metaAbstract?: HtmlConfigMetaAbstractResolver<Maybe<string>, TypeParent, Context>;
    /** Meta "copyright" tag. */
    metaCopyright?: HtmlConfigMetaCopyrightResolver<Maybe<string>, TypeParent, Context>;
  }


  export type HtmlConfigGoogleAnalyticsIdResolver<R = Maybe<string>, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaKeywordsResolver<R = Maybe<string>, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaDescriptionResolver<R = Maybe<string>, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaAuthorResolver<R = Maybe<string>, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaAbstractResolver<R = Maybe<string>, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaCopyrightResolver<R = Maybe<string>, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;  
/** One of the Index Cards on main landing page. */
  export interface IndexCardResolvers<Context = ApolloContext, TypeParent = IndexCard> {
    /** Same as the id for the Entry the IndexCard represents. */
    id?: IndexCardIdResolver<string, TypeParent, Context>;
    
    title?: IndexCardTitleResolver<string, TypeParent, Context>;
    
    categories?: IndexCardCategoriesResolver<IndexCardCategory[], TypeParent, Context>;
    
    entryLogoUrl?: IndexCardEntryLogoUrlResolver<string, TypeParent, Context>;
    
    colorBlock?: IndexCardColorBlockResolver<string, TypeParent, Context>;
    
    colorCategoryBackground?: IndexCardColorCategoryBackgroundResolver<string, TypeParent, Context>;
    
    colorLogoBackground?: IndexCardColorLogoBackgroundResolver<string, TypeParent, Context>;
    
    colorTitle?: IndexCardColorTitleResolver<string, TypeParent, Context>;
  }


  export type IndexCardIdResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardTitleResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardCategoriesResolver<R = IndexCardCategory[], Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardEntryLogoUrlResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardColorBlockResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardColorCategoryBackgroundResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardColorLogoBackgroundResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardColorTitleResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;  

  export interface IndexCardCategoryResolvers<Context = ApolloContext, TypeParent = IndexCardCategory> {
    /** Id of the category. */
    id?: IndexCardCategoryIdResolver<string, TypeParent, Context>;
    
    title?: IndexCardCategoryTitleResolver<string, TypeParent, Context>;
    
    visible?: IndexCardCategoryVisibleResolver<boolean, TypeParent, Context>;
  }


  export type IndexCardCategoryIdResolver<R = string, Parent = IndexCardCategory, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardCategoryTitleResolver<R = string, Parent = IndexCardCategory, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardCategoryVisibleResolver<R = boolean, Parent = IndexCardCategory, Context = ApolloContext> = Resolver<R, Parent, Context>;  
/** Configuration for the landing page / index page. */
  export interface IndexPageConfigResolvers<Context = ApolloContext, TypeParent = IndexPageConfig> {
    /** Always "index-page-config". */
    id?: IndexPageConfigIdResolver<string, TypeParent, Context>;
    /** The url to the hero image. */
    heroBackgroundImageUrl?: IndexPageConfigHeroBackgroundImageUrlResolver<string, TypeParent, Context>;
    /** The transparency of the hero image. */
    heroBackgroundAlpha?: IndexPageConfigHeroBackgroundAlphaResolver<number, TypeParent, Context>;
    /** The primary hero text (large top text). */
    heroPrimaryText?: IndexPageConfigHeroPrimaryTextResolver<models.LocalizedString, TypeParent, Context>;
    /** List of features below the primary hero text. */
    heroFeatures?: IndexPageConfigHeroFeaturesResolver<models.LocalizedString[], TypeParent, Context>;
    /** Text in the green section below the hero section. */
    heroFooterText?: IndexPageConfigHeroFooterTextResolver<models.LocalizedString, TypeParent, Context>;
    /** About section title. */
    aboutTitle?: IndexPageConfigAboutTitleResolver<models.LocalizedString, TypeParent, Context>;
    /** Text below the about title. */
    aboutText?: IndexPageConfigAboutTextResolver<models.LocalizedString, TypeParent, Context>;
    /** Images in the about section. */
    aboutImages?: IndexPageConfigAboutImagesResolver<IndexPageAboutImage[], TypeParent, Context>;
  }


  export type IndexPageConfigIdResolver<R = string, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroBackgroundImageUrlResolver<R = string, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroBackgroundAlphaResolver<R = number, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroPrimaryTextResolver<R = models.LocalizedString, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroFeaturesResolver<R = models.LocalizedString[], Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroFooterTextResolver<R = models.LocalizedString, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigAboutTitleResolver<R = models.LocalizedString, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigAboutTextResolver<R = models.LocalizedString, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigAboutImagesResolver<R = IndexPageAboutImage[], Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;  
/** Image and supporting text in index about section. */
  export interface IndexPageAboutImageResolvers<Context = ApolloContext, TypeParent = IndexPageAboutImage> {
    
    id?: IndexPageAboutImageIdResolver<string, TypeParent, Context>;
    /** Image URL. */
    imageUrl?: IndexPageAboutImageImageUrlResolver<string, TypeParent, Context>;
    /** Large text below image. */
    title?: IndexPageAboutImageTitleResolver<models.LocalizedString, TypeParent, Context>;
    /** Small text below image. */
    text?: IndexPageAboutImageTextResolver<models.LocalizedString, TypeParent, Context>;
  }


  export type IndexPageAboutImageIdResolver<R = string, Parent = IndexPageAboutImage, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageAboutImageImageUrlResolver<R = string, Parent = IndexPageAboutImage, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageAboutImageTitleResolver<R = models.LocalizedString, Parent = IndexPageAboutImage, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageAboutImageTextResolver<R = models.LocalizedString, Parent = IndexPageAboutImage, Context = ApolloContext> = Resolver<R, Parent, Context>;  
/** Logo image configuration. */
  export interface LogoConfigResolvers<Context = ApolloContext, TypeParent = LogoConfig> {
    
    id?: LogoConfigIdResolver<string, TypeParent, Context>;
    /** Url of logo image. */
    url?: LogoConfigUrlResolver<string, TypeParent, Context>;
  }


  export type LogoConfigIdResolver<R = string, Parent = LogoConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type LogoConfigUrlResolver<R = string, Parent = LogoConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;  

  export interface IndexYouTubeVideoResolvers<Context = ApolloContext, TypeParent = IndexYouTubeVideo> {
    /** Will contain the Entry ID that the video corresponds to assuming that the Entry has not been removed. */
    entryId?: IndexYouTubeVideoEntryIdResolver<Maybe<string>, TypeParent, Context>;
    /** Order of appearance. */
    position?: IndexYouTubeVideoPositionResolver<number, TypeParent, Context>;
    
    youtubeUrl?: IndexYouTubeVideoYoutubeUrlResolver<string, TypeParent, Context>;
    
    title?: IndexYouTubeVideoTitleResolver<models.LocalizedString, TypeParent, Context>;
  }


  export type IndexYouTubeVideoEntryIdResolver<R = Maybe<string>, Parent = IndexYouTubeVideo, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexYouTubeVideoPositionResolver<R = number, Parent = IndexYouTubeVideo, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexYouTubeVideoYoutubeUrlResolver<R = string, Parent = IndexYouTubeVideo, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexYouTubeVideoTitleResolver<R = models.LocalizedString, Parent = IndexYouTubeVideo, Context = ApolloContext> = Resolver<R, Parent, Context>;  

  export interface MutationResolvers<Context = ApolloContext, TypeParent = {}> {
    
    _empty?: Mutation_EmptyResolver<Maybe<boolean>, TypeParent, Context>;
    
    createCategory?: MutationCreateCategoryResolver<Category, TypeParent, Context>;
    
    createEntry?: MutationCreateEntryResolver<Entry, TypeParent, Context>;
    /** Deletes Categories. It removes both the Category database entry and the Category's id from the corresponding Entry objects in the database. It returns the list of remaining Categories. */
    deleteCategories?: MutationDeleteCategoriesResolver<Category[], TypeParent, Context>;
    /** Deletes the specified Entries. They most not have any Categories associated with them. Returns the remaining Entries. */
    deleteEntries?: MutationDeleteEntriesResolver<Entry[], TypeParent, Context>;
    /** Generates the authentication parameters required for creating a session for use with the Cloudinary Media Library widget. */
    generateCloudinaryMediaLibraryAuthenticationToken?: MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver<CloudinaryMediaWidgetAuthenticationToken, TypeParent, Context>;
    /** Signs the parameters passed by the Cloudinary Upload Widget. See: https://cloudinary.com/documentation/upload_widget#signed_uploads */
    generateCloudinarySignature?: MutationGenerateCloudinarySignatureResolver<string, TypeParent, Context>;
    /** Sets the activation status for the specified categories. The number of ids needs to match the number of booleans. Returns the updated Categories. */
    setCategoryActivationStatuses?: MutationSetCategoryActivationStatusesResolver<Category[], TypeParent, Context>;
    
    updateCategory?: MutationUpdateCategoryResolver<Category, TypeParent, Context>;
    
    updateEntry?: MutationUpdateEntryResolver<Entry, TypeParent, Context>;
    
    updateIndexCards?: MutationUpdateIndexCardsResolver<IndexCard[], TypeParent, Context>;
    
    updateIndexPage?: MutationUpdateIndexPageResolver<IndexPageConfig, TypeParent, Context>;
    
    updateLogoUrl?: MutationUpdateLogoUrlResolver<LogoConfig, TypeParent, Context>;
  }


  export type Mutation_EmptyResolver<R = Maybe<boolean>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type MutationCreateCategoryResolver<R = Category, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationCreateCategoryArgs>;
  export interface MutationCreateCategoryArgs {
    
    request: CreateCategoryRequest;
  }


  export type MutationCreateEntryResolver<R = Entry, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationCreateEntryArgs>;
  export interface MutationCreateEntryArgs {
    
    request: CreateEntryRequest;
  }


  export type MutationDeleteCategoriesResolver<R = Category[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationDeleteCategoriesArgs>;
  export interface MutationDeleteCategoriesArgs {
    
    categoryIds: string[];
  }


  export type MutationDeleteEntriesResolver<R = Entry[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationDeleteEntriesArgs>;
  export interface MutationDeleteEntriesArgs {
    
    entryIds: string[];
  }


  export type MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver<R = CloudinaryMediaWidgetAuthenticationToken, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type MutationGenerateCloudinarySignatureResolver<R = string, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationGenerateCloudinarySignatureArgs>;
  export interface MutationGenerateCloudinarySignatureArgs {
    
    paramsToSign: Json;
  }


  export type MutationSetCategoryActivationStatusesResolver<R = Category[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationSetCategoryActivationStatusesArgs>;
  export interface MutationSetCategoryActivationStatusesArgs {
    
    categoryIds: string[];
    
    activatedStatuses: boolean[];
  }


  export type MutationUpdateCategoryResolver<R = Category, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationUpdateCategoryArgs>;
  export interface MutationUpdateCategoryArgs {
    
    categoryId: string;
    
    update: CategoryUpdateRequest;
  }


  export type MutationUpdateEntryResolver<R = Entry, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationUpdateEntryArgs>;
  export interface MutationUpdateEntryArgs {
    
    entryId: string;
    
    update: EntryUpdateRequest;
  }


  export type MutationUpdateIndexCardsResolver<R = IndexCard[], Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationUpdateIndexCardsArgs>;
  export interface MutationUpdateIndexCardsArgs {
    
    request: UpdateIndexCardsRequest[];
  }


  export type MutationUpdateIndexPageResolver<R = IndexPageConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationUpdateIndexPageArgs>;
  export interface MutationUpdateIndexPageArgs {
    
    request: IndexPageUpdateRequest;
  }


  export type MutationUpdateLogoUrlResolver<R = LogoConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationUpdateLogoUrlArgs>;
  export interface MutationUpdateLogoUrlArgs {
    
    logoUrl: string;
  }

  
/** Authentication parameters for Cloudinary Media Library widget. */
  export interface CloudinaryMediaWidgetAuthenticationTokenResolvers<Context = ApolloContext, TypeParent = CloudinaryMediaWidgetAuthenticationToken> {
    
    cloud_name?: CloudinaryMediaWidgetAuthenticationTokenCloudNameResolver<string, TypeParent, Context>;
    
    api_key?: CloudinaryMediaWidgetAuthenticationTokenApiKeyResolver<string, TypeParent, Context>;
    
    username?: CloudinaryMediaWidgetAuthenticationTokenUsernameResolver<string, TypeParent, Context>;
    
    timestamp?: CloudinaryMediaWidgetAuthenticationTokenTimestampResolver<string, TypeParent, Context>;
    
    signature?: CloudinaryMediaWidgetAuthenticationTokenSignatureResolver<string, TypeParent, Context>;
  }


  export type CloudinaryMediaWidgetAuthenticationTokenCloudNameResolver<R = string, Parent = CloudinaryMediaWidgetAuthenticationToken, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type CloudinaryMediaWidgetAuthenticationTokenApiKeyResolver<R = string, Parent = CloudinaryMediaWidgetAuthenticationToken, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type CloudinaryMediaWidgetAuthenticationTokenUsernameResolver<R = string, Parent = CloudinaryMediaWidgetAuthenticationToken, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type CloudinaryMediaWidgetAuthenticationTokenTimestampResolver<R = string, Parent = CloudinaryMediaWidgetAuthenticationToken, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type CloudinaryMediaWidgetAuthenticationTokenSignatureResolver<R = string, Parent = CloudinaryMediaWidgetAuthenticationToken, Context = ApolloContext> = Resolver<R, Parent, Context>;  



/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<Result, SkipDirectiveArgs, ApolloContext>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<Result, IncludeDirectiveArgs, ApolloContext>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<Result, DeprecatedDirectiveArgs, ApolloContext>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason: string;
}


export interface LocalizedStringScalarConfig extends GraphQLScalarTypeConfig<LocalizedString, any> {
  name: 'LocalizedString'
}
export interface JsonScalarConfig extends GraphQLScalarTypeConfig<Json, any> {
  name: 'Json'
}

export interface IResolvers {
    Query?: QueryResolvers;
    Category?: CategoryResolvers;
    Entry?: EntryResolvers;
    HtmlConfig?: HtmlConfigResolvers;
    IndexCard?: IndexCardResolvers;
    IndexCardCategory?: IndexCardCategoryResolvers;
    IndexPageConfig?: IndexPageConfigResolvers;
    IndexPageAboutImage?: IndexPageAboutImageResolvers;
    LogoConfig?: LogoConfigResolvers;
    IndexYouTubeVideo?: IndexYouTubeVideoResolvers;
    Mutation?: MutationResolvers;
    CloudinaryMediaWidgetAuthenticationToken?: CloudinaryMediaWidgetAuthenticationTokenResolvers;
    LocalizedString?: GraphQLScalarType;
    Json?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
}