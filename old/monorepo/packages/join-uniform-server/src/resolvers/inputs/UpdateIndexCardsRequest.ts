import gql from "graphql-tag";

export const TypeDefUpdateIndexCardsRequest = gql`
  input UpdateIndexCardsRequest {
    # Same as the id for the Entry the IndexCard represents.
    id: ID!
    categories: [UpdateIndexCardsCategoriesRequest!]!
    colorBlock: String!
    colorCategoryBackground: String!
    colorLogoBackground: String!
    colorTitle: String!
  }
`;
