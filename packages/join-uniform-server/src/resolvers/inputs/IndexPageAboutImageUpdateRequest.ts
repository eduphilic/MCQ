import gql from "graphql-tag";

export const TypeDefIndexPageAboutImageUpdateRequest = gql`
  input IndexPageAboutImageUpdateRequest {
    id: ID!
    imageUrl: String!
    title: LocalizedString!
    text: LocalizedString!
  }
`;
