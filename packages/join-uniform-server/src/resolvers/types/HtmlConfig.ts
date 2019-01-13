import gql from "graphql-tag";

export const TypeDefHtmlConfig = gql`
  # Configuration for the html document sent in response to all requests.
  type HtmlConfig {
    # Google Analytics ID.
    googleAnalyticsId: String
    # Meta "keywords" tag.
    metaKeywords: String
    # Meta "description" tag.
    metaDescription: String
    # Meta "author" tag.
    metaAuthor: String
    # Meta "abstract" tag.
    metaAbstract: String
    # Meta "copyright" tag.
    metaCopyright: String
  }
`;
