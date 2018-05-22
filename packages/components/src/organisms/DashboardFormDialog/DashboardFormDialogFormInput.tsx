import { FormikProps } from "formik";
import React, { Component, ComponentType } from "react";

import {
  FormikTextField,
  FormikTextFieldProps,
} from "../../molecules/FormikTextField";
import { FormikTextFieldTypeAhead } from "../../molecules/FormikTextFieldTypeAhead";
import { DashboardFormDialogFieldConfig } from "./DashboardFormDialogFieldConfig";
import { DashboardFormDialogFormInputCommonProps } from "./DashboardFormDialogFormInputCommonProps";
import { DashboardFormDialogInputFileUpload } from "./DashboardFormDialogInputFileUpload";

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
    const { inputLabel: label, placeholder } = fieldConfig;

    const props: FormikTextFieldProps<Values> = {
      formikApi: api,
      name: key,
      type: "text",
      autoFocus,
      label,
      margin: "dense",
      placeholder,
    };

    switch (fieldConfig.inputType) {
      case "text":
        return <FormikTextField {...props} />;
      case "text-autocomplete":
        if (!fieldConfig.suggestions) {
          throw new Error("Type ahead requires suggestions be supplied.");
        }

        return (
          <FormikTextFieldTypeAhead
            suggestions={fieldConfig.suggestions}
            {...props}
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
