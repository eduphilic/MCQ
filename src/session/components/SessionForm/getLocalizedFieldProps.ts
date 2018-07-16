import { strings } from "localization";
import { SessionFormProps } from "./SessionForm";
import { Values } from "./Values";

type Type = SessionFormProps["type"];

type FieldProps = Record<
  keyof Values,
  {
    placeholder: string;
    type: string;
  }
>;

export const getLocalizedFieldProps = (_type: Type): FieldProps => {
  const fieldProps: FieldProps = {
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
