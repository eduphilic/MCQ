import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Dialog } from "components/Dialog";
import { DialogAppBar } from "components/DialogAppBar";
import { DialogContent } from "components/DialogContent";
import {
  ExamOverviewBluePrint,
  ExamOverviewMarkings,
  ExamOverviewMobile,
} from "features/exam-overview";
import React, { Component } from "react";

type State = {
  open: boolean;
};

export class ExamOverviewDialog extends Component<{}, State> {
  state: State = { open: false };

  private dialogOpenPromise: Promise<void> | null = null;
  private dialogOpenPromiseResolve: (() => void) | null = null;

  render() {
    const { open } = this.state;

    return (
      <Dialog variant="fullScreen" open={open}>
        <DialogAppBar
          title="Soldier Tradesman (Army)"
          closeIcon="back"
          onCloseButtonClick={this.handleDialogClose}
        />
        <DialogContent>
          <Hidden smDown>
            <Grid container spacing={16}>
              <Grid item xs={6}>
                <ExamOverviewBluePrint />
              </Grid>
              <Grid item xs={6}>
                <ExamOverviewMarkings />
              </Grid>
            </Grid>
          </Hidden>

          <Hidden mdUp>
            <ExamOverviewMobile />
          </Hidden>
        </DialogContent>
      </Dialog>
    );
  }

  /**
   * Opens a dialog with the information about the exam of the supplied entry
   * category. It returns a promise that resolves when the dialog closes.
   */
  openDialogForCategory = (_categoryId: string) => {
    if (this.dialogOpenPromise) return this.dialogOpenPromise;

    this.dialogOpenPromise = new Promise(resolve => {
      this.dialogOpenPromiseResolve = resolve;
      this.setState({ open: true });
    });
    return this.dialogOpenPromise;
  };

  private handleDialogClose = () => {
    this.setState({ open: false }, () => {
      if (this.dialogOpenPromiseResolve) this.dialogOpenPromiseResolve();
      this.dialogOpenPromiseResolve = null;
      if (this.dialogOpenPromise) this.dialogOpenPromise = null;
    });
  };
}
