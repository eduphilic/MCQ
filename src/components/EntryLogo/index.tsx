import { entryImages } from "common/structures/entryImages";
import React, { SFC } from "react";
import styled from "styled";

export interface EntryLogoProps {
  className?: string;

  entry: keyof typeof entryImages;
}

/**
 * Provides svg images for the different branches of the military (entry).
 */
export const EntryLogo: SFC<EntryLogoProps> = props => {
  const { className, entry } = props;
  const image = entryImages[entry];

  return <StyledImg className={className} src={image} />;
};

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
