// AUTO-GENERATED - DO NOT EDIT
// SCRIPT-> yarn build
// @ts-ignore
import * as models from "./models";

export interface CategoryCreationRequestExistingEntry {
  readonly categoryName: string;

  readonly categoryEducation: string;

  readonly pricePerPaper: number;

  readonly logoUrl: string;

  readonly existingEntryId: string;
}

export interface CategoryCreationRequestNewEntry {
  readonly categoryName: string;

  readonly categoryEducation: string;

  readonly pricePerPaper: number;

  readonly logoUrl: string;

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
// Documents
// ====================================================

export type CreateCategoryExistingEntryVariables = {
  request: CategoryCreationRequestExistingEntry;
};

export type CreateCategoryExistingEntryMutation = {
  __typename?: "Mutation";

  createCategoryExistingEntry: boolean | null;
};

export type CreateCategoryNewEntryVariables = {
  request: CategoryCreationRequestNewEntry;
};

export type CreateCategoryNewEntryMutation = {
  __typename?: "Mutation";

  createCategoryNewEntry: boolean | null;
};

export type GenerateCloudinaryMediaLibraryAuthenticationTokenVariables = {};

export type GenerateCloudinaryMediaLibraryAuthenticationTokenMutation = {
  __typename?: "Mutation";

  generateCloudinaryMediaLibraryAuthenticationToken: GenerateCloudinaryMediaLibraryAuthenticationTokenGenerateCloudinaryMediaLibraryAuthenticationToken;
};

export type GenerateCloudinaryMediaLibraryAuthenticationTokenGenerateCloudinaryMediaLibraryAuthenticationToken = {
  __typename?: "CloudinaryMediaWidgetAuthenticationToken";

  api_key: string;

  cloud_name: string;

  signature: string;

  timestamp: string;

  username: string;
};

export type GenerateCloudinarySignatureVariables = {
  paramsToSign: Json;
};

export type GenerateCloudinarySignatureMutation = {
  __typename?: "Mutation";

  generateCloudinarySignature: string;
};

export type GetCategoryVariables = {
  id: string;
};

export type GetCategoryQuery = {
  __typename?: "Query";

  category: GetCategoryCategory | null;
};

export type GetCategoryCategory = {
  __typename?: "Category";

  id: string;

  name: string;

  education: string;

  pricePerPaperRs: number;

  iconUrl: string;

  activated: boolean;
};

export type GetCloudinaryConfigVariables = {};

export type GetCloudinaryConfigQuery = {
  __typename?: "Query";

  cloudinaryCloudName: string;

  cloudinaryApiKey: string;
};

export type GetEntriesVariables = {};

export type GetEntriesQuery = {
  __typename?: "Query";

  entries: GetEntriesEntries[];
};

export type GetEntriesEntries = {
  __typename?: "Entry";

  id: string;

  name: string;

  description: string;

  categories: string[];
};

export type GetHtmlConfigVariables = {};

export type GetHtmlConfigQuery = {
  __typename?: "Query";

  htmlConfig: GetHtmlConfigHtmlConfig;
};

export type GetHtmlConfigHtmlConfig = {
  __typename?: "HtmlConfig";

  googleAnalyticsId: string | null;

  metaKeywords: string | null;

  metaDescription: string | null;

  metaAuthor: string | null;

  metaAbstract: string | null;

  metaCopyright: string | null;
};

export type GetLogoConfigVariables = {};

export type GetLogoConfigQuery = {
  __typename?: "Query";

  logoConfig: GetLogoConfigLogoConfig;
};

export type GetLogoConfigLogoConfig = {
  __typename?: "LogoConfig";

  url: string;
};

export type GetTranslationVariables = {
  language: Language;
};

export type GetTranslationQuery = {
  __typename?: "Query";

  translation: Translation;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const CreateCategoryExistingEntryDocument = gql`
  mutation CreateCategoryExistingEntry(
    $request: CategoryCreationRequestExistingEntry!
  ) {
    createCategoryExistingEntry(request: $request)
  }
`;
export class CreateCategoryExistingEntryComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CreateCategoryExistingEntryMutation,
      CreateCategoryExistingEntryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CreateCategoryExistingEntryMutation,
        CreateCategoryExistingEntryVariables
      >
        mutation={CreateCategoryExistingEntryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateCategoryExistingEntryProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    CreateCategoryExistingEntryMutation,
    CreateCategoryExistingEntryVariables
  >
> &
  TChildProps;
export type CreateCategoryExistingEntryMutationFn = ReactApollo.MutationFn<
  CreateCategoryExistingEntryMutation,
  CreateCategoryExistingEntryVariables
>;
export function CreateCategoryExistingEntryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateCategoryExistingEntryMutation,
        CreateCategoryExistingEntryVariables,
        CreateCategoryExistingEntryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CreateCategoryExistingEntryMutation,
    CreateCategoryExistingEntryVariables,
    CreateCategoryExistingEntryProps<TChildProps>
  >(CreateCategoryExistingEntryDocument, operationOptions);
}
export const CreateCategoryNewEntryDocument = gql`
  mutation CreateCategoryNewEntry($request: CategoryCreationRequestNewEntry!) {
    createCategoryNewEntry(request: $request)
  }
`;
export class CreateCategoryNewEntryComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CreateCategoryNewEntryMutation,
      CreateCategoryNewEntryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CreateCategoryNewEntryMutation,
        CreateCategoryNewEntryVariables
      >
        mutation={CreateCategoryNewEntryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateCategoryNewEntryProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    CreateCategoryNewEntryMutation,
    CreateCategoryNewEntryVariables
  >
> &
  TChildProps;
export type CreateCategoryNewEntryMutationFn = ReactApollo.MutationFn<
  CreateCategoryNewEntryMutation,
  CreateCategoryNewEntryVariables
>;
export function CreateCategoryNewEntryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateCategoryNewEntryMutation,
        CreateCategoryNewEntryVariables,
        CreateCategoryNewEntryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CreateCategoryNewEntryMutation,
    CreateCategoryNewEntryVariables,
    CreateCategoryNewEntryProps<TChildProps>
  >(CreateCategoryNewEntryDocument, operationOptions);
}
export const GenerateCloudinaryMediaLibraryAuthenticationTokenDocument = gql`
  mutation GenerateCloudinaryMediaLibraryAuthenticationToken {
    generateCloudinaryMediaLibraryAuthenticationToken {
      api_key
      cloud_name
      signature
      timestamp
      username
    }
  }
`;
export class GenerateCloudinaryMediaLibraryAuthenticationTokenComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      GenerateCloudinaryMediaLibraryAuthenticationTokenMutation,
      GenerateCloudinaryMediaLibraryAuthenticationTokenVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        GenerateCloudinaryMediaLibraryAuthenticationTokenMutation,
        GenerateCloudinaryMediaLibraryAuthenticationTokenVariables
      >
        mutation={GenerateCloudinaryMediaLibraryAuthenticationTokenDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GenerateCloudinaryMediaLibraryAuthenticationTokenProps<
  TChildProps = any
> = Partial<
  ReactApollo.MutateProps<
    GenerateCloudinaryMediaLibraryAuthenticationTokenMutation,
    GenerateCloudinaryMediaLibraryAuthenticationTokenVariables
  >
> &
  TChildProps;
export type GenerateCloudinaryMediaLibraryAuthenticationTokenMutationFn = ReactApollo.MutationFn<
  GenerateCloudinaryMediaLibraryAuthenticationTokenMutation,
  GenerateCloudinaryMediaLibraryAuthenticationTokenVariables
>;
export function GenerateCloudinaryMediaLibraryAuthenticationTokenHOC<
  TProps,
  TChildProps = any
>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GenerateCloudinaryMediaLibraryAuthenticationTokenMutation,
        GenerateCloudinaryMediaLibraryAuthenticationTokenVariables,
        GenerateCloudinaryMediaLibraryAuthenticationTokenProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GenerateCloudinaryMediaLibraryAuthenticationTokenMutation,
    GenerateCloudinaryMediaLibraryAuthenticationTokenVariables,
    GenerateCloudinaryMediaLibraryAuthenticationTokenProps<TChildProps>
  >(
    GenerateCloudinaryMediaLibraryAuthenticationTokenDocument,
    operationOptions,
  );
}
export const GenerateCloudinarySignatureDocument = gql`
  mutation GenerateCloudinarySignature($paramsToSign: Json!) {
    generateCloudinarySignature(paramsToSign: $paramsToSign)
  }
`;
export class GenerateCloudinarySignatureComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      GenerateCloudinarySignatureMutation,
      GenerateCloudinarySignatureVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        GenerateCloudinarySignatureMutation,
        GenerateCloudinarySignatureVariables
      >
        mutation={GenerateCloudinarySignatureDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GenerateCloudinarySignatureProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    GenerateCloudinarySignatureMutation,
    GenerateCloudinarySignatureVariables
  >
> &
  TChildProps;
export type GenerateCloudinarySignatureMutationFn = ReactApollo.MutationFn<
  GenerateCloudinarySignatureMutation,
  GenerateCloudinarySignatureVariables
>;
export function GenerateCloudinarySignatureHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GenerateCloudinarySignatureMutation,
        GenerateCloudinarySignatureVariables,
        GenerateCloudinarySignatureProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GenerateCloudinarySignatureMutation,
    GenerateCloudinarySignatureVariables,
    GenerateCloudinarySignatureProps<TChildProps>
  >(GenerateCloudinarySignatureDocument, operationOptions);
}
export const GetCategoryDocument = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      id
      name
      education
      pricePerPaperRs
      iconUrl
      activated
    }
  }
`;
export class GetCategoryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetCategoryQuery, GetCategoryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetCategoryQuery, GetCategoryVariables>
        query={GetCategoryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetCategoryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetCategoryQuery, GetCategoryVariables>
> &
  TChildProps;
export function GetCategoryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetCategoryQuery,
        GetCategoryVariables,
        GetCategoryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetCategoryQuery,
    GetCategoryVariables,
    GetCategoryProps<TChildProps>
  >(GetCategoryDocument, operationOptions);
}
export const GetCloudinaryConfigDocument = gql`
  query GetCloudinaryConfig {
    cloudinaryCloudName
    cloudinaryApiKey
  }
`;
export class GetCloudinaryConfigComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      GetCloudinaryConfigQuery,
      GetCloudinaryConfigVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetCloudinaryConfigQuery, GetCloudinaryConfigVariables>
        query={GetCloudinaryConfigDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetCloudinaryConfigProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetCloudinaryConfigQuery, GetCloudinaryConfigVariables>
> &
  TChildProps;
export function GetCloudinaryConfigHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetCloudinaryConfigQuery,
        GetCloudinaryConfigVariables,
        GetCloudinaryConfigProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetCloudinaryConfigQuery,
    GetCloudinaryConfigVariables,
    GetCloudinaryConfigProps<TChildProps>
  >(GetCloudinaryConfigDocument, operationOptions);
}
export const GetEntriesDocument = gql`
  query GetEntries {
    entries {
      id
      name
      description
      categories
    }
  }
`;
export class GetEntriesComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetEntriesQuery, GetEntriesVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetEntriesQuery, GetEntriesVariables>
        query={GetEntriesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetEntriesProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetEntriesQuery, GetEntriesVariables>
> &
  TChildProps;
export function GetEntriesHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetEntriesQuery,
        GetEntriesVariables,
        GetEntriesProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetEntriesQuery,
    GetEntriesVariables,
    GetEntriesProps<TChildProps>
  >(GetEntriesDocument, operationOptions);
}
export const GetHtmlConfigDocument = gql`
  query GetHtmlConfig {
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
export class GetHtmlConfigComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetHtmlConfigQuery, GetHtmlConfigVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetHtmlConfigQuery, GetHtmlConfigVariables>
        query={GetHtmlConfigDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetHtmlConfigProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetHtmlConfigQuery, GetHtmlConfigVariables>
> &
  TChildProps;
export function GetHtmlConfigHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetHtmlConfigQuery,
        GetHtmlConfigVariables,
        GetHtmlConfigProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetHtmlConfigQuery,
    GetHtmlConfigVariables,
    GetHtmlConfigProps<TChildProps>
  >(GetHtmlConfigDocument, operationOptions);
}
export const GetLogoConfigDocument = gql`
  query GetLogoConfig {
    logoConfig {
      url
    }
  }
`;
export class GetLogoConfigComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetLogoConfigQuery, GetLogoConfigVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetLogoConfigQuery, GetLogoConfigVariables>
        query={GetLogoConfigDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetLogoConfigProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetLogoConfigQuery, GetLogoConfigVariables>
> &
  TChildProps;
export function GetLogoConfigHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetLogoConfigQuery,
        GetLogoConfigVariables,
        GetLogoConfigProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetLogoConfigQuery,
    GetLogoConfigVariables,
    GetLogoConfigProps<TChildProps>
  >(GetLogoConfigDocument, operationOptions);
}
export const GetTranslationDocument = gql`
  query GetTranslation($language: Language!) {
    translation(language: $language)
  }
`;
export class GetTranslationComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetTranslationQuery, GetTranslationVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetTranslationQuery, GetTranslationVariables>
        query={GetTranslationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetTranslationProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetTranslationQuery, GetTranslationVariables>
> &
  TChildProps;
export function GetTranslationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetTranslationQuery,
        GetTranslationVariables,
        GetTranslationProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetTranslationQuery,
    GetTranslationVariables,
    GetTranslationProps<TChildProps>
  >(GetTranslationDocument, operationOptions);
}
