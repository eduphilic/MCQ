import gql from "graphql-tag";

export const TypeDefUpdateIndexPageRequest = gql`
  input UpdateIndexPageRequest {
    heroBackgroundImageUrl: String!
    heroBackgroundAlpha: Float!
    heroPrimaryTextEnglish: String!
    heroPrimaryTextHindi: String
    heroFeatures: [LocalizedString!]!
    heroFooterTextEnglish: String!
    heroFooterTextHindi: String
    aboutTitleEnglish: String!
    aboutTitleHindi: String
    aboutTextEnglish: String!
    aboutTextHindi: String
    aboutImages: [UpdateIndexPageAboutImageRequest!]!
  }

  input UpdateIndexPageAboutImageRequest {
    id: ID!
    imageUrl: String!
    title: LocalizedString!
    text: LocalizedString!
  }
`;
