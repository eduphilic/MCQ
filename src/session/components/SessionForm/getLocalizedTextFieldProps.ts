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
      placeholder: strings.components_OnboardingForms_EnterNameFieldPlaceholder,
      type: "text",
    },
    phoneNumber: {
      placeholder:
        strings.components_OnboardingForms_MobileNumberFieldPlaceholder,
      type: "number",
    },
    password: {
      placeholder:
        strings.components_OnboardingForms_EnterPasswordFieldPlaceholder,
      type: "password",
    },
    passwordVerify: {
      placeholder: "Verify password",
      type: "password",
    },
    emailAddress: {
      placeholder: "Email address",
      type: "email",
    },
  };

  return fieldProps;
};
