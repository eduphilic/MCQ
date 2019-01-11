// This is an automatically generated file.
// DO NOT MODIFY
// Use the command: "yarn graphql" to regenerate.
import { models } from "@join-uniform/common";
export type Maybe<T> = T | null;


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

export interface InputIndexPageUpdate {
  
  readonly heroBackgroundImageUrl: string;
  
  readonly heroBackgroundAlpha: number;
  
  readonly heroPrimaryTextEnglish: string;
  
  readonly heroPrimaryTextHindi: Maybe<string>;
  
  readonly heroFeatures: ReadonlyArray<models.LocalizedString>;
  
  readonly aboutTitleEnglish: string;
  
  readonly aboutTitleHindi: Maybe<string>;
  
  readonly aboutTextEnglish: string;
  
  readonly aboutTextHindi: Maybe<string>;
  
  readonly aboutImages: ReadonlyArray<AboutImageUpdate>;
  
  readonly indexCards: ReadonlyArray<IndexCardUpdate>;
}

export interface AboutImageUpdate {
  
  readonly imageUrl: string;
  
  readonly title: models.LocalizedString;
  
  readonly text: models.LocalizedString;
}

export interface IndexCardUpdate {
  
  readonly entryId: string;
  
  readonly colorBlock: string;
  
  readonly colorCategoryBackground: string;
  
  readonly colorLogoBackground: string;
  
  readonly colorTitle: string;
  
  readonly categories: ReadonlyArray<IndexCardCategoryUpdate>;
}

export interface IndexCardCategoryUpdate {
  
  readonly categoryId: string;
  
  readonly visible: boolean;
}
/** Supported localization languages. */
export enum Language {
  English = "English",
  Hindi = "Hindi",
}

/** Represents a localized string. The Hindi field is optional. Fields: - key: String! - en: String! - hi: String */
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
  
  readonly htmlConfig: HtmlConfig;
  
  readonly logoConfig: LogoConfig;
  
  readonly indexPageConfig: IndexPageConfig;
  
  readonly translation: Translation;
  
  readonly entry: Maybe<Entry>;
  
  readonly entries: ReadonlyArray<Entry>;
  
  readonly entryCategories: ReadonlyArray<Category>;
  
  readonly category: Maybe<Category>;
  
  readonly indexCards: ReadonlyArray<IndexCard>;
  
  readonly youtubeVideos: ReadonlyArray<IndexYouTubeVideo>;
  
  readonly cloudinaryCloudName: string;
  
  readonly cloudinaryApiKey: string;
}

/** Configuration for the html document sent in response to all requests. */
export interface HtmlConfig {
  /** Google Analytics ID. */
  readonly googleAnalyticsId: Maybe<string>;
  /** Meta "keywords" tag. */
  readonly metaKeywords: Maybe<string>;
  /** Meta "description" tag. */
  readonly metaDescription: Maybe<string>;
  /** Meta "author" tag. */
  readonly metaAuthor: Maybe<string>;
  /** Meta "abstract" tag. */
  readonly metaAbstract: Maybe<string>;
  /** Meta "copyright" tag. */
  readonly metaCopyright: Maybe<string>;
}

/** Logo image configuration. */
export interface LogoConfig {
  
  readonly id: string;
  /** Url of logo image. */
  readonly url: string;
}

/** Configuration for the landing page / index page. */
export interface IndexPageConfig {
  /** Always "index-page-config". */
  readonly id: string;
  /** The url to the hero image. */
  readonly heroBackgroundImageUrl: string;
  /** The transparency of the hero image. */
  readonly heroBackgroundAlpha: number;
  /** The primary hero text (large top text). */
  readonly heroPrimaryText: models.LocalizedString;
  /** List of features below the primary hero text. */
  readonly heroFeatures: ReadonlyArray<models.LocalizedString>;
  /** Text in the green section below the hero section. */
  readonly heroFooterText: models.LocalizedString;
  /** About section title. */
  readonly aboutTitle: models.LocalizedString;
  /** Text below the about title. */
  readonly aboutText: models.LocalizedString;
  /** Images in the about section. */
  readonly aboutImages: ReadonlyArray<IndexPageAboutImage>;
}

/** Image and supporting text in index about section. */
export interface IndexPageAboutImage {
  
  readonly id: string;
  /** Image URL. */
  readonly imageUrl: string;
  /** Large text below image. */
  readonly title: models.LocalizedString;
  /** Small text below image. */
  readonly text: models.LocalizedString;
}

/** Represents a military service branch (Entry). */
export interface Entry {
  
  readonly id: string;
  
  readonly name: string;
  
  readonly logoUrl: string;
  
  readonly description: string;
  
  readonly categories: ReadonlyArray<Category>;
}

/** Represents an Entry Category. */
export interface Category {
  
  readonly id: string;
  
  readonly name: string;
  
  readonly education: string;
  
  readonly pricePerPaperRs: number;
  
  readonly activated: boolean;
}

/** One of the Index Cards on main landing page. */
export interface IndexCard {
  /** Same as the id for the Entry the IndexCard represents. */
  readonly id: string;
  
  readonly title: string;
  
  readonly categories: ReadonlyArray<TypeIndexCardCategory>;
  
  readonly entryLogoUrl: string;
  
  readonly colorBlock: string;
  
  readonly colorCategoryBackground: string;
  
  readonly colorLogoBackground: string;
  
  readonly colorTitle: string;
}


export interface TypeIndexCardCategory {
  /** Id of the category. */
  readonly id: string;
  
  readonly title: string;
  
  readonly visible: boolean;
}


export interface IndexYouTubeVideo {
  /** Will contain the Entry ID that the video corresponds to assuming that the Entry has not been removed. */
  readonly entryId: Maybe<string>;
  /** Order of appearance. */
  readonly position: number;
  
  readonly youtubeUrl: string;
  
  readonly title: models.LocalizedString;
}


export interface Mutation {
  
  readonly createCategoryExistingEntry: Category;
  
  readonly createCategoryNewEntry: Entry;
  
  readonly updateEntry: Entry;
  
  readonly deleteEntries: Maybe<boolean>;
  
  readonly updateCategory: Category;
  
  readonly updateLogoUrl: LogoConfig;
  /** Deletes Categories. It removes both the Category database entry and the Category's id from the corresponding Entry objects in the database. It returns the list of remaining Categories. */
  readonly deleteCategories: ReadonlyArray<Category>;
  /** Sets the activation status for the specified categories. The number of ids needs to match the number of booleans. Returns the updated Categories. */
  readonly setCategoryActivationStatuses: ReadonlyArray<Category>;
  
  readonly updateIndexPage: IndexPageConfig;
  /** Signs the parameters passed by the Cloudinary Upload Widget. See: https://cloudinary.com/documentation/upload_widget#signed_uploads */
  readonly generateCloudinarySignature: string;
  /** Generates the authentication parameters required for creating a session for use with the Cloudinary Media Library widget. */
  readonly generateCloudinaryMediaLibraryAuthenticationToken: CloudinaryMediaWidgetAuthenticationToken;
}

/** Authentication parameters for Cloudinary Media Library widget. */
export interface CloudinaryMediaWidgetAuthenticationToken {
  
  readonly cloud_name: string;
  
  readonly api_key: string;
  
  readonly username: string;
  
  readonly timestamp: string;
  
  readonly signature: string;
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
export interface DeleteEntriesMutationArgs {
  
  entryIds: ReadonlyArray<string>;
}
export interface UpdateCategoryMutationArgs {
  
  categoryId: string;
  
  update: CategoryUpdate;
}
export interface UpdateLogoUrlMutationArgs {
  
  logoUrl: string;
}
export interface DeleteCategoriesMutationArgs {
  
  categoryIds: ReadonlyArray<string>;
}
export interface SetCategoryActivationStatusesMutationArgs {
  
  categoryIds: ReadonlyArray<string>;
  
  activatedStatuses: ReadonlyArray<boolean>;
}
export interface UpdateIndexPageMutationArgs {
  
  request: InputIndexPageUpdate;
}
export interface GenerateCloudinarySignatureMutationArgs {
  
  paramsToSign: Json;
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
    
    htmlConfig?: QueryHtmlConfigResolver<HtmlConfig, TypeParent, Context>;
    
    logoConfig?: QueryLogoConfigResolver<LogoConfig, TypeParent, Context>;
    
    indexPageConfig?: QueryIndexPageConfigResolver<IndexPageConfig, TypeParent, Context>;
    
    translation?: QueryTranslationResolver<Translation, TypeParent, Context>;
    
    entry?: QueryEntryResolver<Maybe<Entry>, TypeParent, Context>;
    
    entries?: QueryEntriesResolver<ReadonlyArray<Entry>, TypeParent, Context>;
    
    entryCategories?: QueryEntryCategoriesResolver<ReadonlyArray<Category>, TypeParent, Context>;
    
    category?: QueryCategoryResolver<Maybe<Category>, TypeParent, Context>;
    
    indexCards?: QueryIndexCardsResolver<ReadonlyArray<IndexCard>, TypeParent, Context>;
    
    youtubeVideos?: QueryYoutubeVideosResolver<ReadonlyArray<IndexYouTubeVideo>, TypeParent, Context>;
    
    cloudinaryCloudName?: QueryCloudinaryCloudNameResolver<string, TypeParent, Context>;
    
    cloudinaryApiKey?: QueryCloudinaryApiKeyResolver<string, TypeParent, Context>;
  }


  export type QueryHtmlConfigResolver<R = HtmlConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryLogoConfigResolver<R = LogoConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryIndexPageConfigResolver<R = IndexPageConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryTranslationResolver<R = Translation, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, QueryTranslationArgs>;
  export interface QueryTranslationArgs {
    
    language: Language;
  }


  export type QueryEntryResolver<R = Maybe<Entry>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, QueryEntryArgs>;
  export interface QueryEntryArgs {
    
    entryId: string;
  }


  export type QueryEntriesResolver<R = ReadonlyArray<Entry>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryEntryCategoriesResolver<R = ReadonlyArray<Category>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, QueryEntryCategoriesArgs>;
  export interface QueryEntryCategoriesArgs {
    
    entryId: string;
  }


  export type QueryCategoryResolver<R = Maybe<Category>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, QueryCategoryArgs>;
  export interface QueryCategoryArgs {
    
    id: string;
  }


  export type QueryIndexCardsResolver<R = ReadonlyArray<IndexCard>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryYoutubeVideosResolver<R = ReadonlyArray<IndexYouTubeVideo>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryCloudinaryCloudNameResolver<R = string, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type QueryCloudinaryApiKeyResolver<R = string, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;  
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
/** Logo image configuration. */
  export interface LogoConfigResolvers<Context = ApolloContext, TypeParent = LogoConfig> {
    
    id?: LogoConfigIdResolver<string, TypeParent, Context>;
    /** Url of logo image. */
    url?: LogoConfigUrlResolver<string, TypeParent, Context>;
  }


  export type LogoConfigIdResolver<R = string, Parent = LogoConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type LogoConfigUrlResolver<R = string, Parent = LogoConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;  
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
    heroFeatures?: IndexPageConfigHeroFeaturesResolver<ReadonlyArray<models.LocalizedString>, TypeParent, Context>;
    /** Text in the green section below the hero section. */
    heroFooterText?: IndexPageConfigHeroFooterTextResolver<models.LocalizedString, TypeParent, Context>;
    /** About section title. */
    aboutTitle?: IndexPageConfigAboutTitleResolver<models.LocalizedString, TypeParent, Context>;
    /** Text below the about title. */
    aboutText?: IndexPageConfigAboutTextResolver<models.LocalizedString, TypeParent, Context>;
    /** Images in the about section. */
    aboutImages?: IndexPageConfigAboutImagesResolver<ReadonlyArray<IndexPageAboutImage>, TypeParent, Context>;
  }


  export type IndexPageConfigIdResolver<R = string, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroBackgroundImageUrlResolver<R = string, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroBackgroundAlphaResolver<R = number, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroPrimaryTextResolver<R = models.LocalizedString, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroFeaturesResolver<R = ReadonlyArray<models.LocalizedString>, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroFooterTextResolver<R = models.LocalizedString, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigAboutTitleResolver<R = models.LocalizedString, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigAboutTextResolver<R = models.LocalizedString, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexPageConfigAboutImagesResolver<R = ReadonlyArray<IndexPageAboutImage>, Parent = IndexPageConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;  
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
/** Represents a military service branch (Entry). */
  export interface EntryResolvers<Context = ApolloContext, TypeParent = Entry> {
    
    id?: EntryIdResolver<string, TypeParent, Context>;
    
    name?: EntryNameResolver<string, TypeParent, Context>;
    
    logoUrl?: EntryLogoUrlResolver<string, TypeParent, Context>;
    
    description?: EntryDescriptionResolver<string, TypeParent, Context>;
    
    categories?: EntryCategoriesResolver<ReadonlyArray<Category>, TypeParent, Context>;
  }


  export type EntryIdResolver<R = string, Parent = Entry, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type EntryNameResolver<R = string, Parent = Entry, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type EntryLogoUrlResolver<R = string, Parent = Entry, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type EntryDescriptionResolver<R = string, Parent = Entry, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type EntryCategoriesResolver<R = ReadonlyArray<Category>, Parent = Entry, Context = ApolloContext> = Resolver<R, Parent, Context>;  
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
/** One of the Index Cards on main landing page. */
  export interface IndexCardResolvers<Context = ApolloContext, TypeParent = IndexCard> {
    /** Same as the id for the Entry the IndexCard represents. */
    id?: IndexCardIdResolver<string, TypeParent, Context>;
    
    title?: IndexCardTitleResolver<string, TypeParent, Context>;
    
    categories?: IndexCardCategoriesResolver<ReadonlyArray<TypeIndexCardCategory>, TypeParent, Context>;
    
    entryLogoUrl?: IndexCardEntryLogoUrlResolver<string, TypeParent, Context>;
    
    colorBlock?: IndexCardColorBlockResolver<string, TypeParent, Context>;
    
    colorCategoryBackground?: IndexCardColorCategoryBackgroundResolver<string, TypeParent, Context>;
    
    colorLogoBackground?: IndexCardColorLogoBackgroundResolver<string, TypeParent, Context>;
    
    colorTitle?: IndexCardColorTitleResolver<string, TypeParent, Context>;
  }


  export type IndexCardIdResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardTitleResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardCategoriesResolver<R = ReadonlyArray<TypeIndexCardCategory>, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardEntryLogoUrlResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardColorBlockResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardColorCategoryBackgroundResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardColorLogoBackgroundResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type IndexCardColorTitleResolver<R = string, Parent = IndexCard, Context = ApolloContext> = Resolver<R, Parent, Context>;  

  export interface TypeIndexCardCategoryResolvers<Context = ApolloContext, TypeParent = TypeIndexCardCategory> {
    /** Id of the category. */
    id?: TypeIndexCardCategoryIdResolver<string, TypeParent, Context>;
    
    title?: TypeIndexCardCategoryTitleResolver<string, TypeParent, Context>;
    
    visible?: TypeIndexCardCategoryVisibleResolver<boolean, TypeParent, Context>;
  }


  export type TypeIndexCardCategoryIdResolver<R = string, Parent = TypeIndexCardCategory, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type TypeIndexCardCategoryTitleResolver<R = string, Parent = TypeIndexCardCategory, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type TypeIndexCardCategoryVisibleResolver<R = boolean, Parent = TypeIndexCardCategory, Context = ApolloContext> = Resolver<R, Parent, Context>;  

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
    
    createCategoryExistingEntry?: MutationCreateCategoryExistingEntryResolver<Category, TypeParent, Context>;
    
    createCategoryNewEntry?: MutationCreateCategoryNewEntryResolver<Entry, TypeParent, Context>;
    
    updateEntry?: MutationUpdateEntryResolver<Entry, TypeParent, Context>;
    
    deleteEntries?: MutationDeleteEntriesResolver<Maybe<boolean>, TypeParent, Context>;
    
    updateCategory?: MutationUpdateCategoryResolver<Category, TypeParent, Context>;
    
    updateLogoUrl?: MutationUpdateLogoUrlResolver<LogoConfig, TypeParent, Context>;
    /** Deletes Categories. It removes both the Category database entry and the Category's id from the corresponding Entry objects in the database. It returns the list of remaining Categories. */
    deleteCategories?: MutationDeleteCategoriesResolver<ReadonlyArray<Category>, TypeParent, Context>;
    /** Sets the activation status for the specified categories. The number of ids needs to match the number of booleans. Returns the updated Categories. */
    setCategoryActivationStatuses?: MutationSetCategoryActivationStatusesResolver<ReadonlyArray<Category>, TypeParent, Context>;
    
    updateIndexPage?: MutationUpdateIndexPageResolver<IndexPageConfig, TypeParent, Context>;
    /** Signs the parameters passed by the Cloudinary Upload Widget. See: https://cloudinary.com/documentation/upload_widget#signed_uploads */
    generateCloudinarySignature?: MutationGenerateCloudinarySignatureResolver<string, TypeParent, Context>;
    /** Generates the authentication parameters required for creating a session for use with the Cloudinary Media Library widget. */
    generateCloudinaryMediaLibraryAuthenticationToken?: MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver<CloudinaryMediaWidgetAuthenticationToken, TypeParent, Context>;
  }


  export type MutationCreateCategoryExistingEntryResolver<R = Category, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationCreateCategoryExistingEntryArgs>;
  export interface MutationCreateCategoryExistingEntryArgs {
    
    request: CategoryCreationRequestExistingEntry;
  }


  export type MutationCreateCategoryNewEntryResolver<R = Entry, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationCreateCategoryNewEntryArgs>;
  export interface MutationCreateCategoryNewEntryArgs {
    
    request: CategoryCreationRequestNewEntry;
  }


  export type MutationUpdateEntryResolver<R = Entry, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationUpdateEntryArgs>;
  export interface MutationUpdateEntryArgs {
    
    entryId: string;
    
    update: EntryUpdate;
  }


  export type MutationDeleteEntriesResolver<R = Maybe<boolean>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationDeleteEntriesArgs>;
  export interface MutationDeleteEntriesArgs {
    
    entryIds: ReadonlyArray<string>;
  }


  export type MutationUpdateCategoryResolver<R = Category, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationUpdateCategoryArgs>;
  export interface MutationUpdateCategoryArgs {
    
    categoryId: string;
    
    update: CategoryUpdate;
  }


  export type MutationUpdateLogoUrlResolver<R = LogoConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationUpdateLogoUrlArgs>;
  export interface MutationUpdateLogoUrlArgs {
    
    logoUrl: string;
  }


  export type MutationDeleteCategoriesResolver<R = ReadonlyArray<Category>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationDeleteCategoriesArgs>;
  export interface MutationDeleteCategoriesArgs {
    
    categoryIds: ReadonlyArray<string>;
  }


  export type MutationSetCategoryActivationStatusesResolver<R = ReadonlyArray<Category>, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationSetCategoryActivationStatusesArgs>;
  export interface MutationSetCategoryActivationStatusesArgs {
    
    categoryIds: ReadonlyArray<string>;
    
    activatedStatuses: ReadonlyArray<boolean>;
  }


  export type MutationUpdateIndexPageResolver<R = IndexPageConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationUpdateIndexPageArgs>;
  export interface MutationUpdateIndexPageArgs {
    
    request: InputIndexPageUpdate;
  }


  export type MutationGenerateCloudinarySignatureResolver<R = string, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context, MutationGenerateCloudinarySignatureArgs>;
  export interface MutationGenerateCloudinarySignatureArgs {
    
    paramsToSign: Json;
  }


  export type MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver<R = CloudinaryMediaWidgetAuthenticationToken, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;  
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
export interface TranslationScalarConfig extends GraphQLScalarTypeConfig<Translation, any> {
  name: 'Translation'
}
export interface JsonScalarConfig extends GraphQLScalarTypeConfig<Json, any> {
  name: 'Json'
}

export interface IResolvers {
    Query?: QueryResolvers;
    HtmlConfig?: HtmlConfigResolvers;
    LogoConfig?: LogoConfigResolvers;
    IndexPageConfig?: IndexPageConfigResolvers;
    IndexPageAboutImage?: IndexPageAboutImageResolvers;
    Entry?: EntryResolvers;
    Category?: CategoryResolvers;
    IndexCard?: IndexCardResolvers;
    TypeIndexCardCategory?: TypeIndexCardCategoryResolvers;
    IndexYouTubeVideo?: IndexYouTubeVideoResolvers;
    Mutation?: MutationResolvers;
    CloudinaryMediaWidgetAuthenticationToken?: CloudinaryMediaWidgetAuthenticationTokenResolvers;
    LocalizedString?: GraphQLScalarType;
    Translation?: GraphQLScalarType;
    Json?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
}