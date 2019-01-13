import gql from "graphql-tag";

export const TypeDefIndexPageIndexCardUpdateRequest = gql`
  input IndexPageIndexCardUpdateRequest {
    entryId: ID!
    colorBlock: String!
    colorCategoryBackground: String!
    colorLogoBackground: String!
    colorTitle: String!
    categories: [IndexCardCategoryUpdateRequest!]!
  }
`;
