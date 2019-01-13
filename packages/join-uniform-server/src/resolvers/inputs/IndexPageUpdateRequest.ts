import gql from "graphql-tag";

export const TypeDefIndexPageUpdateRequest = gql`
  input IndexPageUpdateRequest {
    heroBackgroundImageUrl: String!
    heroBackgroundAlpha: Float!
    heroPrimaryTextEnglish: String!
    heroPrimaryTextHindi: String
    heroFeatures: [LocalizedString!]!
    aboutTitleEnglish: String!
    aboutTitleHindi: String
    aboutTextEnglish: String!
    aboutTextHindi: String
    aboutImages: [IndexPageAboutImageUpdateRequest!]!
    indexCards: [IndexPageIndexCardUpdateRequest!]!
  }
`;
