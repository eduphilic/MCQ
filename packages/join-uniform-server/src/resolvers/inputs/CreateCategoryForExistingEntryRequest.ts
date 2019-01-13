import gql from "graphql-tag";

export const TypeDefCreateCategoryForExistingEntryRequest = gql`
  input CreateCategoryForExistingEntryRequest {
    categoryName: String!
    categoryEducation: String!
    pricePerPaper: Int!
    existingEntryId: String!
  }
`;
