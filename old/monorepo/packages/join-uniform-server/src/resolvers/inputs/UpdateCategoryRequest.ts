import gql from "graphql-tag";

export const TypeDefUpdateCategoryRequest = gql`
  input UpdateCategoryRequest {
    name: String!
    education: String!
    pricePerPaperRs: Int!
  }
`;
