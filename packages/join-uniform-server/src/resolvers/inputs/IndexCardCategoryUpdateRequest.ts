import gql from "graphql-tag";

export const TypeDefIndexCardCategoryUpdateRequest = gql`
  input IndexCardCategoryUpdateRequest {
    categoryId: ID!
    visible: Boolean!
  }
`;
