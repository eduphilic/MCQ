import gql from "graphql-tag";

export const TypeDefEntry = gql`
  # Represents a military service branch (Entry).
  type Entry {
    id: ID!
    name: String!
    logoUrl: String!
    description: String!
    categories: [Category]!
  }
`;
