import gql from "graphql-tag";

export const TypeDefUpdateIndexCardsCategoriesRequest = gql`
  input UpdateIndexCardsCategoriesRequest {
    # Id of the category.
    id: ID!
    visible: Boolean!
  }
`;
