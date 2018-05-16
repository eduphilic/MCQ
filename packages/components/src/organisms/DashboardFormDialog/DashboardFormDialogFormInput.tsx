import { FormikProps } from "formik";
import React, { Component, ComponentType } from "react";

import TextField from "@material-ui/core/TextField";

import { DashboardFormDialogFieldConfig } from "./DashboardFormDialogFieldConfig";
import { DashboardFormDialogFormInputCommonProps } from "./DashboardFormDialogFormInputCommonProps";

export interface DashboardFormDialogFormInputProps<Values extends object> {
  api: FormikProps<Values>;

  fieldKey: keyof Values;

  fieldConfig: DashboardFormDialogFieldConfig;

  autoFocus: boolean;
}

export class DashboardFormDialogFormInput<
  Values extends object
> extends Component<DashboardFormDialogFormInputProps<Values>> {
  private getInputComponentForFieldType = (
    type: DashboardFormDialogFieldConfig["inputType"],
  ): ComponentType<DashboardFormDialogFormInputCommonProps> => {
    switch (type) {
      case "text":
        return TextField;
      default:
        throw new Error(`Unrecognized input type: ${type}`);
    }
  };

  private getInputFormType = (
    type: DashboardFormDialogFieldConfig["inputType"],
  ): string => {
    // Convert internal types like "autocomplete" to html valid field types.

    return type;
  };

  render() {
    const { api, fieldKey: key, fieldConfig, autoFocus } = this.props;

    const InputComponent: ComponentType<
      DashboardFormDialogFormInputCommonProps
    > = this.getInputComponentForFieldType(fieldConfig.inputType);

    const type = this.getInputFormType(fieldConfig.inputType);

    return (
      <InputComponent
        key={key}
        type={type}
        name={key}
        required
        autoFocus={autoFocus}
        value={api.values[key] as any}
        onChange={api.handleChange}
        onBlur={api.handleBlur}
        label={api.errors[key] || fieldConfig.inputLabel}
        placeholder={fieldConfig.placeholder}
        error={Boolean(api.errors[key])}
        fullWidth
        margin="dense"
      />
    );
  }
}
