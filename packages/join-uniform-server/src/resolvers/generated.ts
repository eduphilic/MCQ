// AUTO-GENERATED - DO NOT EDIT
// SCRIPT-> yarn graphql
import * as models from "../models";
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



import { GraphQLResolveInfo, GraphQLScalarTypeConfig } from 'graphql';


import { ApolloContext } from '../ApolloContext';

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

type Maybe<T> = T | null | undefined;

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
  }


  export type QueryHtmlConfigResolver<R = HtmlConfig, Parent = {}, Context = ApolloContext> = Resolver<R, Parent, Context>;  
/** Configuration for the html document sent in response to all requests. */
  export interface HtmlConfigResolvers<Context = ApolloContext, TypeParent = HtmlConfig> {
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


  export type HtmlConfigGoogleAnalyticsIdResolver<R = string | null, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaKeywordsResolver<R = string | null, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaDescriptionResolver<R = string | null, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaAuthorResolver<R = string | null, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaAbstractResolver<R = string | null, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigMetaCopyrightResolver<R = string | null, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;
  export type HtmlConfigLandingFooterResolver<R = string | null, Parent = HtmlConfig, Context = ApolloContext> = Resolver<R, Parent, Context>;  



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
  reason?: string | null;
}


