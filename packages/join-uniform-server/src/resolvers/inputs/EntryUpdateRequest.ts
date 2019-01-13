import gql from "graphql-tag";

export const TypeDefEntryUpdateRequest = gql`
  input EntryUpdateRequest {
    name: String!
    logoUrl: String!
    description: String!
  }
`;
