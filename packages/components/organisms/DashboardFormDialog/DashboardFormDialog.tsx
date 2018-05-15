import React, { cloneElement, Component, ReactElement } from "react";

import Dialog, { DialogContent, DialogTitle } from "material-ui/Dialog";
import withMobileDialog from "material-ui/Dialog/withMobileDialog";
import { WithWidthProps } from "material-ui/utils/withWidth";

export interface DashboardFormDialogProps extends Partial<WithWidthProps> {
  /**
   * Child element that accepts an "onClick" handler.
   */
  children: ReactElement<{ onClick: () => any }>;

  /**
   * Injected by the Material UI utility "withMobileDialog". It controls whether
   * or not the dialog is displayed full screen or not. This is used to provide
   * a full screen input form on mobile.
   */
  fullScreen?: boolean;
}

interface DashboardFormDialogState {
  open: boolean;
}

export const DashboardFormDialog = withMobileDialog<DashboardFormDialogProps>()(
  class extends Component<DashboardFormDialogProps, DashboardFormDialogState> {
    state: DashboardFormDialogState = {
      open: false,
    };

    handleClickOpen = () => this.setState({ open: true });

    render() {
      const { children, fullScreen } = this.props;
      const { open } = this.state;

      const buttonWithOnClickHandler = cloneElement(children, {
        onClick: this.handleClickOpen,
      });

      return (
        <>
          {buttonWithOnClickHandler}

          <Dialog fullScreen={fullScreen} open={open}>
            <DialogTitle>Create a New Entry</DialogTitle>
            <DialogContent>
              <div>Dialog Content</div>
            </DialogContent>
          </Dialog>
        </>
      );
    }
  },
);
