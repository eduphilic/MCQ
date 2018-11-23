// AUTO-GENERATED - DO NOT EDIT
// SCRIPT-> yarn graphql
import { models } from "@join-uniform/graphql";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export enum LocalizationLanguage {
  ENGLISH = "ENGLISH",
  HINDI = "HINDI",
}

export enum LoginRequestResult {
  VALID = "VALID",
  INVALID = "INVALID",
}

/** Represents a localized string.The Hindi field is optional.Fields:- key: String!- en: String!- hi: String */
export type LocalizedString = models.LocalizedString;

/** JSON scalar type.https://github.com/taion/graphql-type-json */
export type Json = any;



// ====================================================
// Scalars
// ====================================================







// ====================================================
// Types
// ====================================================



export interface Query {
  
  htmlConfig: HtmlConfig;
  
  indexPageConfig: IndexPageConfig;
  
  adminLoginPageConfig: AdminLoginPageConfig;
  
  session?: UserRole | null;
  
  sessionFormConfig: SessionFormConfig;
  
  language: LocalizationLanguage;
  
  logoImageConfig: LogoImageConfig;
  
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
  /** Landing footer text. */
  landingFooter?: string | null;
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

/** Hero text for the admin login page. */
export interface AdminLoginPageConfig {
  
  heroPrimaryText: LocalizedString;
  
  heroSecondaryText: LocalizedString;
}

/** Configuration for login/signup forms. */
export interface SessionFormConfig {
  
  formTitleUserSignIn: LocalizedString;
  
  formTitleUserSignUp: LocalizedString;
  
  formTitleAdminSignIn: LocalizedString;
  
  fullNameFieldPlaceholder: LocalizedString;
  
  phoneNumberFieldPlaceholder: LocalizedString;
  
  passwordFieldPlaceholder: LocalizedString;
  
  passwordVerifyFieldPlaceholder: LocalizedString;
  
  emailAddressFieldPlaceholder: LocalizedString;
  
  submitButtonLabel: LocalizedString;
  
  termsConditionsCheckboxLabel: LocalizedString;
  
  passwordResetLinkLabel: LocalizedString;
}


export interface LogoImageConfig {
  
  url?: string | null;
}


export interface Mutation {
  
  login: LoginRequestResult;
  
  setLanguage: LocalizationLanguage;
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

export interface LoginMutationArgs {
  
  username: string;
  
  password: string;
}
export interface SetLanguageMutationArgs {
  
  language: LocalizationLanguage;
}
export interface GenerateCloudinarySignatureMutationArgs {
  
  paramsToSign: Json;
}


import { GraphQLResolveInfo } from 'graphql';




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


  export interface QueryResolvers<Context = {}, TypeParent = {}> {
    
    htmlConfig?: QueryHtmlConfigResolver<HtmlConfig, TypeParent, Context>;
    
    indexPageConfig?: QueryIndexPageConfigResolver<IndexPageConfig, TypeParent, Context>;
    
    adminLoginPageConfig?: QueryAdminLoginPageConfigResolver<AdminLoginPageConfig, TypeParent, Context>;
    
    session?: QuerySessionResolver<UserRole | null, TypeParent, Context>;
    
    sessionFormConfig?: QuerySessionFormConfigResolver<SessionFormConfig, TypeParent, Context>;
    
    language?: QueryLanguageResolver<LocalizationLanguage, TypeParent, Context>;
    
    logoImageConfig?: QueryLogoImageConfigResolver<LogoImageConfig, TypeParent, Context>;
    
    cloudinaryCloudName?: QueryCloudinaryCloudNameResolver<string, TypeParent, Context>;
    
    cloudinaryApiKey?: QueryCloudinaryApiKeyResolver<string, TypeParent, Context>;
  }


  export type QueryHtmlConfigResolver<R = HtmlConfig, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;
  export type QueryIndexPageConfigResolver<R = IndexPageConfig, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;
  export type QueryAdminLoginPageConfigResolver<R = AdminLoginPageConfig, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;
  export type QuerySessionResolver<R = UserRole | null, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;
  export type QuerySessionFormConfigResolver<R = SessionFormConfig, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;
  export type QueryLanguageResolver<R = LocalizationLanguage, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;
  export type QueryLogoImageConfigResolver<R = LogoImageConfig, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;
  export type QueryCloudinaryCloudNameResolver<R = string, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;
  export type QueryCloudinaryApiKeyResolver<R = string, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;  
/** Configuration for the html document sent in response to all requests. */
  export interface HtmlConfigResolvers<Context = {}, TypeParent = HtmlConfig> {
    /** Google Analytics ID. */
    googleAnalyticsId?: HtmlConfigGoogleAnalyticsIdResolver<string | null, TypeParent, Context>;
    /** Meta "keywords" tag. */
    metaKeywords?: HtmlConfigMetaKeywordsResolver<string | null, TypeParent, Context>;
    /** Meta "description" tag. */
    metaDescription?: HtmlConfigMetaDescriptionResolver<string | null, TypeParent, Context>;
    /** Meta "author" tag. */
    metaAuthor?: HtmlConfigMetaAuthorResolver<string | null, TypeParent, Context>;
    /** Meta "abstract" tag. */
    metaAbstract?: HtmlConfigMetaAbstractResolver<string | null, TypeParent, Context>;
    /** Meta "copyright" tag. */
    metaCopyright?: HtmlConfigMetaCopyrightResolver<string | null, TypeParent, Context>;
    /** Landing footer text. */
    landingFooter?: HtmlConfigLandingFooterResolver<string | null, TypeParent, Context>;
  }


  export type HtmlConfigGoogleAnalyticsIdResolver<R = string | null, Parent = HtmlConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaKeywordsResolver<R = string | null, Parent = HtmlConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaDescriptionResolver<R = string | null, Parent = HtmlConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaAuthorResolver<R = string | null, Parent = HtmlConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaAbstractResolver<R = string | null, Parent = HtmlConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaCopyrightResolver<R = string | null, Parent = HtmlConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type HtmlConfigLandingFooterResolver<R = string | null, Parent = HtmlConfig, Context = {}> = Resolver<R, Parent, Context>;  
/** Configuration for the landing page / index page. */
  export interface IndexPageConfigResolvers<Context = {}, TypeParent = IndexPageConfig> {
    /** The url to the hero image. */
    heroBackgroundImageUrl?: IndexPageConfigHeroBackgroundImageUrlResolver<string, TypeParent, Context>;
    /** The transparency of the hero image. */
    heroBackgroundAlpha?: IndexPageConfigHeroBackgroundAlphaResolver<number, TypeParent, Context>;
    /** The primary hero text (large top text). */
    heroPrimaryText?: IndexPageConfigHeroPrimaryTextResolver<LocalizedString, TypeParent, Context>;
    /** List of features below the primary hero text. */
    heroFeatures?: IndexPageConfigHeroFeaturesResolver<LocalizedString[], TypeParent, Context>;
    /** Text in the green section below the hero section. */
    heroFooterText?: IndexPageConfigHeroFooterTextResolver<LocalizedString, TypeParent, Context>;
    /** About section title. */
    aboutTitle?: IndexPageConfigAboutTitleResolver<LocalizedString, TypeParent, Context>;
    /** Text below the about title. */
    aboutText?: IndexPageConfigAboutTextResolver<LocalizedString, TypeParent, Context>;
    /** Images in the about section. */
    aboutImages?: IndexPageConfigAboutImagesResolver<IndexPageAboutImage[], TypeParent, Context>;
  }


  export type IndexPageConfigHeroBackgroundImageUrlResolver<R = string, Parent = IndexPageConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroBackgroundAlphaResolver<R = number, Parent = IndexPageConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroPrimaryTextResolver<R = LocalizedString, Parent = IndexPageConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroFeaturesResolver<R = LocalizedString[], Parent = IndexPageConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type IndexPageConfigHeroFooterTextResolver<R = LocalizedString, Parent = IndexPageConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type IndexPageConfigAboutTitleResolver<R = LocalizedString, Parent = IndexPageConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type IndexPageConfigAboutTextResolver<R = LocalizedString, Parent = IndexPageConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type IndexPageConfigAboutImagesResolver<R = IndexPageAboutImage[], Parent = IndexPageConfig, Context = {}> = Resolver<R, Parent, Context>;  
/** Image and supporting text in index about section. */
  export interface IndexPageAboutImageResolvers<Context = {}, TypeParent = IndexPageAboutImage> {
    /** Image URL. */
    imageUrl?: IndexPageAboutImageImageUrlResolver<string, TypeParent, Context>;
    /** Large text below image. */
    title?: IndexPageAboutImageTitleResolver<LocalizedString, TypeParent, Context>;
    /** Small text below image. */
    text?: IndexPageAboutImageTextResolver<LocalizedString, TypeParent, Context>;
  }


  export type IndexPageAboutImageImageUrlResolver<R = string, Parent = IndexPageAboutImage, Context = {}> = Resolver<R, Parent, Context>;
  export type IndexPageAboutImageTitleResolver<R = LocalizedString, Parent = IndexPageAboutImage, Context = {}> = Resolver<R, Parent, Context>;
  export type IndexPageAboutImageTextResolver<R = LocalizedString, Parent = IndexPageAboutImage, Context = {}> = Resolver<R, Parent, Context>;  
/** Hero text for the admin login page. */
  export interface AdminLoginPageConfigResolvers<Context = {}, TypeParent = AdminLoginPageConfig> {
    
    heroPrimaryText?: AdminLoginPageConfigHeroPrimaryTextResolver<LocalizedString, TypeParent, Context>;
    
    heroSecondaryText?: AdminLoginPageConfigHeroSecondaryTextResolver<LocalizedString, TypeParent, Context>;
  }


  export type AdminLoginPageConfigHeroPrimaryTextResolver<R = LocalizedString, Parent = AdminLoginPageConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type AdminLoginPageConfigHeroSecondaryTextResolver<R = LocalizedString, Parent = AdminLoginPageConfig, Context = {}> = Resolver<R, Parent, Context>;  
/** Configuration for login/signup forms. */
  export interface SessionFormConfigResolvers<Context = {}, TypeParent = SessionFormConfig> {
    
    formTitleUserSignIn?: SessionFormConfigFormTitleUserSignInResolver<LocalizedString, TypeParent, Context>;
    
    formTitleUserSignUp?: SessionFormConfigFormTitleUserSignUpResolver<LocalizedString, TypeParent, Context>;
    
    formTitleAdminSignIn?: SessionFormConfigFormTitleAdminSignInResolver<LocalizedString, TypeParent, Context>;
    
    fullNameFieldPlaceholder?: SessionFormConfigFullNameFieldPlaceholderResolver<LocalizedString, TypeParent, Context>;
    
    phoneNumberFieldPlaceholder?: SessionFormConfigPhoneNumberFieldPlaceholderResolver<LocalizedString, TypeParent, Context>;
    
    passwordFieldPlaceholder?: SessionFormConfigPasswordFieldPlaceholderResolver<LocalizedString, TypeParent, Context>;
    
    passwordVerifyFieldPlaceholder?: SessionFormConfigPasswordVerifyFieldPlaceholderResolver<LocalizedString, TypeParent, Context>;
    
    emailAddressFieldPlaceholder?: SessionFormConfigEmailAddressFieldPlaceholderResolver<LocalizedString, TypeParent, Context>;
    
    submitButtonLabel?: SessionFormConfigSubmitButtonLabelResolver<LocalizedString, TypeParent, Context>;
    
    termsConditionsCheckboxLabel?: SessionFormConfigTermsConditionsCheckboxLabelResolver<LocalizedString, TypeParent, Context>;
    
    passwordResetLinkLabel?: SessionFormConfigPasswordResetLinkLabelResolver<LocalizedString, TypeParent, Context>;
  }


  export type SessionFormConfigFormTitleUserSignInResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type SessionFormConfigFormTitleUserSignUpResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type SessionFormConfigFormTitleAdminSignInResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type SessionFormConfigFullNameFieldPlaceholderResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type SessionFormConfigPhoneNumberFieldPlaceholderResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type SessionFormConfigPasswordFieldPlaceholderResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type SessionFormConfigPasswordVerifyFieldPlaceholderResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type SessionFormConfigEmailAddressFieldPlaceholderResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type SessionFormConfigSubmitButtonLabelResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type SessionFormConfigTermsConditionsCheckboxLabelResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;
  export type SessionFormConfigPasswordResetLinkLabelResolver<R = LocalizedString, Parent = SessionFormConfig, Context = {}> = Resolver<R, Parent, Context>;  

  export interface LogoImageConfigResolvers<Context = {}, TypeParent = LogoImageConfig> {
    
    url?: LogoImageConfigUrlResolver<string | null, TypeParent, Context>;
  }


  export type LogoImageConfigUrlResolver<R = string | null, Parent = LogoImageConfig, Context = {}> = Resolver<R, Parent, Context>;  

  export interface MutationResolvers<Context = {}, TypeParent = {}> {
    
    login?: MutationLoginResolver<LoginRequestResult, TypeParent, Context>;
    
    setLanguage?: MutationSetLanguageResolver<LocalizationLanguage, TypeParent, Context>;
    /** Signs the parameters passed by the Cloudinary Upload Widget.See: https://cloudinary.com/documentation/upload_widget#signed_uploads */
    generateCloudinarySignature?: MutationGenerateCloudinarySignatureResolver<string, TypeParent, Context>;
    /** Generates the authentication parameters required for creating a session foruse with the Cloudinary Media Library widget. */
    generateCloudinaryMediaLibraryAuthenticationToken?: MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver<CloudinaryMediaWidgetAuthenticationToken, TypeParent, Context>;
  }


  export type MutationLoginResolver<R = LoginRequestResult, Parent = {}, Context = {}> = Resolver<R, Parent, Context, MutationLoginArgs>;
  export interface MutationLoginArgs {
    
    username: string;
    
    password: string;
  }


  export type MutationSetLanguageResolver<R = LocalizationLanguage, Parent = {}, Context = {}> = Resolver<R, Parent, Context, MutationSetLanguageArgs>;
  export interface MutationSetLanguageArgs {
    
    language: LocalizationLanguage;
  }


  export type MutationGenerateCloudinarySignatureResolver<R = string, Parent = {}, Context = {}> = Resolver<R, Parent, Context, MutationGenerateCloudinarySignatureArgs>;
  export interface MutationGenerateCloudinarySignatureArgs {
    
    paramsToSign: Json;
  }


  export type MutationGenerateCloudinaryMediaLibraryAuthenticationTokenResolver<R = CloudinaryMediaWidgetAuthenticationToken, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;  
/** Authentication parameters for Cloudinary Media Library widget. */
  export interface CloudinaryMediaWidgetAuthenticationTokenResolvers<Context = {}, TypeParent = CloudinaryMediaWidgetAuthenticationToken> {
    
    cloud_name?: CloudinaryMediaWidgetAuthenticationTokenCloudNameResolver<string, TypeParent, Context>;
    
    api_key?: CloudinaryMediaWidgetAuthenticationTokenApiKeyResolver<string, TypeParent, Context>;
    
    username?: CloudinaryMediaWidgetAuthenticationTokenUsernameResolver<string, TypeParent, Context>;
    
    timestamp?: CloudinaryMediaWidgetAuthenticationTokenTimestampResolver<string, TypeParent, Context>;
    
    signature?: CloudinaryMediaWidgetAuthenticationTokenSignatureResolver<string, TypeParent, Context>;
  }


  export type CloudinaryMediaWidgetAuthenticationTokenCloudNameResolver<R = string, Parent = CloudinaryMediaWidgetAuthenticationToken, Context = {}> = Resolver<R, Parent, Context>;
  export type CloudinaryMediaWidgetAuthenticationTokenApiKeyResolver<R = string, Parent = CloudinaryMediaWidgetAuthenticationToken, Context = {}> = Resolver<R, Parent, Context>;
  export type CloudinaryMediaWidgetAuthenticationTokenUsernameResolver<R = string, Parent = CloudinaryMediaWidgetAuthenticationToken, Context = {}> = Resolver<R, Parent, Context>;
  export type CloudinaryMediaWidgetAuthenticationTokenTimestampResolver<R = string, Parent = CloudinaryMediaWidgetAuthenticationToken, Context = {}> = Resolver<R, Parent, Context>;
  export type CloudinaryMediaWidgetAuthenticationTokenSignatureResolver<R = string, Parent = CloudinaryMediaWidgetAuthenticationToken, Context = {}> = Resolver<R, Parent, Context>;  
