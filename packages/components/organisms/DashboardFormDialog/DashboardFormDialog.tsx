import { FormikConfig } from "formik";
import React, { cloneElement, Component, ReactElement } from "react";

import Dialog, { DialogContent, DialogTitle } from "material-ui/Dialog";
import withMobileDialog from "material-ui/Dialog/withMobileDialog";
import { WithWidthProps } from "material-ui/utils/withWidth";

export interface DashboardFormDialogProps<Values extends object>
  extends Partial<WithWidthProps> {
  /**
   * Child element that accepts an "onClick" handler.
   */
  children: ReactElement<{ onClick: () => any }>;

  formikConfig: FormikConfig<Values>;

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

class DashboardFormDialogBase<Values extends object> extends Component<
  DashboardFormDialogProps<Values>,
  DashboardFormDialogState
> {
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
}

// Wrap the base class in the responsiveness utility from Material UI and make
// use of the typing information for the values.
export const DashboardFormDialog = <Values extends object>(
  props: DashboardFormDialogProps<Values>,
) => {
  const Composed = withMobileDialog<DashboardFormDialogProps<Values>>()(
    DashboardFormDialogBase,
  );

  return <Composed {...props} />;
};
