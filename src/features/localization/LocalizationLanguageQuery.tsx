import gql from "graphql-tag";
import React, { ConsumerProps } from "react";
import { Query } from "react-apollo";
import { Localization } from "../../models";

const GET_LOCALIZATION_LANGUAGE = gql`
  query GetLocalizationLanguage {
    localization @client {
      localizationLanguage
    }
  }
`;

type Response = {
  localization: Localization;
};

export const LocalizationLanguageQuery = ({
  children,
}: ConsumerProps<"en" | "hi">) => (
  <Query<Response> query={GET_LOCALIZATION_LANGUAGE}>
    {({ data }) =>
      children(data!.localization.localizationLanguage as "en" | "hi")
    }
  </Query>
);
