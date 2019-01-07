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

export interface InputIndexPageUpdate {
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

export type EntryManagerCreateCategoryAndNewEntryVariables = {
  request: CategoryCreationRequestNewEntry;
};

export type EntryManagerCreateCategoryAndNewEntryMutation = {
  __typename?: "Mutation";

  createCategoryNewEntry: EntryManagerCreateCategoryAndNewEntryCreateCategoryNewEntry;
};

export type EntryManagerCreateCategoryAndNewEntryCreateCategoryNewEntry = EntryManagerEntryPartsFragment;

export type EntryManagerCreateCategoryForExistingEntryVariables = {
  request: CategoryCreationRequestExistingEntry;
};

export type EntryManagerCreateCategoryForExistingEntryMutation = {
  __typename?: "Mutation";

  createCategoryExistingEntry: EntryManagerCreateCategoryForExistingEntryCreateCategoryExistingEntry;
};

export type EntryManagerCreateCategoryForExistingEntryCreateCategoryExistingEntry = EntryManagerCategoryPartsFragment;

export type EntryManagerDeleteCategoriesVariables = {
  categoryIds: string[];
};

export type EntryManagerDeleteCategoriesMutation = {
  __typename?: "Mutation";

  deleteCategories: EntryManagerDeleteCategoriesDeleteCategories[];
};

export type EntryManagerDeleteCategoriesDeleteCategories = EntryManagerCategoryPartsFragment;

export type EntryManagerDeleteEntriesVariables = {
  entryIds: string[];
};

export type EntryManagerDeleteEntriesMutation = {
  __typename?: "Mutation";

  deleteEntries: boolean | null;
};

export type EntryManagerGetCategoryVariables = {
  id: string;
};

export type EntryManagerGetCategoryQuery = {
  __typename?: "Query";

  category: EntryManagerGetCategoryCategory | null;
};

export type EntryManagerGetCategoryCategory = EntryManagerCategoryPartsFragment;

export type EntryManagerGetEntriesVariables = {};

export type EntryManagerGetEntriesQuery = {
  __typename?: "Query";

  entries: EntryManagerGetEntriesEntries[];
};

export type EntryManagerGetEntriesEntries = EntryManagerEntryPartsFragment;

export type EntryManagerGetEntryVariables = {
  entryId: string;
};

export type EntryManagerGetEntryQuery = {
  __typename?: "Query";

  entry: EntryManagerGetEntryEntry | null;
};

export type EntryManagerGetEntryEntry = EntryManagerEntryPartsFragment;

export type EntryManagerSetCategoryActivationStatusesVariables = {
  categoryIds: string[];
  activationStatuses: boolean[];
};

export type EntryManagerSetCategoryActivationStatusesMutation = {
  __typename?: "Mutation";

  setCategoryActivationStatuses: EntryManagerSetCategoryActivationStatusesSetCategoryActivationStatuses[];
};

export type EntryManagerSetCategoryActivationStatusesSetCategoryActivationStatuses = EntryManagerCategoryPartsFragment;

export type EntryManagerUpdateCategoryVariables = {
  categoryId: string;
  update: CategoryUpdate;
};

export type EntryManagerUpdateCategoryMutation = {
  __typename?: "Mutation";

  updateCategory: EntryManagerUpdateCategoryUpdateCategory;
};

export type EntryManagerUpdateCategoryUpdateCategory = EntryManagerCategoryPartsFragment;

export type EntryManagerUpdateEntryVariables = {
  entryId: string;
  update: EntryUpdate;
};

export type EntryManagerUpdateEntryMutation = {
  __typename?: "Mutation";

  updateEntry: EntryManagerUpdateEntryUpdateEntry;
};

export type EntryManagerUpdateEntryUpdateEntry = EntryManagerEntryPartsFragment;

export type IndexManagerUpdateIndexPageVariables = {
  request: InputIndexPageUpdate;
};

export type IndexManagerUpdateIndexPageMutation = {
  __typename?: "Mutation";

  updateIndexPage: boolean | null;
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

export type EntryManagerCategoryPartsFragment = {
  __typename?: "Category";

  id: string;

  name: string;

  education: string;

  pricePerPaperRs: number;

  activated: boolean;
};

export type EntryManagerEntryPartsFragment = {
  __typename?: "Entry";

  id: string;

  name: string;

  logoUrl: string;

  description: string;

  categories: EntryManagerEntryPartsCategories[];
};

export type EntryManagerEntryPartsCategories = EntryManagerCategoryPartsFragment;

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Fragments
// ====================================================

export const EntryManagerCategoryPartsFragmentDoc = gql`
  fragment EntryManagerCategoryParts on Category {
    id
    name
    education
    pricePerPaperRs
    activated
  }
`;

export const EntryManagerEntryPartsFragmentDoc = gql`
  fragment EntryManagerEntryParts on Entry {
    id
    name
    logoUrl
    description
    categories {
      ...EntryManagerCategoryParts
    }
  }

  ${EntryManagerCategoryPartsFragmentDoc}
`;

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
export const EntryManagerCreateCategoryAndNewEntryDocument = gql`
  mutation EntryManagerCreateCategoryAndNewEntry(
    $request: CategoryCreationRequestNewEntry!
  ) {
    createCategoryNewEntry(request: $request) {
      ...EntryManagerEntryParts
    }
  }

  ${EntryManagerEntryPartsFragmentDoc}
`;
export class EntryManagerCreateCategoryAndNewEntryComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      EntryManagerCreateCategoryAndNewEntryMutation,
      EntryManagerCreateCategoryAndNewEntryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        EntryManagerCreateCategoryAndNewEntryMutation,
        EntryManagerCreateCategoryAndNewEntryVariables
      >
        mutation={EntryManagerCreateCategoryAndNewEntryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EntryManagerCreateCategoryAndNewEntryProps<
  TChildProps = any
> = Partial<
  ReactApollo.MutateProps<
    EntryManagerCreateCategoryAndNewEntryMutation,
    EntryManagerCreateCategoryAndNewEntryVariables
  >
> &
  TChildProps;
export type EntryManagerCreateCategoryAndNewEntryMutationFn = ReactApollo.MutationFn<
  EntryManagerCreateCategoryAndNewEntryMutation,
  EntryManagerCreateCategoryAndNewEntryVariables
>;
export function EntryManagerCreateCategoryAndNewEntryHOC<
  TProps,
  TChildProps = any
>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EntryManagerCreateCategoryAndNewEntryMutation,
        EntryManagerCreateCategoryAndNewEntryVariables,
        EntryManagerCreateCategoryAndNewEntryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EntryManagerCreateCategoryAndNewEntryMutation,
    EntryManagerCreateCategoryAndNewEntryVariables,
    EntryManagerCreateCategoryAndNewEntryProps<TChildProps>
  >(EntryManagerCreateCategoryAndNewEntryDocument, operationOptions);
}
export const EntryManagerCreateCategoryForExistingEntryDocument = gql`
  mutation EntryManagerCreateCategoryForExistingEntry(
    $request: CategoryCreationRequestExistingEntry!
  ) {
    createCategoryExistingEntry(request: $request) {
      ...EntryManagerCategoryParts
    }
  }

  ${EntryManagerCategoryPartsFragmentDoc}
`;
export class EntryManagerCreateCategoryForExistingEntryComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      EntryManagerCreateCategoryForExistingEntryMutation,
      EntryManagerCreateCategoryForExistingEntryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        EntryManagerCreateCategoryForExistingEntryMutation,
        EntryManagerCreateCategoryForExistingEntryVariables
      >
        mutation={EntryManagerCreateCategoryForExistingEntryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EntryManagerCreateCategoryForExistingEntryProps<
  TChildProps = any
> = Partial<
  ReactApollo.MutateProps<
    EntryManagerCreateCategoryForExistingEntryMutation,
    EntryManagerCreateCategoryForExistingEntryVariables
  >
> &
  TChildProps;
export type EntryManagerCreateCategoryForExistingEntryMutationFn = ReactApollo.MutationFn<
  EntryManagerCreateCategoryForExistingEntryMutation,
  EntryManagerCreateCategoryForExistingEntryVariables
>;
export function EntryManagerCreateCategoryForExistingEntryHOC<
  TProps,
  TChildProps = any
>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EntryManagerCreateCategoryForExistingEntryMutation,
        EntryManagerCreateCategoryForExistingEntryVariables,
        EntryManagerCreateCategoryForExistingEntryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EntryManagerCreateCategoryForExistingEntryMutation,
    EntryManagerCreateCategoryForExistingEntryVariables,
    EntryManagerCreateCategoryForExistingEntryProps<TChildProps>
  >(EntryManagerCreateCategoryForExistingEntryDocument, operationOptions);
}
export const EntryManagerDeleteCategoriesDocument = gql`
  mutation EntryManagerDeleteCategories($categoryIds: [ID!]!) {
    deleteCategories(categoryIds: $categoryIds) {
      ...EntryManagerCategoryParts
    }
  }

  ${EntryManagerCategoryPartsFragmentDoc}
`;
export class EntryManagerDeleteCategoriesComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      EntryManagerDeleteCategoriesMutation,
      EntryManagerDeleteCategoriesVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        EntryManagerDeleteCategoriesMutation,
        EntryManagerDeleteCategoriesVariables
      >
        mutation={EntryManagerDeleteCategoriesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EntryManagerDeleteCategoriesProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    EntryManagerDeleteCategoriesMutation,
    EntryManagerDeleteCategoriesVariables
  >
> &
  TChildProps;
export type EntryManagerDeleteCategoriesMutationFn = ReactApollo.MutationFn<
  EntryManagerDeleteCategoriesMutation,
  EntryManagerDeleteCategoriesVariables
>;
export function EntryManagerDeleteCategoriesHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EntryManagerDeleteCategoriesMutation,
        EntryManagerDeleteCategoriesVariables,
        EntryManagerDeleteCategoriesProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EntryManagerDeleteCategoriesMutation,
    EntryManagerDeleteCategoriesVariables,
    EntryManagerDeleteCategoriesProps<TChildProps>
  >(EntryManagerDeleteCategoriesDocument, operationOptions);
}
export const EntryManagerDeleteEntriesDocument = gql`
  mutation EntryManagerDeleteEntries($entryIds: [ID!]!) {
    deleteEntries(entryIds: $entryIds)
  }
`;
export class EntryManagerDeleteEntriesComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      EntryManagerDeleteEntriesMutation,
      EntryManagerDeleteEntriesVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        EntryManagerDeleteEntriesMutation,
        EntryManagerDeleteEntriesVariables
      >
        mutation={EntryManagerDeleteEntriesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EntryManagerDeleteEntriesProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    EntryManagerDeleteEntriesMutation,
    EntryManagerDeleteEntriesVariables
  >
> &
  TChildProps;
export type EntryManagerDeleteEntriesMutationFn = ReactApollo.MutationFn<
  EntryManagerDeleteEntriesMutation,
  EntryManagerDeleteEntriesVariables
>;
export function EntryManagerDeleteEntriesHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EntryManagerDeleteEntriesMutation,
        EntryManagerDeleteEntriesVariables,
        EntryManagerDeleteEntriesProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EntryManagerDeleteEntriesMutation,
    EntryManagerDeleteEntriesVariables,
    EntryManagerDeleteEntriesProps<TChildProps>
  >(EntryManagerDeleteEntriesDocument, operationOptions);
}
export const EntryManagerGetCategoryDocument = gql`
  query EntryManagerGetCategory($id: ID!) {
    category(id: $id) {
      ...EntryManagerCategoryParts
    }
  }

  ${EntryManagerCategoryPartsFragmentDoc}
`;
export class EntryManagerGetCategoryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      EntryManagerGetCategoryQuery,
      EntryManagerGetCategoryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        EntryManagerGetCategoryQuery,
        EntryManagerGetCategoryVariables
      >
        query={EntryManagerGetCategoryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EntryManagerGetCategoryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<
    EntryManagerGetCategoryQuery,
    EntryManagerGetCategoryVariables
  >
> &
  TChildProps;
export function EntryManagerGetCategoryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EntryManagerGetCategoryQuery,
        EntryManagerGetCategoryVariables,
        EntryManagerGetCategoryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EntryManagerGetCategoryQuery,
    EntryManagerGetCategoryVariables,
    EntryManagerGetCategoryProps<TChildProps>
  >(EntryManagerGetCategoryDocument, operationOptions);
}
export const EntryManagerGetEntriesDocument = gql`
  query EntryManagerGetEntries {
    entries {
      ...EntryManagerEntryParts
    }
  }

  ${EntryManagerEntryPartsFragmentDoc}
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
export const EntryManagerGetEntryDocument = gql`
  query EntryManagerGetEntry($entryId: ID!) {
    entry(entryId: $entryId) {
      ...EntryManagerEntryParts
    }
  }

  ${EntryManagerEntryPartsFragmentDoc}
`;
export class EntryManagerGetEntryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      EntryManagerGetEntryQuery,
      EntryManagerGetEntryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        EntryManagerGetEntryQuery,
        EntryManagerGetEntryVariables
      >
        query={EntryManagerGetEntryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EntryManagerGetEntryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<
    EntryManagerGetEntryQuery,
    EntryManagerGetEntryVariables
  >
> &
  TChildProps;
export function EntryManagerGetEntryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EntryManagerGetEntryQuery,
        EntryManagerGetEntryVariables,
        EntryManagerGetEntryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EntryManagerGetEntryQuery,
    EntryManagerGetEntryVariables,
    EntryManagerGetEntryProps<TChildProps>
  >(EntryManagerGetEntryDocument, operationOptions);
}
export const EntryManagerSetCategoryActivationStatusesDocument = gql`
  mutation EntryManagerSetCategoryActivationStatuses(
    $categoryIds: [ID!]!
    $activationStatuses: [Boolean!]!
  ) {
    setCategoryActivationStatuses(
      categoryIds: $categoryIds
      activatedStatuses: $activationStatuses
    ) {
      ...EntryManagerCategoryParts
    }
  }

  ${EntryManagerCategoryPartsFragmentDoc}
`;
export class EntryManagerSetCategoryActivationStatusesComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      EntryManagerSetCategoryActivationStatusesMutation,
      EntryManagerSetCategoryActivationStatusesVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        EntryManagerSetCategoryActivationStatusesMutation,
        EntryManagerSetCategoryActivationStatusesVariables
      >
        mutation={EntryManagerSetCategoryActivationStatusesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EntryManagerSetCategoryActivationStatusesProps<
  TChildProps = any
> = Partial<
  ReactApollo.MutateProps<
    EntryManagerSetCategoryActivationStatusesMutation,
    EntryManagerSetCategoryActivationStatusesVariables
  >
> &
  TChildProps;
export type EntryManagerSetCategoryActivationStatusesMutationFn = ReactApollo.MutationFn<
  EntryManagerSetCategoryActivationStatusesMutation,
  EntryManagerSetCategoryActivationStatusesVariables
>;
export function EntryManagerSetCategoryActivationStatusesHOC<
  TProps,
  TChildProps = any
>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EntryManagerSetCategoryActivationStatusesMutation,
        EntryManagerSetCategoryActivationStatusesVariables,
        EntryManagerSetCategoryActivationStatusesProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EntryManagerSetCategoryActivationStatusesMutation,
    EntryManagerSetCategoryActivationStatusesVariables,
    EntryManagerSetCategoryActivationStatusesProps<TChildProps>
  >(EntryManagerSetCategoryActivationStatusesDocument, operationOptions);
}
export const EntryManagerUpdateCategoryDocument = gql`
  mutation EntryManagerUpdateCategory(
    $categoryId: ID!
    $update: CategoryUpdate!
  ) {
    updateCategory(categoryId: $categoryId, update: $update) {
      ...EntryManagerCategoryParts
    }
  }

  ${EntryManagerCategoryPartsFragmentDoc}
`;
export class EntryManagerUpdateCategoryComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      EntryManagerUpdateCategoryMutation,
      EntryManagerUpdateCategoryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        EntryManagerUpdateCategoryMutation,
        EntryManagerUpdateCategoryVariables
      >
        mutation={EntryManagerUpdateCategoryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EntryManagerUpdateCategoryProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    EntryManagerUpdateCategoryMutation,
    EntryManagerUpdateCategoryVariables
  >
> &
  TChildProps;
export type EntryManagerUpdateCategoryMutationFn = ReactApollo.MutationFn<
  EntryManagerUpdateCategoryMutation,
  EntryManagerUpdateCategoryVariables
>;
export function EntryManagerUpdateCategoryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EntryManagerUpdateCategoryMutation,
        EntryManagerUpdateCategoryVariables,
        EntryManagerUpdateCategoryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EntryManagerUpdateCategoryMutation,
    EntryManagerUpdateCategoryVariables,
    EntryManagerUpdateCategoryProps<TChildProps>
  >(EntryManagerUpdateCategoryDocument, operationOptions);
}
export const EntryManagerUpdateEntryDocument = gql`
  mutation EntryManagerUpdateEntry($entryId: ID!, $update: EntryUpdate!) {
    updateEntry(entryId: $entryId, update: $update) {
      ...EntryManagerEntryParts
    }
  }

  ${EntryManagerEntryPartsFragmentDoc}
`;
export class EntryManagerUpdateEntryComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      EntryManagerUpdateEntryMutation,
      EntryManagerUpdateEntryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        EntryManagerUpdateEntryMutation,
        EntryManagerUpdateEntryVariables
      >
        mutation={EntryManagerUpdateEntryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EntryManagerUpdateEntryProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    EntryManagerUpdateEntryMutation,
    EntryManagerUpdateEntryVariables
  >
> &
  TChildProps;
export type EntryManagerUpdateEntryMutationFn = ReactApollo.MutationFn<
  EntryManagerUpdateEntryMutation,
  EntryManagerUpdateEntryVariables
>;
export function EntryManagerUpdateEntryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EntryManagerUpdateEntryMutation,
        EntryManagerUpdateEntryVariables,
        EntryManagerUpdateEntryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    EntryManagerUpdateEntryMutation,
    EntryManagerUpdateEntryVariables,
    EntryManagerUpdateEntryProps<TChildProps>
  >(EntryManagerUpdateEntryDocument, operationOptions);
}
export const IndexManagerUpdateIndexPageDocument = gql`
  mutation IndexManagerUpdateIndexPage($request: InputIndexPageUpdate!) {
    updateIndexPage(request: $request)
  }
`;
export class IndexManagerUpdateIndexPageComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      IndexManagerUpdateIndexPageMutation,
      IndexManagerUpdateIndexPageVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        IndexManagerUpdateIndexPageMutation,
        IndexManagerUpdateIndexPageVariables
      >
        mutation={IndexManagerUpdateIndexPageDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type IndexManagerUpdateIndexPageProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    IndexManagerUpdateIndexPageMutation,
    IndexManagerUpdateIndexPageVariables
  >
> &
  TChildProps;
export type IndexManagerUpdateIndexPageMutationFn = ReactApollo.MutationFn<
  IndexManagerUpdateIndexPageMutation,
  IndexManagerUpdateIndexPageVariables
>;
export function IndexManagerUpdateIndexPageHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        IndexManagerUpdateIndexPageMutation,
        IndexManagerUpdateIndexPageVariables,
        IndexManagerUpdateIndexPageProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    IndexManagerUpdateIndexPageMutation,
    IndexManagerUpdateIndexPageVariables,
    IndexManagerUpdateIndexPageProps<TChildProps>
  >(IndexManagerUpdateIndexPageDocument, operationOptions);
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
