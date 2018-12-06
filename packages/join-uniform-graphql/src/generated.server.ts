// AUTO-GENERATED - DO NOT EDIT
// SCRIPT-> yarn build
// @ts-ignore
import * as models from "./models";

// ====================================================
// Types
// ====================================================

export interface Query {
  htmlConfig: HtmlConfig;

  logoConfig: LogoConfig;
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

/** Logo image configuration. */
export interface LogoConfig {
  /** Url of logo image. */
  url: string;
}

// ====================================================
// Arguments
// ====================================================

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
  /** Landing footer text. */
  landingFooter?: HtmlConfigLandingFooterResolver<
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
export type HtmlConfigLandingFooterResolver<
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
