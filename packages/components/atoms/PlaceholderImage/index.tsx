import React, { SFC } from "react";
import styled from "styled";

const PlaceholderImageBase = styled.img.attrs({
  alt: "Placeholder Image",
  src: "https://via.placeholder.com/350x150",
})`
  display: block;
  width: 100%;
  height: 100%;
`;

/**
 * Simple placeholder image. Takes up full width and height of containing
 * element.
 */
export const PlaceholderImage: SFC<{}> = () => <PlaceholderImageBase />;
