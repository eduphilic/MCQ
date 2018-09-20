import React, { SFC } from "react";
import Loadable from "react-loadable";

import { fetchVideos, YouTubeVideoList } from "./client";

/* tslint:disable-next-line:no-console */
// console.log("googleYouTubeApiKey", googleYouTubeApiKey);

export type YouTubeVideosProps = {
  videos: YouTubeVideoList;
};

const YouTubeVideos: SFC<YouTubeVideosProps> = props => {
  const { videos } = props;

  /* tslint:disable-next-line:no-console */
  console.log("videos", videos);

  return (
    <>
      <div>
        {videos.map(video => (
          <p key={video.contentDetails.videoId}>
            {video.snippet.position + 1}. {video.snippet.title}
          </p>
        ))}
      </div>
    </>
  );
};

const LoadableYouTubeVideos = Loadable({
  loading: () => null,
  loader: () => fetchVideos(),
  render: videos => {
    return <YouTubeVideos videos={videos} />;
  },
});

export { LoadableYouTubeVideos as YouTubeVideos };
