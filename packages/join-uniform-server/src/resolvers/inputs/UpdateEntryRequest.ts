import gql from "graphql-tag";

export const TypeDefUpdateEntryRequest = gql`
  input UpdateEntryRequest {
    name: String!
    logoUrl: String!
    description: String!
  }
`;
