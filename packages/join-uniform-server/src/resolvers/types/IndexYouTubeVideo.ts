import gql from "graphql-tag";

export const TypeDefIndexYouTubeVideo = gql`
  type IndexYouTubeVideo {
    # Will contain the Entry ID that the video corresponds to assuming that the
    # Entry has not been removed.
    entryId: ID

    # Order of appearance.
    position: Int!

    youtubeUrl: String!
    title: LocalizedString!
  }
`;
