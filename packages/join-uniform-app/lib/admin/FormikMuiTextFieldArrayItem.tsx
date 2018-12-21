import { TextField, TextFieldProps } from "@join-uniform/components";
import { FormikProps, getIn } from "formik";
import React from "react";

export type FormikMuiTextFieldArrayItemProps<FormValues> = {
  arrayName: keyof FormValues;
  arrayIndex: number;
  arrayItemSubpath?: string;
  type?: TextFieldProps["type"];
  label: string;
  helperText?: string;
  form: FormikProps<FormValues>;
  inputProps?: TextFieldProps["inputProps"];
};

export function FormikMuiTextFieldArrayItem<FormValues>(
  props: FormikMuiTextFieldArrayItemProps<FormValues>,
) {
  const {
    arrayName,
    arrayIndex,
    arrayItemSubpath,
    type,
    label,
    helperText,
    form,
    inputProps,
  } = props;

  const { name, touched, error, value } = getArrayFields(
    form,
    arrayName,
    arrayIndex,
    arrayItemSubpath,
  );

  return (
    <TextField
      fullWidth
      margin="normal"
      name={name}
      type={type}
      label={(touched && error) || label}
      helperText={helperText}
      inputProps={inputProps}
      error={touched && !!error}
      value={value}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
    />
  );
}

function getArrayFields<FormValues>(
  form: FormikProps<FormValues>,
  field: keyof FormValues,
  index: number,
  subpath?: string,
) {
  if (!Array.isArray(form.values[field])) {
    throw new Error("Expected field to be an array.");
  }

  const name = `${field}[${index}]${subpath}`;

  return {
    name,
    touched: getIn(form.touched, name) as boolean | undefined,
    error: getIn(form.errors, name) as string | undefined,
    value: (getIn(form.values, name) as string | undefined) || "",
  };
}
