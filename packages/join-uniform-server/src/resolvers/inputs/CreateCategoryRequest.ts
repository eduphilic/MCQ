import gql from "graphql-tag";

export const TypeDefCreateCategoryRequest = gql`
  input CreateCategoryRequest {
    name: String!
    education: String!
    pricePerPaperRs: Int!
    entryId: ID!
  }
`;
