import gql from "graphql-tag";

export const TypeDefIndexPageAboutImage = gql`
  # Image and supporting text in index about section.
  type IndexPageAboutImage {
    id: ID!
    # Image URL.
    imageUrl: String!
    # Large text below image.
    title: LocalizedString!
    # Small text below image.
    text: LocalizedString!
  }
`;
