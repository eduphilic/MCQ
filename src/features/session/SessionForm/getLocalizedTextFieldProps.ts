import { SessionFormConfig } from "../../../api";
import { l } from "../../localization";
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

export const getLocalizedTextFieldProps = (
  type: FormType,
  sessionFormConfig: SessionFormConfig,
): TextFieldProps => {
  const fieldProps: TextFieldProps = {
    fullName: {
      placeholder: l(sessionFormConfig.fullNameFieldPlaceholder),
      type: "text",
    },
    phoneNumber: {
      placeholder: l(sessionFormConfig.phoneNumberFieldPlaceholder),
      type: "text",
      autoComplete: "username",
      pattern: /^([1-9][0-9]*)$/.toString(),
    },
    password: {
      placeholder: l(sessionFormConfig.passwordFieldPlaceholder),
      type: "password",
      autoComplete:
        type === "user-sign-up" ? "new-password" : "current-password",
    },
    passwordVerify: {
      placeholder: l(sessionFormConfig.passwordVerifyFieldPlaceholder),
      type: "password",
      autoComplete: "new-password",
    },
    emailAddress: {
      placeholder: l(sessionFormConfig.emailAddressFieldPlaceholder),
      type: "email",
      autoComplete: "email",
    },
  };

  return fieldProps;
};
