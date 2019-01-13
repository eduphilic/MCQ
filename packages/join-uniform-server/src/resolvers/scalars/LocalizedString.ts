import gql from "graphql-tag";

export const TypeDefLocalizedString = gql`
  # Represents a localized string.
  # The Hindi field is optional.
  #
  # Fields:
  # - en: String!
  # - hi: String
  scalar LocalizedString
`;
