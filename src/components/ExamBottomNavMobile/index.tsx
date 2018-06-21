import { bottomNavBoxShadow } from "common/css/bottomNavBoxShadow";
import { examAppBarTopRow } from "common/css/colors";
import React, { SFC } from "react";
import styled, { css, withProps } from "styled";
import { AdminAppDrawerTheme } from "theme";

import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Check from "@material-ui/icons/Check";
import DeleteSweep from "@material-ui/icons/DeleteSweep";

// tslint:disable-next-line:no-empty-interface
export interface ExamBottomNavMobileProps {}

export const ExamBottomNavMobile: SFC<ExamBottomNavMobileProps> = props => {
  const {} = props;

  return (
    <AdminAppDrawerTheme>
      <Wrapper>
        <ToolbarHalfHeight>
          <IconButtonLessMargin lessLeftMargin>
            <DeleteSweep />
          </IconButtonLessMargin>

          <Spacer />

          <IconButtonLessMargin lessRightMargin>
            <Check />
          </IconButtonLessMargin>
        </ToolbarHalfHeight>
      </Wrapper>
    </AdminAppDrawerTheme>
  );
};

const toolbarHeight = css`
  height: 32px;
  min-height: 32px;
`;

const Wrapper = styled(Paper).attrs({ square: true })`
  ${toolbarHeight};
  background-color: ${examAppBarTopRow};
  ${bottomNavBoxShadow};
  z-index: 1;
`;

const ToolbarHalfHeight = styled(Toolbar)`
  ${toolbarHeight};
`;

const IconButtonLessMargin = withProps<{
  lessLeftMargin?: boolean;
  lessRightMargin?: boolean;
}>()(styled(IconButton))`
  ${toolbarHeight};
  ${({ lessLeftMargin }) => (lessLeftMargin ? `margin-left: -12px` : "")};
  ${({ lessRightMargin }) => (lessRightMargin ? `margin-right: -12px` : "")};
`;

const Spacer = styled.div`
  flex: 1;
`;
