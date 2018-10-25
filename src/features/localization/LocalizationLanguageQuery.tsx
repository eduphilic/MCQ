import gql from "graphql-tag";
import React, { ConsumerProps } from "react";
import { ClientState } from "../../ClientState";
import { QueryWithLoading } from "../../components/QueryWithLoading";
import { LocalizationSupportedLanguages } from "../../models";

const GET_LOCALIZATION_LANGUAGE = gql`
  query GetLocalizationLanguage {
    localization @client {
      language
    }
  }
`;

type Response = Pick<ClientState, "localization">;

export const LocalizationLanguageQuery = ({
  children,
}: ConsumerProps<LocalizationSupportedLanguages>) => (
  <QueryWithLoading<Response> query={GET_LOCALIZATION_LANGUAGE}>
    {({ data }) => children(data!.localization.language)}
  </QueryWithLoading>
);
