// AUTO-GENERATED - DO NOT EDIT
// SCRIPT-> yarn build
// @ts-ignore
import * as models from "./models";

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

export type GetLandingFooterVariables = {};

export type GetLandingFooterQuery = {
  __typename?: "Query";

  htmlConfig: GetLandingFooterHtmlConfig;
};

export type GetLandingFooterHtmlConfig = {
  __typename?: "HtmlConfig";

  landingFooter: string | null;
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
export const GetLandingFooterDocument = gql`
  query GetLandingFooter {
    htmlConfig {
      landingFooter
    }
  }
`;
export class GetLandingFooterComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetLandingFooterQuery, GetLandingFooterVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetLandingFooterQuery, GetLandingFooterVariables>
        query={GetLandingFooterDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetLandingFooterProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetLandingFooterQuery, GetLandingFooterVariables>
> &
  TChildProps;
export function GetLandingFooterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetLandingFooterQuery,
        GetLandingFooterVariables,
        GetLandingFooterProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetLandingFooterQuery,
    GetLandingFooterVariables,
    GetLandingFooterProps<TChildProps>
  >(GetLandingFooterDocument, operationOptions);
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
