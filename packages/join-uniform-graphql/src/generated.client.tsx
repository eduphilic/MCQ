// AUTO-GENERATED - DO NOT EDIT
// SCRIPT-> yarn build
// @ts-ignore
import * as models from "./models";
/** Supported localization languages. */
export enum Language {
  English = "English",
  Hindi = "Hindi",
}

/** A set of localized strings for a language. */
export type Translation = any;

// ====================================================
// Documents
// ====================================================

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
