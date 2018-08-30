import { Dialog } from "components/Dialog";
import { DialogAppBar } from "components/DialogAppBar";
import produce from "immer";
import React, { Component } from "react";

export type ExamReviewDialogProps = {};

type ExamReviewDialogState = {
  open: boolean;
  view: "home" | "question";
};

export class ExamReviewDialog extends Component<
  ExamReviewDialogProps,
  ExamReviewDialogState
> {
  state: ExamReviewDialogState = {
    open: false,
    view: "home",
  };

  render() {
    const { open } = this.state;

    return (
      <Dialog variant="fullScreen" open={open}>
        <DialogAppBar
          title=""
          onCloseButtonClick={this.handleCloseButtonClick}
        />
        <div>Placeholder</div>
      </Dialog>
    );
  }

  // TODO: Accept argument specifying which exam to review.
  openDialogForExam = () => {
    this.setState({ open: true });
  };

  private handleCloseButtonClick = () => {
    this.setState(state =>
      produce(state, draftState => {
        if (draftState.view === "question") {
          draftState.view = "home";
          return draftState;
        }

        draftState.open = false;
        return draftState;
      }),
    );
  };
}
