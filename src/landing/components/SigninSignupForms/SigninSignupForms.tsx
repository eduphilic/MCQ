import { strings } from "localization";
import React, { SFC } from "react";
import styled from "styled";

import {
  AuthenticationForm,
  AuthenticationFormProps,
  FormField,
} from "components/AuthenticationForm";

export type SigninSignupFormsProps = {
  /**
   * Called with the field values on submission of the login form.
   */
  onLoginSubmit: AuthenticationFormProps["onSubmit"];

  /**
   * Called with the field values on submission of the signup form.
   */
  onSignupSubmit: AuthenticationFormProps["onSubmit"];

  /**
   * React Router link for password reset.
   */
  passwordResetHref: string;
};

/**
 * Provides the onboarding page enrollment forms.
 */
export const SigninSignupForms: SFC<SigninSignupFormsProps> = props => {
  const { onLoginSubmit, onSignupSubmit, passwordResetHref } = props;

  const loginFields: FormField[] = [
    {
      description:
        strings.components_OnboardingForms_MobileNumberFieldDescription,
      name: "username",
      placeholder:
        strings.components_OnboardingForms_MobileNumberFieldPlaceholder,
      type: "tel",
    },
    {
      description:
        strings.components_OnboardingForms_EnterPasswordFieldDescription,
      name: "password",
      placeholder:
        strings.components_OnboardingForms_EnterPasswordFieldPlaceholder,
      type: "password",
    },
  ];

  const signupFields: FormField[] = [
    {
      description: strings.components_OnboardingForms_EnterNameFieldDescription,
      name: "name",
      placeholder: strings.components_OnboardingForms_EnterNameFieldPlaceholder,
      type: "text",
    },
    ...loginFields,
  ];

  return (
    <Wrapper>
      <AuthenticationForm
        title={strings.components_OnboardingForms_LoginFormTitle}
        fields={loginFields}
        onSubmit={onLoginSubmit}
        secondaryAction={{
          href: passwordResetHref,
          label:
            strings.components_OnboardingForms_LoginFormForgotPasswordLabel,
        }}
        // TODO: Add disabled state during submission
        disabled={false}
      />
      <AuthenticationForm
        title={strings.components_OnboardingForms_SignupFormTitle}
        fields={signupFields}
        onSubmit={onSignupSubmit}
        // TODO: Add disabled state during submission
        disabled={false}
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
