import gql from "graphql-tag";
import React, { ConsumerProps } from "react";
import { LocalizationLanguage, Query } from "../../api";
import { QueryWithLoading } from "../../components/QueryWithLoading";

const GET_LANGUAGE = gql`
  query GetLanguage {
    language
  }
`;

type Response = Pick<Query, "language">;

export const LanguageQuery = ({
  children,
}: ConsumerProps<LocalizationLanguage>) => (
  <QueryWithLoading<Response> query={GET_LANGUAGE}>
    {({ data }) => children(data.language)}
  </QueryWithLoading>
);
