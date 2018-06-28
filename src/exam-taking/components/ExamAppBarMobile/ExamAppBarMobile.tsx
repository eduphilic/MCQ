import { examAppBarBottomRow, examAppBarTopRow } from "common/css/colors";
import { navigationLinksUser } from "common/structures/navigationLinksUser";
import React, { SFC } from "react";
import styled, { withProps } from "styled";
import { DarkTheme } from "theme";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Apps from "@material-ui/icons/Apps";
import Language from "@material-ui/icons/Language";

import { ExamAppBarProps } from "components/ExamAppBar";
import { ExamAppBarTimer } from "components/ExamAppBarTimer";
import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";
import { ExamNavigationStorePlaceholderConsumer } from "../../ExamNavigationStorePlaceholder";
import { ExamQuestionPalettePopup } from "./ExamQuestionPalettePopup";

const dashboardLink = navigationLinksUser.find(
  l => l.titleLocalizationKey === "userLinkDashboard",
);
if (!dashboardLink) {
  throw new Error("Could not find dashboard link for ExamAppBarMobile.");
}

// tslint:disable-next-line:no-empty-interface
export interface ExamAppBarMobileProps extends ExamAppBarProps {}

export const ExamAppBarMobile: SFC<ExamAppBarMobileProps> = props => {
  const { showStartExamButton, onStartExamButtonClick } = props;

  return (
    <ExamNavigationStorePlaceholderConsumer>
      {({ startSubmission }) => (
        <DarkTheme>
          <AppBar position="static" color="inherit">
            <ToolbarHalfHeightDarkBlueBackground>
              <IconButtonGroup position="left">
                <IconButton>{dashboardLink.iconElement}</IconButton>

                <IconButton>
                  <Language />
                </IconButton>
              </IconButtonGroup>

              <AppBarCenterContentWrapper>
                {!showStartExamButton && <ExamAppBarTimer />}
              </AppBarCenterContentWrapper>

              <IconButtonGroup position="right">
                {showStartExamButton && (
                  <StartExamButton onClick={onStartExamButtonClick}>
                    Start Exam
                  </StartExamButton>
                )}

                {!showStartExamButton && (
                  <SubmitExamButton onClick={startSubmission}>
                    Submit Exam
                  </SubmitExamButton>
                )}

                {/* {!showStartExamButton && (
              <>
                <ButtonSpacer />
                <ButtonSpacer />
              </>
            )} */}
              </IconButtonGroup>
            </ToolbarHalfHeightDarkBlueBackground>

            <ToolbarHalfHeightLightBlueBackground>
              <IconButtonGroup position="left">
                <ExamQuestionPalettePopup>
                  <IconButton>
                    <Apps />
                  </IconButton>
                </ExamQuestionPalettePopup>
              </IconButtonGroup>

              <AppBarCenterContentWrapper>
                <Typography>Army Soldier GD Test 1</Typography>
              </AppBarCenterContentWrapper>

              <Typography variant="cardStatCaption">200 MM</Typography>
            </ToolbarHalfHeightLightBlueBackground>
          </AppBar>
        </DarkTheme>
      )}
    </ExamNavigationStorePlaceholderConsumer>
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

const AppBarCenterContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const IconButtonGroup = withProps<{ position: "left" | "right" }>()(styled.div)`
  display: flex;

  ${({ position }) =>
    position === "left"
      ? `
          margin-left: -12px;
        `
      : `
          margin-right: -12px;
        `};
`;

// const ButtonSpacer = styled.div`
//   width: 48px;
// `;

const StartExamButton = styled(TypographyButton).attrs({
  color: "lightGreen",
  variant: "outlined",
})`
  width: 100px;
  min-height: 26px;
  padding: 0;
`;

const SubmitExamButton = styled(StartExamButton).attrs({
  color: "orange",
  variant: "flat",
})``;
