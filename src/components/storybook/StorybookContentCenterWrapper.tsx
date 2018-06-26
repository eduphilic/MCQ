import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import React, { HTMLProps, SFC } from "react";
import styled from "styled";

export type StorybookContentCenterWrapperProps = Omit<
  HTMLProps<HTMLDivElement>,
  "ref"
> & {
  contentCenterWrapperProps?: Omit<HTMLProps<HTMLDivElement>, "ref">;
};

/**
 * Wraps ContentCenterWrapper in an outer component for use with Storybook
 * stories. The outer wrapper has a white background and full height/width. It
 * also adds an additional top padding.
 */
export const StorybookContentCenterWrapper: SFC<
  StorybookContentCenterWrapperProps
> = ({ children, contentCenterWrapperProps, ...rest }) => (
  <Wrapper {...rest}>
    <ContentCenterWrapper {...contentCenterWrapperProps}>
      {children}
    </ContentCenterWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 16px;
  background-color: #fff;
`;
