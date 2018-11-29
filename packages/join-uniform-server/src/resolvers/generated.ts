// AUTO-GENERATED - DO NOT EDIT
// SCRIPT-> yarn graphql
import { models } from "@join-uniform/app";
export { models };







// ====================================================
// Types
// ====================================================



export interface Query {
  
  htmlConfig: HtmlConfig;
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



// ====================================================
// Arguments
// ====================================================



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
  }


  export type QueryHtmlConfigResolver<R = HtmlConfig, Parent = {}, Context = {}> = Resolver<R, Parent, Context>;  
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
