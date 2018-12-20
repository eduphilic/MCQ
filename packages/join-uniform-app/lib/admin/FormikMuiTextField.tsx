import { TextField, TextFieldProps } from "@join-uniform/components";
import { FormikProps } from "formik";
import React from "react";

export type FormikMuiTextFieldProps<FormValues> = {
  name: keyof FormValues;
  type?: TextFieldProps["type"];
  label: string;
  form: FormikProps<FormValues>;
};

export function FormikMuiTextField<FormValues>(
  props: FormikMuiTextFieldProps<FormValues>,
) {
  const { name, type, label, form } = props;

  return (
    <TextField
      fullWidth
      margin="normal"
      name={name as string}
      type={type}
      label={(form.touched[name] && form.errors[name]) || label}
      error={form.touched[name] && !!form.errors[name]}
      value={form.values[name].toString()}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
    />
  );
}
