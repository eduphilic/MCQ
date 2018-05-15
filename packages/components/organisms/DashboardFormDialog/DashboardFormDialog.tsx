import { Formik, FormikConfig } from "formik";
import React, { cloneElement, Component, ReactElement } from "react";

import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "material-ui/Dialog";
import withMobileDialog from "material-ui/Dialog/withMobileDialog";
import { WithWidthProps } from "material-ui/utils/withWidth";

export interface DashboardFormDialogProps<Values extends object>
  extends Partial<WithWidthProps> {
  /**
   * Child element that accepts an "onClick" handler.
   */
  children: ReactElement<{ onClick: () => any }>;

  /**
   * Form validation configuration.
   *
   * The onSubmit handler is wrapped. It closed the dialog on successful
   * resolution of the onSubmit promise.
   */
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

  handleSubmit: FormikConfig<Values>["onSubmit"] = async (
    values,
    formikActions,
  ) => {
    try {
      await this.props.formikConfig.onSubmit(values, formikActions);

      this.setState({ open: false });
    } catch (e) {
      /* tslint:disable-next-line:no-console */
      console.log("Submission error:", e);
    }
  };

  render() {
    const { children, fullScreen, formikConfig } = this.props;
    const { open } = this.state;

    const buttonWithOnClickHandler = cloneElement(children, {
      onClick: this.handleClickOpen,
    });

    const formikConfigWithSubmitHook: FormikConfig<Values> = {
      ...formikConfig,
      onSubmit: this.handleSubmit,
    };

    return (
      <>
        {buttonWithOnClickHandler}

        <Formik
          {...formikConfigWithSubmitHook}
          render={api => (
            <Dialog fullScreen={fullScreen} open={open}>
              <DialogTitle>Create a New Entry</DialogTitle>

              <DialogContent>{/* */}</DialogContent>

              <DialogActions>
                <Button
                  onClick={api.handleSubmit as any}
                  disabled={api.isSubmitting}
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          )}
        />
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
