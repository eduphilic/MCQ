import strings from "l10n";
import React, { SFC } from "react";
import styled from "styled";
import {
  FormField,
  LandingForm,
  LandingFormProps,
} from "../../molecules/LandingForm";

export interface OnboardingFormsProps {
  /**
   * Called with the field values on submission of the login form.
   */
  onLoginSubmit: LandingFormProps["onSubmit"];

  /**
   * Called with the field values on submission of the signup form.
   */
  onSignupSubmit: LandingFormProps["onSubmit"];

  /**
   * React Router link for password reset.
   */
  passwordResetHref: string;
}

/**
 * Provides the onboarding page enrollment forms.
 */
export const OnboardingForms: SFC<OnboardingFormsProps> = props => {
  const { onLoginSubmit, onSignupSubmit, passwordResetHref } = props;

  const loginFields: FormField[] = [
    {
      description: strings.onboardingFormEnterMobileNumberFieldValidationDescription, // prettier-ignore
      name: "username",
      placeholder: strings.onboardingFormEnterMobileNumber,
      type: "tel",
    },
    {
      description: strings.onboardingFormEnterPasswordFieldValidationDescription, // prettier-ignore
      name: "password",
      placeholder: strings.onboardingFormEnterPassword,
      type: "password",
    },
  ];

  const signupFields: FormField[] = [
    {
      description: strings.onboardingFormEnterYourNameFieldValidationDescription, // prettier-ignore
      name: "name",
      placeholder: strings.onboardingFormEnterYourName,
      type: "text",
    },
    ...loginFields,
  ];

  return (
    <Wrapper>
      <LandingForm
        title={strings.onboardingFormLoginTitle}
        fields={loginFields}
        onSubmit={onLoginSubmit}
        secondaryAction={{
          href: passwordResetHref,
          label: strings.onboardingFormLoginForgotPassword,
        }}
      />
      <LandingForm
        title={strings.onboardingFormSignupTitle}
        fields={signupFields}
        onSubmit={onSignupSubmit}
      />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > form:nth-child(2) {
    margin-top: ${props => props.theme.spacing.unit * 4}px;
  }
`;
