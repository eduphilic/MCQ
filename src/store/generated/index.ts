// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Context } from "../Context";
import { HtmlConfig } from "../../models/HtmlConfig";
import { IndexAboutImage } from "../../models/IndexAboutImage";
import { IndexConfig } from "../../models/IndexConfig";
import { Localization } from "../../models/Localization";
import { LocalizedString } from "../../models/LocalizedString";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export type LanguageResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => LocalizedString[] | Promise<LocalizedString[]>;

  export type HtmlconfigResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => HtmlConfig | Promise<HtmlConfig>;

  export type IndexconfigResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => IndexConfig | Promise<IndexConfig>;

  export type LocalizationResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Localization | Promise<Localization>;

  export interface Type {
    language: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => LocalizedString[] | Promise<LocalizedString[]>;

    htmlConfig: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => HtmlConfig | Promise<HtmlConfig>;

    indexConfig: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => IndexConfig | Promise<IndexConfig>;

    localization: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Localization | Promise<Localization>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsSetlocalizationlanguage {
    language: string;
  }

  export type SetlocalizationlanguageResolver = (
    parent: {},
    args: ArgsSetlocalizationlanguage,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export interface Type {
    setLocalizationLanguage: (
      parent: {},
      args: ArgsSetlocalizationlanguage,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;
  }
}

export namespace IndexConfigResolvers {
  export const defaultResolvers = {
    heroBackgroundImageUrl: (parent: IndexConfig) =>
      parent.heroBackgroundImageUrl,
    heroBackgroundAlpha: (parent: IndexConfig) => parent.heroBackgroundAlpha,
    heroPrimaryTextEn: (parent: IndexConfig) => parent.heroPrimaryTextEn,
    heroPrimaryTextHi: (parent: IndexConfig) => parent.heroPrimaryTextHi,
    heroFeaturesEn: (parent: IndexConfig) => parent.heroFeaturesEn,
    heroFeaturesHi: (parent: IndexConfig) => parent.heroFeaturesHi,
    aboutTitleEn: (parent: IndexConfig) => parent.aboutTitleEn,
    aboutTitleHi: (parent: IndexConfig) => parent.aboutTitleHi,
    aboutTextEn: (parent: IndexConfig) => parent.aboutTextEn,
    aboutTextHi: (parent: IndexConfig) => parent.aboutTextHi,
    aboutImages: (parent: IndexConfig) => parent.aboutImages,
  };

  export type HerobackgroundimageurlResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type HerobackgroundalphaResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => number | Promise<number>;

  export type HeroprimarytextenResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type HeroprimarytexthiResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type HerofeaturesenResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string[] | Promise<string[]>;

  export type HerofeatureshiResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string[] | Promise<string[]>;

  export type AbouttitleenResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type AbouttitlehiResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type AbouttextenResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type AbouttexthiResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type AboutimagesResolver = (
    parent: IndexConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => IndexAboutImage[] | Promise<IndexAboutImage[]>;

  export interface Type {
    heroBackgroundImageUrl: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    heroBackgroundAlpha: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => number | Promise<number>;

    heroPrimaryTextEn: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    heroPrimaryTextHi: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    heroFeaturesEn: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string[] | Promise<string[]>;

    heroFeaturesHi: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string[] | Promise<string[]>;

    aboutTitleEn: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    aboutTitleHi: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    aboutTextEn: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    aboutTextHi: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    aboutImages: (
      parent: IndexConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => IndexAboutImage[] | Promise<IndexAboutImage[]>;
  }
}

export namespace IndexAboutImageResolvers {
  export const defaultResolvers = {
    imageUrl: (parent: IndexAboutImage) => parent.imageUrl,
    titleEn: (parent: IndexAboutImage) => parent.titleEn,
    titleHi: (parent: IndexAboutImage) => parent.titleHi,
    textEn: (parent: IndexAboutImage) => parent.textEn,
    textHi: (parent: IndexAboutImage) => parent.textHi,
  };

  export type ImageurlResolver = (
    parent: IndexAboutImage,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type TitleenResolver = (
    parent: IndexAboutImage,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type TitlehiResolver = (
    parent: IndexAboutImage,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type TextenResolver = (
    parent: IndexAboutImage,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type TexthiResolver = (
    parent: IndexAboutImage,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export interface Type {
    imageUrl: (
      parent: IndexAboutImage,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    titleEn: (
      parent: IndexAboutImage,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    titleHi: (
      parent: IndexAboutImage,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    textEn: (
      parent: IndexAboutImage,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    textHi: (
      parent: IndexAboutImage,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;
  }
}

export namespace HtmlConfigResolvers {
  export const defaultResolvers = {
    googleAnalyticsId: (parent: HtmlConfig) =>
      parent.googleAnalyticsId === undefined ? null : parent.googleAnalyticsId,
    metaKeywords: (parent: HtmlConfig) =>
      parent.metaKeywords === undefined ? null : parent.metaKeywords,
    metaDescription: (parent: HtmlConfig) =>
      parent.metaDescription === undefined ? null : parent.metaDescription,
    metaAuthor: (parent: HtmlConfig) =>
      parent.metaAuthor === undefined ? null : parent.metaAuthor,
    metaAbstract: (parent: HtmlConfig) =>
      parent.metaAbstract === undefined ? null : parent.metaAbstract,
    metaCopyright: (parent: HtmlConfig) =>
      parent.metaCopyright === undefined ? null : parent.metaCopyright,
  };

  export type GoogleanalyticsidResolver = (
    parent: HtmlConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export type MetakeywordsResolver = (
    parent: HtmlConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export type MetadescriptionResolver = (
    parent: HtmlConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export type MetaauthorResolver = (
    parent: HtmlConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export type MetaabstractResolver = (
    parent: HtmlConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export type MetacopyrightResolver = (
    parent: HtmlConfig,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export interface Type {
    googleAnalyticsId: (
      parent: HtmlConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;

    metaKeywords: (
      parent: HtmlConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;

    metaDescription: (
      parent: HtmlConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;

    metaAuthor: (
      parent: HtmlConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;

    metaAbstract: (
      parent: HtmlConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;

    metaCopyright: (
      parent: HtmlConfig,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;
  }
}

export namespace LocalizedStringResolvers {
  export const defaultResolvers = {
    key: (parent: LocalizedString) => parent.key,
    en: (parent: LocalizedString) => parent.en,
    hi: (parent: LocalizedString) =>
      parent.hi === undefined ? null : parent.hi,
  };

  export type KeyResolver = (
    parent: LocalizedString,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type EnResolver = (
    parent: LocalizedString,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type HiResolver = (
    parent: LocalizedString,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export interface Type {
    key: (
      parent: LocalizedString,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    en: (
      parent: LocalizedString,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    hi: (
      parent: LocalizedString,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;
  }
}

export namespace LocalizationResolvers {
  export const defaultResolvers = {
    localizationLanguage: (parent: Localization) => parent.localizationLanguage,
  };

  export type LocalizationlanguageResolver = (
    parent: Localization,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export interface Type {
    localizationLanguage: (
      parent: Localization,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Mutation: MutationResolvers.Type;
  IndexConfig: IndexConfigResolvers.Type;
  IndexAboutImage: IndexAboutImageResolvers.Type;
  HtmlConfig: HtmlConfigResolvers.Type;
  LocalizedString: LocalizedStringResolvers.Type;
  Localization: LocalizationResolvers.Type;
}
