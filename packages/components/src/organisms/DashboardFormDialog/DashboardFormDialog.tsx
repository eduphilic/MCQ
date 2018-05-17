import { Formik, FormikConfig } from "formik";
import React, { cloneElement, Component, ReactElement } from "react";
import styled from "styled";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { WithWidthProps } from "@material-ui/core/withWidth";

import { DashboardFormDialogFieldConfig } from "./DashboardFormDialogFieldConfig";
import { DashboardFormDialogFormInput } from "./DashboardFormDialogFormInput";

export type FieldConfigs<Values extends object> = {
  [key in keyof Values]: DashboardFormDialogFieldConfig
};

export interface DashboardFormDialogProps<Values extends object>
  extends Partial<WithWidthProps>,
    FormikConfig<Values> {
  /**
   * Child element that accepts an "onClick" handler.
   */
  children: ReactElement<{ onClick: () => any }>;

  /**
   * Field settings.
   */
  fieldConfigs: FieldConfigs<Values>;

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
      await this.props.onSubmit(values, formikActions);

      formikActions.setSubmitting(false);
      formikActions.resetForm();
      this.setState({ open: false });
    } catch (e) {
      /* tslint:disable-next-line:no-console */
      console.log("Submission error:", e);
    }
  };

  render() {
    const {
      children,
      fieldConfigs,
      fullScreen,
      onSubmit,
      ...rest
    } = this.props;
    const { open } = this.state;

    const buttonWithOnClickHandler = cloneElement(children, {
      onClick: this.handleClickOpen,
    });

    return (
      <>
        {buttonWithOnClickHandler}

        <Formik
          {...rest}
          onSubmit={this.handleSubmit}
          render={api => (
            <DialogSized fullScreen={fullScreen} open={open}>
              <FormFullContainerSize onSubmit={api.handleSubmit}>
                <DialogTitle>Create a New Entry</DialogTitle>

                <DialogContent>
                  {(Object.keys(api.values) as (keyof Values)[]).map(
                    (key, index) => (
                      <DashboardFormDialogFormInput
                        key={key}
                        api={api}
                        fieldKey={key}
                        fieldConfig={fieldConfigs[key]}
                        autoFocus={index === 0}
                      />
                    ),
                  )}
                </DialogContent>

                <DialogActions>
                  <Button type="submit" disabled={api.isSubmitting}>
                    Submit
                  </Button>
                </DialogActions>
              </FormFullContainerSize>
            </DialogSized>
          )}
        />
      </>
    );
  }
}

const DialogSized = styled(Dialog).attrs({ classes: { paper: "paper" } })`
  .paper {
    width: 100%;
  }
`;

const FormFullContainerSize = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

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
