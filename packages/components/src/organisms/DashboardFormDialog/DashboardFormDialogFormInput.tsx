import { FormikProps } from "formik";
import React, { Component, ComponentType } from "react";

import { FormikTextField } from "../../molecules/FormikTextField";
import { DashboardFormDialogFieldConfig } from "./DashboardFormDialogFieldConfig";
import { DashboardFormDialogFormInputCommonProps } from "./DashboardFormDialogFormInputCommonProps";
import { DashboardFormDialogInputFileUpload } from "./DashboardFormDialogInputFileUpload";
import { DashboardFormDialogInputTextAutocomplete } from "./DashboardFormDialogInputTextAutocomplete";

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
  ): ComponentType<DashboardFormDialogFormInputCommonProps<Values>> => {
    switch (type) {
      case "text-autocomplete":
        return DashboardFormDialogInputTextAutocomplete;
      case "file-upload":
        return DashboardFormDialogInputFileUpload;
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

    switch (fieldConfig.inputType) {
      case "text":
        return (
          <FormikTextField
            formikApi={api}
            name={key}
            type="text"
            autoFocus={autoFocus}
            label={fieldConfig.inputLabel}
            margin="dense"
            placeholder={fieldConfig.placeholder}
          />
        );
    }

    const InputComponent: ComponentType<
      DashboardFormDialogFormInputCommonProps<Values>
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
        suggestions={fieldConfig.suggestions}
        setFieldValue={api.setFieldValue}
        acceptedFileTypes={fieldConfig.acceptedFileTypes}
      />
    );
  }
}
