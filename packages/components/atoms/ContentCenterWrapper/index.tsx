import React, { SFC } from "react";
import styled from "styled";

const ContentCenterWrapperBase = styled.div`
  width: 100%;
  max-width: ${props => props.theme.breakpoints.values.lg}px;
  padding: 0 ${props => props.theme.spacing.unit * 2}px;
  margin: 0 auto;
`;

interface Props {
  className?: string;
}

/**
 * Container with a maximum width, centered on the screen. Includes inner
 * padding.
 */
export const ContentCenterWrapper: SFC<Props> = ({ children, className }) => (
  <ContentCenterWrapperBase className={className}>
    {children}
  </ContentCenterWrapperBase>
);
