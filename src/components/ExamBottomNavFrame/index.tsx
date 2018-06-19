import { bottomNavBoxShadow } from "common/css/bottomNavBoxShadow";
import { fromToolbarHeight } from "common/css/fromToolbarHeight";
import React, { SFC } from "react";
import styled from "styled";

import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";

import { TypographyButton } from "components/TypographyButton";

// tslint:disable-next-line:no-empty-interface
export interface ExamBottomNavFrameProps {}

export const ExamBottomNavFrame: SFC<ExamBottomNavFrameProps> = props => {
  const { children } = props;

  return (
    <Wrapper>
      <PageContentsWrapper>{children}</PageContentsWrapper>

      <PaperWithBoxShadowUpperDirection>
        <ToolbarWithButtonMargins>
          <TypographyButton>Mark for Review</TypographyButton>
          <TypographyButton>Clear</TypographyButton>

          <ToolbarSpacer />

          <TypographyButton>Previous</TypographyButton>
          <TypographyButton>Next</TypographyButton>
        </ToolbarWithButtonMargins>
      </PaperWithBoxShadowUpperDirection>
    </Wrapper>
  );
};

// Make the page contents the screen height minus the size of both the top and
// bottom nav bars. The base template has top and bottom padding of 24px so we
// subtract the bottom padding to remove the space under the bottom nav bar.
const pageContentsHeight = fromToolbarHeight(
  "height",
  height => `calc(100vh - ${height * 2}px - 24px)`,
);

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: -24px;
`;

const PageContentsWrapper = styled.div`
  padding-bottom: 24px;
  overflow-y: auto;
  ${pageContentsHeight};
`;

const PaperWithBoxShadowUpperDirection = styled(Paper)`
  ${bottomNavBoxShadow};
  z-index: 1;
`;

const ToolbarWithButtonMargins = styled(Toolbar)`
  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const ToolbarSpacer = styled.div`
  flex: 1;
`;
