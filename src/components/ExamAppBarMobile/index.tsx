import { examAppBarBottomRow, examAppBarTopRow } from "common/css/colors";
import { navigationLinksUser } from "common/structures/navigationLinksUser";
import React, { SFC } from "react";
import styled, { withProps } from "styled";
import { DarkTheme } from "theme";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Language from "@material-ui/icons/Language";

import { ExamAppBarTimer } from "components/ExamAppBarTimer";
// import { Typography } from "components/Typography";

const dashboardLink = navigationLinksUser.find(
  l => l.titleLocalizationKey === "userLinkDashboard",
);
if (!dashboardLink) {
  throw new Error("Could not find dashboard link for ExamAppBarMobile.");
}

// tslint:disable-next-line:no-empty-interface
export interface ExamAppBarMobileProps {}

export const ExamAppBarMobile: SFC<ExamAppBarMobileProps> = props => {
  const {} = props;

  return (
    <DarkTheme>
      <AppBar position="static" color="inherit">
        <ToolbarHalfHeightDarkBlueBackground>
          <IconButtonGroup position="left">
            <IconButton>{dashboardLink.iconElement}</IconButton>

            <IconButton>
              <Language />
            </IconButton>
          </IconButtonGroup>

          <ExamAppBarTimer />
        </ToolbarHalfHeightDarkBlueBackground>

        <ToolbarHalfHeightLightBlueBackground>
          <div>placeholder</div>
        </ToolbarHalfHeightLightBlueBackground>
      </AppBar>
    </DarkTheme>
  );
};

const ToolbarHalfHeight = styled(Toolbar)`
  height: 32px;
  min-height: 32px;
`;

const ToolbarHalfHeightDarkBlueBackground = styled(ToolbarHalfHeight)`
  background-color: ${examAppBarTopRow};
`;

const ToolbarHalfHeightLightBlueBackground = styled(ToolbarHalfHeight)`
  background-color: ${examAppBarBottomRow};
`;

const IconButtonGroup = withProps<{ position: "left" | "right" }>()(styled.div)`
  display: flex;

  ${({ position }) =>
    position === "left"
      ? `
          margin-left: -12px;
          margin-right: 20px;
        `
      : ""};
`;
