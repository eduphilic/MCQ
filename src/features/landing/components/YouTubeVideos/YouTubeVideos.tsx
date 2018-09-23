import ButtonBase from "@material-ui/core/ButtonBase";
import { Typography } from "components/Typography";
import React, { SFC } from "react";
import Loadable from "react-loadable";
import styled from "styled";

import { fetchVideos, YouTubeVideoList } from "./client";
import YouTubeSubscribeOptimizedPng from "./YouTubeSubscribeOptimized.png";

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
        <HeaderWrapper>
          <Header>Our Information Videos on Defense Jobs</Header>
          <YouTubeSubscriptionButton />
        </HeaderWrapper>
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

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 32px;
  background-color: #5cb4d0;
`;

const Header = styled(Typography)`
  font-size: 26px;
  font-weight: 600;
  color: #fff;
`;

const YouTubeSubscriptionButton = styled<{ className?: string }>(
  ({ className }) => (
    <ButtonBase
      className={className}
      component="a"
      href="https://www.youtube.com/channel/UCegkxRhEtHGlE60RAo4ZwSg"
      target="_blank"
    >
      <span className="background-image" />
    </ButtonBase>
  ),
)`
  position: absolute;
  width: 96px;
  height: 96px;
  top: 0%;
  left: 50%;
  transform: translateX(340px);

  @media (max-width: 999px) {
    display: none;
  }

  & .background-image {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url(${YouTubeSubscribeOptimizedPng});
    background-size: cover;
    background-position: center;
  }
`;
