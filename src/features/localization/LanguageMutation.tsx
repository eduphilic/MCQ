import gql from "graphql-tag";
import React, { ConsumerProps } from "react";
import { Mutation as ApolloMutation } from "react-apollo";
import { SetLanguageMutationArgs } from "../../api";

const SET_LANGUAGE = gql`
  mutation SetLanguage($language: LOCALIZATION_LANGUAGE!) {
    setLanguage(language: $language)
  }
`;

export const LanguageMutation = ({
  children,
}: ConsumerProps<
  (setLanguage: SetLanguageMutationArgs["language"]) => any
>) => (
  <ApolloMutation<{}, SetLanguageMutationArgs> mutation={SET_LANGUAGE}>
    {setLanguage =>
      children(localizationLanguage =>
        setLanguage({
          variables: {
            language: localizationLanguage,
          },
        }),
      )
    }
  </ApolloMutation>
);
