import React, { SFC } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";
import { actions } from "../../actions";
import { buttonSelector } from "../../selectors";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { DropdownButton } from "components/DropdownButton";
import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";

type StateProps = {
  showStartExamButton: boolean;
  showSubmitButton: boolean;
};

type DispatchProps = {
  onStartExamButtonClick: () => any;
};

type OwnProps = {};
export { OwnProps as ExamAppBarProps };

type Props = StateProps & DispatchProps & OwnProps;

const ExamAppBar: SFC<Props> = props => {
  const {
    showStartExamButton,
    onStartExamButtonClick,
    showSubmitButton,
  } = props;

  return (
    <AppBar color="inherit" position="static">
      <ToolbarWithButtonMargins>
        <TypographyButton>{"<"} Dashboard</TypographyButton>

        <DropdownButton>
          <Typography variant="buttonBold">English</Typography>
        </DropdownButton>

        <FlexSpacer />

        {showStartExamButton && (
          <TypographyButton color="primary" onClick={onStartExamButtonClick}>
            Start Exam
          </TypographyButton>
        )}

        {showSubmitButton && <TypographyButton>Submit</TypographyButton>}
      </ToolbarWithButtonMargins>
    </AppBar>
  );
};

const ExamAppBarContainer = connect<StateProps, DispatchProps, OwnProps, State>(
  state => ({
    showStartExamButton: buttonSelector(state.examTaking)
      .startExamButtonVisible,
    showSubmitButton: buttonSelector(state.examTaking).submitButtonVisible,
  }),
  {
    onStartExamButtonClick: () => actions.navigateToQuestion(0),
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
