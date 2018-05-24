import { FormikProps } from "formik";
import React, { Component } from "react";

import { FormikFileUploadField } from "../../molecules/FormikFileUploadField";
import {
  FormikTextField,
  FormikTextFieldProps,
} from "../../molecules/FormikTextField";
import { FormikTextFieldTypeAhead } from "../../molecules/FormikTextFieldTypeAhead";
import { DashboardFormDialogFieldConfig } from "./DashboardFormDialogFieldConfig";

export interface DashboardFormDialogFormInputProps<Values extends object> {
  api: FormikProps<Values>;

  fieldKey: keyof Values;

  fieldConfig: DashboardFormDialogFieldConfig;

  autoFocus: boolean;
}

export class DashboardFormDialogFormInput<
  Values extends object
> extends Component<DashboardFormDialogFormInputProps<Values>> {
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

      case "file-upload":
        return (
          <FormikFileUploadField
            acceptedFileTypes={fieldConfig.acceptedFileTypes}
            {...props}
          />
        );

      default:
        throw new Error(`Unrecognized input type: ${fieldConfig.inputType}`);
    }
  }
}
