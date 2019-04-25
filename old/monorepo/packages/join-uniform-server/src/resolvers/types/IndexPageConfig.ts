import gql from "graphql-tag";

export const TypeDefIndexPageConfig = gql`
  # Configuration for the landing page / index page.
  type IndexPageConfig {
    # Always "index-page-config".
    id: ID!
    # The url to the hero image.
    heroBackgroundImageUrl: String!
    # The transparency of the hero image.
    heroBackgroundAlpha: Float!
    # The primary hero text (large top text).
    heroPrimaryText: LocalizedString!
    # List of features below the primary hero text.
    heroFeatures: [LocalizedString!]!
    # Text in the green section below the hero section.
    heroFooterText: LocalizedString!
    # About section title.
    aboutTitle: LocalizedString!
    # Text below the about title.
    aboutText: LocalizedString!
    # Images in the about section.
    aboutImages: [IndexPageAboutImage!]!
  }
`;