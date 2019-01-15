import gql from "graphql-tag";

export const TypeDefCreateEntryRequest = gql`
  input CreateEntryRequest {
    name: String!
    explanation: String!
    logoUrl: String!
  }
`;
