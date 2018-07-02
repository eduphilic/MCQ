import { examAppBarBottomRow, examAppBarTopRow } from "common/css/colors";
import React, { SFC } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled, { withProps } from "styled";
import { DarkTheme } from "theme";
import { actions } from "../../actions";
import { buttonSelector } from "../../selectors";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Apps from "@material-ui/icons/Apps";
import Dashboard from "@material-ui/icons/Dashboard";
import Language from "@material-ui/icons/Language";

import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";

import { ExamAppBarTimer } from "../ExamAppBarTimer";
import { ExamQuestionPalettePopup } from "./ExamQuestionPalettePopup";

type StateProps = {
  showSubmissionSummaryScreen: boolean;
  showStartExamButton: boolean;
};

type DispatchProps = {
  onStartExamButtonClick: () => void;
  onSubmitButtonClick: () => void;
};

type OwnProps = {};
export { OwnProps as ExamAppBarMobileProps };

type Props = StateProps & DispatchProps & OwnProps;

const ExamAppBarMobile: SFC<Props> = props => {
  const {
    showSubmissionSummaryScreen,
    showStartExamButton,
    onStartExamButtonClick,
    onSubmitButtonClick,
  } = props;

  return (
    <DarkTheme>
      <AppBar position="static" color="inherit">
        <ToolbarHalfHeightDarkBlueBackground>
          <IconButtonGroup position="left">
            <IconButton>
              <Dashboard />
            </IconButton>

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

            {!showStartExamButton &&
              !showSubmissionSummaryScreen && (
                <SubmitExamButton onClick={onSubmitButtonClick}>
                  Submit Exam
                </SubmitExamButton>
              )}

            {showSubmissionSummaryScreen && (
              <>
                <ButtonSpacer />
                <ButtonSpacer />
              </>
            )}
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
  );
};

const ExamAppBarMobileContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  state => ({
    showSubmissionSummaryScreen: state.examTaking.showSubmissionSummaryScreen,
    showStartExamButton: buttonSelector(state.examTaking)
      .startExamButtonVisible,
  }),
  {
    onStartExamButtonClick: () => actions.navigateToQuestion(0),
    onSubmitButtonClick: actions.displaySubmissionSummaryScreen,
  },
)(ExamAppBarMobile);

export { ExamAppBarMobileContainer as ExamAppBarMobile };

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

const ButtonSpacer = styled.div`
  width: 48px;
`;

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