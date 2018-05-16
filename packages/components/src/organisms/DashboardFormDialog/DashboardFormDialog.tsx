import { Formik, FormikConfig } from "formik";
import React, {
  cloneElement,
  Component,
  ComponentType,
  ReactElement,
} from "react";
import styled from "styled";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { WithWidthProps } from "@material-ui/core/withWidth";

export type DashboardFormDialogInputElementTypes<
  Values extends object
> = Record<keyof Values, "text">;

export interface FieldConfig {
  /**
   * Field type, used to render the proper input component for the field.
   */
  inputType: "text";

  /**
   * Label for the input.
   */
  inputLabel: string;

  /**
   * Placeholder text for input.
   */
  placeholder?: string;
}

export type FieldConfigs<Values extends object> = {
  [key in keyof Values]: FieldConfig
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
            <Dialog fullScreen={fullScreen} open={open}>
              <FormFullContainerSize onSubmit={api.handleSubmit}>
                <DialogTitle>Create a New Entry</DialogTitle>

                <DialogContent>
                  {(Object.keys(api.values) as (keyof Values)[]).map(
                    (key, index) => {
                      let InputComponent: ComponentType<any>;

                      switch (fieldConfigs[key].inputType) {
                        case "text":
                          InputComponent = TextField;
                          break;
                        default:
                          return null;
                      }

                      const type = fieldConfigs[key].inputType;

                      return (
                        <InputComponent
                          key={key}
                          type={type}
                          name={key}
                          required
                          autoFocus={index === 0}
                          value={api.values[key]}
                          onChange={api.handleChange}
                          onBlur={api.handleBlur}
                          label={
                            api.errors[key] || fieldConfigs[key].inputLabel
                          }
                          placeholder={fieldConfigs[key].placeholder}
                          error={Boolean(api.errors[key])}
                          fullWidth
                          margin="dense"
                        />
                      );
                    },
                  )}
                </DialogContent>

                <DialogActions>
                  <Button type="submit" disabled={api.isSubmitting}>
                    Submit
                  </Button>
                </DialogActions>
              </FormFullContainerSize>
            </Dialog>
          )}
        />
      </>
    );
  }
}

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
