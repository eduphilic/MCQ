import { strings } from "localization";
import { FormType } from "./FormType";
import { TextFieldValues } from "./TextFieldValues";

type TextFieldProps = Record<
  keyof TextFieldValues,
  {
    placeholder: string;
    type: string;
  }
>;

export const getLocalizedTextFieldProps = (_type: FormType): TextFieldProps => {
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
