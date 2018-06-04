import { FormikProps } from "formik";
import React, { Component } from "react";

import TextField, { TextFieldProps } from "@material-ui/core/TextField";

export interface FormikTextFieldProps<Values extends object>
  extends Pick<
      TextFieldProps,
      "autoFocus" | "label" | "placeholder" | "fullWidth" | "margin" | "type"
    > {
  name: keyof Values;

  formikApi: FormikProps<Values>;
}

export class FormikTextField<Values extends object> extends Component<
  FormikTextFieldProps<Values>
> {
  render() {
    const {
      formikApi: api,
      name,
      label,
      fullWidth = true,
      ...rest
    } = this.props;

    return (
      <TextField
        {...rest}
        name={name}
        label={api.errors[name] || label}
        value={(api.values as { [P: string]: string })[name]}
        fullWidth={fullWidth}
        error={Boolean(api.errors[name])}
        onChange={api.handleChange}
        onBlur={api.handleBlur}
      />
    );
  }
}