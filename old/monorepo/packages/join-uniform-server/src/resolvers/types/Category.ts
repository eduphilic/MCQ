import gql from "graphql-tag";

export const TypeDefCategory = gql`
  # Represents an Entry Category.
  type Category {
    id: ID!
    name: String!
    education: String!
    pricePerPaperRs: Int!
    activated: Boolean!
  }
`;
