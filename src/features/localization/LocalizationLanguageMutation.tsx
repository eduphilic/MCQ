import gql from "graphql-tag";
import React, { ConsumerProps } from "react";
import { Mutation } from "react-apollo";

const SET_LOCALIZATION_LANGUAGE = gql`
  mutation SetLocalizationLanguage($language: String!) {
    setLocalizationLanguage(language: $language) @client
  }
`;

type Variables = {
  language: "en" | "hi";
};

export const LocalizationLanguageMutation = ({
  children,
}: ConsumerProps<(setLocalizationLanguage: Variables["language"]) => any>) => (
  <Mutation<{}, Variables> mutation={SET_LOCALIZATION_LANGUAGE}>
    {setLocalizationLanguage =>
      children(localizationLanguage =>
        setLocalizationLanguage({
          variables: { language: localizationLanguage },
        }),
      )
    }
  </Mutation>
);
