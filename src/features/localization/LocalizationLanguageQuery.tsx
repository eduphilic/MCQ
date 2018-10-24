import gql from "graphql-tag";
import React, { ConsumerProps } from "react";
import { Query } from "react-apollo";
import { LocalizationSupportedLanguages } from "../../models";

const GET_LOCALIZATION_LANGUAGE = gql`
  query GetLocalizationLanguage {
    localizationLanguage @client
  }
`;

type Response = {
  localizationLanguage: LocalizationSupportedLanguages;
};

export const LocalizationLanguageQuery = ({
  children,
}: ConsumerProps<LocalizationSupportedLanguages>) => (
  <Query<Response> query={GET_LOCALIZATION_LANGUAGE}>
    {({ data }) => children(data!.localizationLanguage)}
  </Query>
);
