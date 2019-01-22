import * as yup from "yup";
import { FormType } from "./FormType";
import { Values } from "./Values";

export const getValidationSchema = (
  type: FormType,
): yup.ObjectSchema<Values> => {
  const schema = {
    fullName: yup
      .string()
      .required()
      .trim(),
    phoneNumber: yup
      .string()
      .required()
      .matches(/^([0-9][0-9]*)$/, "Mobile number can contain only numbers."),
    password: yup
      .string()
      .required()
      .trim()
      .min(8),
    passwordVerify: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match.")
      .required(),
    emailAddress: yup
      .string()
      .email()
      .trim()
      .lowercase()
      .required(),
    termsAgreed: yup.boolean().oneOf([true], "Must accept Terms & Conditions"),
  };

  if (type !== "user-sign-up") {
    delete schema.emailAddress;
    delete schema.fullName;
    delete schema.passwordVerify;
    delete schema.termsAgreed;
  }

  return yup.object<Values>().shape(schema);
};
