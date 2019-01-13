import gql from "graphql-tag";
import { IndexYouTubeVideo, QueryYoutubeVideosResolver } from "~/generated";

export const TypeDefYoutubeVideos = gql`
  extend type Query {
    youtubeVideos: [IndexYouTubeVideo!]!
  }
`;

export const youtubeVideos: QueryYoutubeVideosResolver = async (
  _parent,
  _args,
  context,
) => {
  const { firebaseDatabase: database } = context;

  const entriesRef = database.collection("entries");
  const youtubeVideosRef = database.collection("youtubeVideos");

  const [entriesSnapshot, youtubeVideosSnapshot] = await Promise.all([
    entriesRef.get(),
    youtubeVideosRef.get(),
  ]);

  const entryIds = entriesSnapshot.docs.map(entryDoc => entryDoc.id);

  const youtubeVideosResult: IndexYouTubeVideo[] = youtubeVideosSnapshot.docs
    .map(d => d.data() as IndexYouTubeVideo)
    .map(
      (youtubeVideo): IndexYouTubeVideo => ({
        ...youtubeVideo,
        entryId: youtubeVideo.entryId
          ? entryIds.includes(youtubeVideo.entryId)
            ? youtubeVideo.entryId
            : null
          : null,
      }),
    )
    .sort((a, b) => a.position - b.position);

  return youtubeVideosResult;
};
