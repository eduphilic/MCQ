import gql from "graphql-tag";

export const TypeDefCategoryUpdateRequest = gql`
  input CategoryUpdateRequest {
    name: String!
    education: String!
    pricePerPaperRs: Int!
  }
`;
