import gql from "graphql-tag";
import React, { ConsumerProps } from "react";
import { Mutation } from "react-apollo";
import { LocalizationSupportedLanguages } from "../../models";

const SET_LOCALIZATION_LANGUAGE = gql`
  mutation SetLocalizationLanguage($language: LocalizationLanguage!) {
    setLocalizationLanguage(language: $language) @client
  }
`;

type Variables = {
  language: LocalizationSupportedLanguages;
};

export const LocalizationLanguageMutation = ({
  children,
}: ConsumerProps<
  (setLocalizationLanguage: LocalizationSupportedLanguages) => any
>) => (
  <Mutation<{}, Variables> mutation={SET_LOCALIZATION_LANGUAGE}>
    {setLocalizationLanguage =>
      children(localizationLanguage =>
        setLocalizationLanguage({
          variables: {
            language: localizationLanguage,
          },
        }),
      )
    }
  </Mutation>
);
