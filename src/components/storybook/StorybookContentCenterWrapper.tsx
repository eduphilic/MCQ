import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import React, { HTMLProps, SFC } from "react";
import styled from "styled";

export type StorybookContentCenterWrapperProps = Omit<
  HTMLProps<HTMLDivElement>,
  "ref"
> & {
  maxWidthPercent?: number;

  centerWrapperProps?: Omit<HTMLProps<HTMLDivElement>, "ref">;
};

/**
 * Wraps ContentCenterWrapper in an outer component for use with Storybook
 * stories. The outer wrapper has a white background and full height/width. It
 * also adds an additional top and bottom padding.
 */
export const StorybookContentCenterWrapper: SFC<
  StorybookContentCenterWrapperProps
> = ({ children, maxWidthPercent, centerWrapperProps, style, ...rest }) => (
  <Wrapper
    {...rest}
    style={{
      ...style,
      ...(maxWidthPercent ? { paddingRight: `${100 - maxWidthPercent}%` } : {}),
    }}
  >
    <ContentCenterWrapper {...centerWrapperProps}>
      {children}
    </ContentCenterWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 16px 0;
  background-color: #fff;
`;
