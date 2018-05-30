import React, { cloneElement, Component, ReactElement } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Typography } from "../../atoms/Typography";

export interface TestPreviewFieldsSectionSubjectTopic {
  topicName: string;
  topicTotalQuestions: string;
}

export interface TestPreviewFieldsSectionSubject {
  subjectName: string;

  subjectTopics: TestPreviewFieldsSectionSubjectTopic[];
}

export interface TestPreviewFieldsSection {
  sectionName: string;
  sectionTotalMarks: string;
  sectionPassingMarks: string;
  sectionDifficultyPercentageEasy: string;
  sectionDifficultyPercentageMedium: string;
  sectionDifficultyPercentageHard: string;

  sectionSubjects: TestPreviewFieldsSectionSubject[];
}

export interface TestPreviewFields {
  testName: string;
  testTotalMarks: string;
  testPassingMarks: string;
  testMarksCorrectAnswer: string;
  testMarksIncorrectAnswer: string;
  testDuration: string;

  testSections: TestPreviewFieldsSection[];
}

export interface TestPreviewDialogProps {
  /**
   * React element to attach an onClick handler. When the provided element is
   * clicked, the test preview dialog will be displayed.
   */
  children: ReactElement<{ onClick: () => any }>;
}

interface TestPreviewDialogState {
  open: boolean;
}

/**
 * For use in the Admin Dashboard. Displays a preview of an existing test or one
 * being developed.
 */
export class TestPreviewDialog extends Component<
  TestPreviewDialogProps,
  TestPreviewDialogState
> {
  state: TestPreviewDialogState = {
    open: false,
  };

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  render() {
    const { children } = this.props;
    const { open } = this.state;

    const childWithOnClickEvent = cloneElement(children, {
      onClick: this.handleOpen,
    });

    return (
      <>
        {childWithOnClickEvent}

        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>
            <Typography variant="cardTitle">Test Preview</Typography>
          </DialogTitle>
        </Dialog>
      </>
    );
  }
}
