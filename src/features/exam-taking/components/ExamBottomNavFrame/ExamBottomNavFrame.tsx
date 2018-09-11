import { bottomNavBoxShadow, fromToolbarHeight } from "css";
import React, { SFC } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";
import { actions } from "../../actions";
import { buttonSelector } from "../../selectors";
import { FeatureKey } from "../../types/FeatureKey";

import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";

import { TypographyButton } from "componentsV0/TypographyButton";

type StateProps = {
  previousButtonEnabled: boolean;
  showSubmitExamButton: boolean;
};

type DispatchProps = {
  onPreviousButtonClick: () => any;
  onNextButtonClick: () => any;
  onSubmitExamButtonClick: () => any;
};

type OwnProps = FeatureKey;
export type ExamBottomNavFrameProps = OwnProps;

type Props = StateProps & DispatchProps & OwnProps;

const ExamBottomNavFrame: SFC<Props> = props => {
  const {
    children,
    previousButtonEnabled,
    showSubmitExamButton,
    onPreviousButtonClick,
    onNextButtonClick,
    onSubmitExamButtonClick,
  } = props;

  return (
    <Wrapper>
      <PageContentsWrapper>{children}</PageContentsWrapper>

      <PaperWithBoxShadowUpperDirection>
        <ToolbarWithButtonMargins>
          <TypographyButton>Mark for Review</TypographyButton>
          <TypographyButton>Clear</TypographyButton>

          <ToolbarSpacer />

          <TypographyButton
            disabled={!previousButtonEnabled}
            onClick={onPreviousButtonClick}
          >
            Previous
          </TypographyButton>

          {!showSubmitExamButton ? (
            <TypographyButton onClick={onNextButtonClick}>
              Next
            </TypographyButton>
          ) : (
            <TypographyButton
              color="yellow"
              filled
              onClick={onSubmitExamButtonClick}
            >
              Submit Exam
            </TypographyButton>
          )}
        </ToolbarWithButtonMargins>
      </PaperWithBoxShadowUpperDirection>
    </Wrapper>
  );
};

const ExamBottomNavFrameContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  (store, { featureKey }): StateProps => ({
    previousButtonEnabled: buttonSelector(store[featureKey])
      .previousButtonEnabled,
    showSubmitExamButton: buttonSelector(store[featureKey]).submitButtonVisible,
  }),
  {
    onPreviousButtonClick: actions.navigateToPreviousQuestion,
    onNextButtonClick: actions.navigateToNextQuestion,
    onSubmitExamButtonClick: actions.displaySubmissionSummaryScreen,
  },
)(ExamBottomNavFrame);
export { ExamBottomNavFrameContainer as ExamBottomNavFrame };

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
