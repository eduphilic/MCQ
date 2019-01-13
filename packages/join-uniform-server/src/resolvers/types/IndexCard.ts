import gql from "graphql-tag";

export const TypeDefIndexCard = gql`
  # One of the Index Cards on main landing page.
  type IndexCard {
    # Same as the id for the Entry the IndexCard represents.
    id: ID!
    title: String!
    categories: [IndexCardCategory!]!
    entryLogoUrl: String!
    colorBlock: String!
    colorCategoryBackground: String!
    colorLogoBackground: String!
    colorTitle: String!
  }
`;
