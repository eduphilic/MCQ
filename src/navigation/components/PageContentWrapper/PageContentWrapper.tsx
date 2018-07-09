import { gutters } from "css";
import React, { SFC } from "react";
import styled from "styled";

export const PageContentWrapper: SFC<{}> = props => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  ${({ theme: { spacing, breakpoints } }) => `
    padding-top: ${spacing.unit * 2}px;

    ${breakpoints.up("sm")} {
      padding-top: ${spacing.unit * 3}px;
    }
  `};

  ${gutters};

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
