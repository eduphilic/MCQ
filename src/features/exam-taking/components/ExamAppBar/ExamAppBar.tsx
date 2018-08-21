import React, { SFC } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";
import { actions } from "../../actions";
import { buttonSelector } from "../../selectors";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { TypographyButton } from "componentsV0/TypographyButton";
import { LanguageToggleButton } from "features/localization";

type StateProps = {
  showStartExamButton: boolean;
  showSubmitButton: boolean;
};

type DispatchProps = {
  onStartExamButtonClick: () => any;
  onSubmitExamButtonClick: () => any;
};

type OwnProps = {};
export { OwnProps as ExamAppBarProps };

type Props = StateProps & DispatchProps & OwnProps;

const ExamAppBar: SFC<Props> = props => {
  const {
    showStartExamButton,
    showSubmitButton,
    onStartExamButtonClick,
    onSubmitExamButtonClick,
  } = props;

  return (
    <AppBar color="inherit" position="static">
      <ToolbarWithButtonMargins>
        <TypographyButton>{"<"} Dashboard</TypographyButton>

        {showStartExamButton && (
          <TypographyButton color="primary" onClick={onStartExamButtonClick}>
            Start Exam
          </TypographyButton>
        )}

        {showSubmitButton && (
          <TypographyButton color="orange" onClick={onSubmitExamButtonClick}>
            Submit Exam
          </TypographyButton>
        )}

        <FlexSpacer />

        <LanguageToggleButton />
      </ToolbarWithButtonMargins>
    </AppBar>
  );
};

const ExamAppBarContainer = connect<StateProps, DispatchProps, OwnProps, State>(
  ({ examTaking }): StateProps => ({
    showStartExamButton: buttonSelector(examTaking).startExamButtonVisible,
    showSubmitButton:
      !examTaking.showOverviewScreen &&
      !examTaking.showSubmissionSummaryScreen &&
      !buttonSelector(examTaking).submitButtonVisible,
  }),
  {
    onStartExamButtonClick: () => actions.navigateToQuestion(0),
    onSubmitExamButtonClick: actions.displaySubmissionSummaryScreen,
  },
)(ExamAppBar);
export { ExamAppBarContainer as ExamAppBar };

const ToolbarWithButtonMargins = styled(Toolbar)`
  > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const FlexSpacer = styled.div`
  flex: 1;
`;
