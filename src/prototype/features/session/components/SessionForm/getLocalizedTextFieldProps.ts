import { strings } from "features/localization";
import { FormType } from "./FormType";
import { TextFieldValues } from "./TextFieldValues";

type TextFieldProps = Record<
  keyof TextFieldValues,
  {
    placeholder: string;
    type: string;
    autoComplete?: string;
    pattern?: string;
  }
>;

export const getLocalizedTextFieldProps = (type: FormType): TextFieldProps => {
  const fieldProps: TextFieldProps = {
    fullName: {
      placeholder: strings.session_SessionForm_FullNameFieldPlaceholder,
      type: "text",
    },
    phoneNumber: {
      placeholder: strings.session_SessionForm_PhoneNumberFieldPlaceholder,
      type: "text",
      autoComplete: "username",
      pattern: /^([1-9][0-9]*)$/.toString(),
    },
    password: {
      placeholder: strings.session_SessionForm_PasswordFieldPlaceholder,
      type: "password",
      autoComplete:
        type === "user-sign-up" ? "new-password" : "current-password",
    },
    passwordVerify: {
      placeholder: strings.session_SessionForm_PasswordVerifyFieldPlaceholder,
      type: "password",
      autoComplete: "new-password",
    },
    emailAddress: {
      placeholder: strings.session_SessionForm_EmailAddressFieldPlaceholder,
      type: "email",
      autoComplete: "email",
    },
  };

  return fieldProps;
};
