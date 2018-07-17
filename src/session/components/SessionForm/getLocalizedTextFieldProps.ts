import { strings } from "localization";
import { SessionFormProps } from "./SessionForm";
import { TextFieldValues } from "./TextFieldValues";

type Type = SessionFormProps["type"];

type TextFieldProps = Record<
  keyof TextFieldValues,
  {
    placeholder: string;
    type: string;
  }
>;

export const getLocalizedTextFieldProps = (_type: Type): TextFieldProps => {
  const fieldProps: TextFieldProps = {
    fullName: {
      placeholder: strings.session_SessionForm_FullNameFieldPlaceholder,
      type: "text",
    },
    phoneNumber: {
      placeholder: strings.session_SessionForm_PhoneNumberFieldPlaceholder,
      type: "number",
    },
    password: {
      placeholder: strings.session_SessionForm_PasswordFieldPlaceholder,
      type: "password",
    },
    passwordVerify: {
      placeholder: strings.session_SessionForm_PasswordVerifyFieldPlaceholder,
      type: "password",
    },
    emailAddress: {
      placeholder: strings.session_SessionForm_EmailAddressFieldPlaceholder,
      type: "email",
    },
  };

  return fieldProps;
};
