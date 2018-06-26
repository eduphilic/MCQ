import React, { SFC } from "react";
import styled from "styled";

const StorybookPlaceholderImageBase = styled.img.attrs({
  alt: "Placeholder Image",
  src: "https://via.placeholder.com/350x150?text=Placeholder",
})`
  display: block;
  width: 100%;
  height: 100%;
`;

/**
 * Simple placeholder image. Takes up full width and height of containing
 * element.
 */
export const StorybookPlaceholderImage: SFC<{}> = () => (
  <StorybookPlaceholderImageBase />
);
