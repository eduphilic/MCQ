import gql from "graphql-tag";

export const TypeDefLogoConfig = gql`
  # Logo image configuration.
  type LogoConfig {
    id: ID!
    # Url of logo image.
    url: String!
  }
`;
