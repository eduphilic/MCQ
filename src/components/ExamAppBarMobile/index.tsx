import { navigationLinksUser } from "common/structures/navigationLinksUser";
import React, { SFC } from "react";
import styled, { withProps } from "styled";
import { DarkTheme } from "theme";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Language from "@material-ui/icons/Language";

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
        <Toolbar>
          <IconButtonGroup position="left">
            <IconButton>{dashboardLink.iconElement}</IconButton>

            <IconButton>
              <Language />
            </IconButton>
          </IconButtonGroup>
        </Toolbar>
      </AppBar>
    </DarkTheme>
  );
};

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
