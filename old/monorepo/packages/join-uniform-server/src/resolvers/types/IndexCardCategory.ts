import gql from "graphql-tag";

export const TypeDefIndexCardCategory = gql`
  type IndexCardCategory {
    # Id of the category.
    id: ID!
    title: String!
    visible: Boolean!
  }
`;
