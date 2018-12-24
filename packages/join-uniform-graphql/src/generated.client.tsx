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

export interface InputIndexPageConfigUpdate {
  readonly logoUrl: string;

  readonly heroBackgroundImageUrl: string;

  readonly heroBackgroundAlpha: number;

  readonly heroPrimaryTextEnglish: string;

  readonly heroPrimaryTextHindi: string | null;

  readonly heroFeatures: ReadonlyArray<models.LocalizedString>;

  readonly aboutTitleEnglish: string;

  readonly aboutTitleHindi: string | null;

  readonly aboutTextEnglish: string;

  readonly aboutTextHindi: string | null;

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

/** Represents a localized string.The Hindi field is optional.Fields:- key: String!- en: String!- hi: String */
export type LocalizedString = models.LocalizedString;

/** A set of localized strings for a language. */
export type Translation = any;

export type Json = any;

// ====================================================
// Documents
// ====================================================

export type AdminLayoutDashboardContainerLogoUrlVariables = {};

export type AdminLayoutDashboardContainerLogoUrlQuery = {
  __typename?: "Query";

  logoConfig: AdminLayoutDashboardContainerLogoUrlLogoConfig;
};

export type AdminLayoutDashboardContainerLogoUrlLogoConfig = {
  __typename?: "LogoConfig";

  url: string;
};

export type WithHtmlSeoDocumentHtmlConfigVariables = {};

export type WithHtmlSeoDocumentHtmlConfigQuery = {
  __typename?: "Query";

  htmlConfig: WithHtmlSeoDocumentHtmlConfigHtmlConfig;
};

export type WithHtmlSeoDocumentHtmlConfigHtmlConfig = {
  __typename?: "HtmlConfig";

  googleAnalyticsId: string | null;

  metaKeywords: string | null;

  metaDescription: string | null;

  metaAuthor: string | null;

  metaAbstract: string | null;

  metaCopyright: string | null;
};

export type WithLoadingSpinnerAppLogoConfigVariables = {};

export type WithLoadingSpinnerAppLogoConfigQuery = {
  __typename?: "Query";

  logoConfig: WithLoadingSpinnerAppLogoConfigLogoConfig;
};

export type WithLoadingSpinnerAppLogoConfigLogoConfig = {
  __typename?: "LogoConfig";

  url: string;
};

export type WithTranslationAppTranslationVariables = {
  language: Language;
};

export type WithTranslationAppTranslationQuery = {
  __typename?: "Query";

  translation: Translation;
};

export type CloudinaryConfigVariables = {};

export type CloudinaryConfigQuery = {
  __typename?: "Query";

  cloudinaryCloudName: string;

  cloudinaryApiKey: string;
};

export type CloudinaryGenerateMediaLibraryAuthenticationTokenVariables = {};

export type CloudinaryGenerateMediaLibraryAuthenticationTokenMutation = {
  __typename?: "Mutation";

  generateCloudinaryMediaLibraryAuthenticationToken: CloudinaryGenerateMediaLibraryAuthenticationTokenGenerateCloudinaryMediaLibraryAuthenticationToken;
};

export type CloudinaryGenerateMediaLibraryAuthenticationTokenGenerateCloudinaryMediaLibraryAuthenticationToken = {
  __typename?: "CloudinaryMediaWidgetAuthenticationToken";

  api_key: string;

  cloud_name: string;

  signature: string;

  timestamp: string;

  username: string;
};

export type CloudinaryGenerateSignatureVariables = {
  paramsToSign: Json;
};

export type CloudinaryGenerateSignatureMutation = {
  __typename?: "Mutation";

  generateCloudinarySignature: string;
};

export type EntryManagerGetEntriesVariables = {};

export type EntryManagerGetEntriesQuery = {
  __typename?: "Query";

  entries: EntryManagerGetEntriesEntries[];
};

export type EntryManagerGetEntriesEntries = {
  __typename?: "Entry";

  id: string;

  name: string;

  description: string;

  logoUrl: string;

  categories: EntryManagerGetEntriesCategories[];
};

export type EntryManagerGetEntriesCategories = {
  __typename?: "Category";

  id: string;

  name: string;

  education: string;

  pricePerPaperRs: number;

  activated: boolean;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const AdminLayoutDashboardContainerLogoUrlDocument = gql`
  query AdminLayoutDashboardContainerLogoUrl {
    logoConfig {
      url
    }
  }
`;
export class AdminLayoutDashboardContainerLogoUrlComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      AdminLayoutDashboardContainerLogoUrlQuery,
      AdminLayoutDashboardContainerLogoUrlVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        AdminLayoutDashboardContainerLogoUrlQuery,
        AdminLayoutDashboardContainerLogoUrlVariables
      >
        query={AdminLayoutDashboardContainerLogoUrlDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type AdminLayoutDashboardContainerLogoUrlProps<
  TChildProps = any
> = Partial<
  ReactApollo.DataProps<
    AdminLayoutDashboardContainerLogoUrlQuery,
    AdminLayoutDashboardContainerLogoUrlVariables
  >
> &
  TChildProps;
export function AdminLayoutDashboardContainerLogoUrlHOC<
  TProps,
  TChildProps = any
>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        AdminLayoutDashboardContainerLogoUrlQuery,
        AdminLayoutDashboardContainerLogoUrlVariables,
        AdminLayoutDashboardContainerLogoUrlProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    AdminLayoutDashboardContainerLogoUrlQuery,
    AdminLayoutDashboardContainerLogoUrlVariables,
    AdminLayoutDashboardContainerLogoUrlProps<TChildProps>
  >(AdminLayoutDashboardContainerLogoUrlDocument, operationOptions);
}
export const WithHtmlSeoDocumentHtmlConfigDocument = gql`
  query WithHtmlSeoDocumentHtmlConfig {
    htmlConfig {
      googleAnalyticsId
      metaKeywords
      metaDescription
      metaAuthor
      metaAbstract
      metaCopyright
    }
  }
`;
export class WithHtmlSeoDocumentHtmlConfigComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      WithHtmlSeoDocumentHtmlConfigQuery,
      WithHtmlSeoDocumentHtmlConfigVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        WithHtmlSeoDocumentHtmlConfigQuery,
        WithHtmlSeoDocumentHtmlConfigVariables
      >
        query={WithHtmlSeoDocumentHtmlConfigDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type WithHtmlSeoDocumentHtmlConfigProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<
    WithHtmlSeoDocumentHtmlConfigQuery,
    WithHtmlSeoDocumentHtmlConfigVariables
  >
> &
  TChildProps;
export function WithHtmlSeoDocumentHtmlConfigHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        WithHtmlSeoDocumentHtmlConfigQuery,
        WithHtmlSeoDocumentHtmlConfigVariables,
        WithHtmlSeoDocumentHtmlConfigProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    WithHtmlSeoDocumentHtmlConfigQuery,
    WithHtmlSeoDocumentHtmlConfigVariables,
    WithHtmlSeoDocumentHtmlConfigProps<TChildProps>
  >(WithHtmlSeoDocumentHtmlConfigDocument, operationOptions);
}
export const WithLoadingSpinnerAppLogoConfigDocument = gql`
  query WithLoadingSpinnerAppLogoConfig {
    logoConfig {
      url
    }
  }
`;
export class WithLoadingSpinnerAppLogoConfigComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      WithLoadingSpinnerAppLogoConfigQuery,
      WithLoadingSpinnerAppLogoConfigVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        WithLoadingSpinnerAppLogoConfigQuery,
        WithLoadingSpinnerAppLogoConfigVariables
      >
        query={WithLoadingSpinnerAppLogoConfigDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type WithLoadingSpinnerAppLogoConfigProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<
    WithLoadingSpinnerAppLogoConfigQuery,
    WithLoadingSpinnerAppLogoConfigVariables
  >
> &
  TChildProps;
export function WithLoadingSpinnerAppLogoConfigHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        WithLoadingSpinnerAppLogoConfigQuery,
        WithLoadingSpinnerAppLogoConfigVariables,
        WithLoadingSpinnerAppLogoConfigProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    WithLoadingSpinnerAppLogoConfigQuery,
    WithLoadingSpinnerAppLogoConfigVariables,
    WithLoadingSpinnerAppLogoConfigProps<TChildProps>
  >(WithLoadingSpinnerAppLogoConfigDocument, operationOptions);
}
export const WithTranslationAppTranslationDocument = gql`
  query WithTranslationAppTranslation($language: Language!) {
    translation(language: $language)
  }
`;
export class WithTranslationAppTranslationComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      WithTranslationAppTranslationQuery,
      WithTranslationAppTranslationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        WithTranslationAppTranslationQuery,
        WithTranslationAppTranslationVariables
      >
        query={WithTranslationAppTranslationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type WithTranslationAppTranslationProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<
    WithTranslationAppTranslationQuery,
    WithTranslationAppTranslationVariables
  >
> &
  TChildProps;
export function WithTranslationAppTranslationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        WithTranslationAppTranslationQuery,
        WithTranslationAppTranslationVariables,
        WithTranslationAppTranslationProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    WithTranslationAppTranslationQuery,
    WithTranslationAppTranslationVariables,
    WithTranslationAppTranslationProps<TChildProps>
  >(WithTranslationAppTranslationDocument, operationOptions);
}
export const CloudinaryConfigDocument = gql`
  query CloudinaryConfig {
    cloudinaryCloudName
    cloudinaryApiKey
  }
`;
export class CloudinaryConfigComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<CloudinaryConfigQuery, CloudinaryConfigVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<CloudinaryConfigQuery, CloudinaryConfigVariables>
        query={CloudinaryConfigDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CloudinaryConfigProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<CloudinaryConfigQuery, CloudinaryConfigVariables>
> &
  TChildProps;
export function CloudinaryConfigHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CloudinaryConfigQuery,
        CloudinaryConfigVariables,
        CloudinaryConfigProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CloudinaryConfigQuery,
    CloudinaryConfigVariables,
    CloudinaryConfigProps<TChildProps>
  >(CloudinaryConfigDocument, operationOptions);
}
export const CloudinaryGenerateMediaLibraryAuthenticationTokenDocument = gql`
  mutation CloudinaryGenerateMediaLibraryAuthenticationToken {
    generateCloudinaryMediaLibraryAuthenticationToken {
      api_key
      cloud_name
      signature
      timestamp
      username
    }
  }
`;
export class CloudinaryGenerateMediaLibraryAuthenticationTokenComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CloudinaryGenerateMediaLibraryAuthenticationTokenMutation,
      CloudinaryGenerateMediaLibraryAuthenticationTokenVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CloudinaryGenerateMediaLibraryAuthenticationTokenMutation,
        CloudinaryGenerateMediaLibraryAuthenticationTokenVariables
      >
        mutation={CloudinaryGenerateMediaLibraryAuthenticationTokenDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CloudinaryGenerateMediaLibraryAuthenticationTokenProps<
  TChildProps = any
> = Partial<
  ReactApollo.MutateProps<
    CloudinaryGenerateMediaLibraryAuthenticationTokenMutation,
    CloudinaryGenerateMediaLibraryAuthenticationTokenVariables
  >
> &
  TChildProps;
export type CloudinaryGenerateMediaLibraryAuthenticationTokenMutationFn = ReactApollo.MutationFn<
  CloudinaryGenerateMediaLibraryAuthenticationTokenMutation,
  CloudinaryGenerateMediaLibraryAuthenticationTokenVariables
>;
export function CloudinaryGenerateMediaLibraryAuthenticationTokenHOC<
  TProps,
  TChildProps = any
>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CloudinaryGenerateMediaLibraryAuthenticationTokenMutation,
        CloudinaryGenerateMediaLibraryAuthenticationTokenVariables,
        CloudinaryGenerateMediaLibraryAuthenticationTokenProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CloudinaryGenerateMediaLibraryAuthenticationTokenMutation,
    CloudinaryGenerateMediaLibraryAuthenticationTokenVariables,
    CloudinaryGenerateMediaLibraryAuthenticationTokenProps<TChildProps>
  >(
    CloudinaryGenerateMediaLibraryAuthenticationTokenDocument,
    operationOptions,
  );
}
export const CloudinaryGenerateSignatureDocument = gql`
  mutation CloudinaryGenerateSignature($paramsToSign: Json!) {
    generateCloudinarySignature(paramsToSign: $paramsToSign)
  }
`;
export class CloudinaryGenerateSignatureComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CloudinaryGenerateSignatureMutation,
      CloudinaryGenerateSignatureVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CloudinaryGenerateSignatureMutation,
        CloudinaryGenerateSignatureVariables
      >
        mutation={CloudinaryGenerateSignatureDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CloudinaryGenerateSignatureProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    CloudinaryGenerateSignatureMutation,
    CloudinaryGenerateSignatureVariables
  >
> &
  TChildProps;
export type CloudinaryGenerateSignatureMutationFn = ReactApollo.MutationFn<
  CloudinaryGenerateSignatureMutation,
  CloudinaryGenerateSignatureVariables
>;
export function CloudinaryGenerateSignatureHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CloudinaryGenerateSignatureMutation,
        CloudinaryGenerateSignatureVariables,
        CloudinaryGenerateSignatureProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CloudinaryGenerateSignatureMutation,
    CloudinaryGenerateSignatureVariables,
    CloudinaryGenerateSignatureProps<TChildProps>
  >(CloudinaryGenerateSignatureDocument, operationOptions);
}
export const EntryManagerGetEntriesDocument = gql`
  query EntryManagerGetEntries {
    entries {
      id
      name
      description
      logoUrl
      categories {
        id
        name
        education
        pricePerPaperRs
        activated
      }
    }
  }
`;
export class EntryManagerGetEntriesComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      EntryManagerGetEntriesQuery,
      EntryManagerGetEntriesVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        EntryManagerGetEntriesQuery,
        EntryManagerGetEntriesVariables
      >
        query={EntryManagerGetEntriesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EntryManagerGetEntriesProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<
    EntryManagerGetEntriesQuery,
    EntryManagerGetEntriesVariables
  >
> &
  TChildProps;
export function EntryManagerGetEntriesHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EntryManagerGetEntriesQuery,
        EntryManagerGetEntriesVariables,
        EntryManagerGetEntriesProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EntryManagerGetEntriesQuery,
    EntryManagerGetEntriesVariables,
    EntryManagerGetEntriesProps<TChildProps>
  >(EntryManagerGetEntriesDocument, operationOptions);
}
