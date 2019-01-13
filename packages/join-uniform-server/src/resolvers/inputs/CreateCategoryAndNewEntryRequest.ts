import gql from "graphql-tag";

export const TypeDefCreateCategoryAndNewEntryRequest = gql`
  input CreateCategoryAndNewEntryRequest {
    categoryName: String!
    categoryEducation: String!
    pricePerPaper: Int!
    entryLogoUrl: String!
    entryName: String!
    entryExplanation: String!
  }
`;
