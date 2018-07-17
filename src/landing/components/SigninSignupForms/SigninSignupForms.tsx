import { strings } from "localization";
import React, { SFC } from "react";
import styled from "styled";

import {
  AuthenticationForm,
  AuthenticationFormProps,
  FormField,
} from "session";

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
      description: "",
      name: "username",
      placeholder: strings.session_SessionForm_PhoneNumberFieldPlaceholder,
      type: "tel",
    },
    {
      description: "",
      name: "password",
      placeholder: strings.session_SessionForm_PasswordFieldPlaceholder,
      type: "password",
    },
  ];

  const signupFields: FormField[] = [
    {
      description: "",
      name: "name",
      placeholder: strings.session_SessionForm_FullNameFieldPlaceholder,
      type: "text",
    },
    ...loginFields,
  ];

  return (
    <Wrapper>
      <AuthenticationForm
        title={strings.session_SessionForm_FormTitle_UserSignIn}
        fields={loginFields}
        onSubmit={onLoginSubmit}
        secondaryAction={{
          href: passwordResetHref,
          label: strings.session_SessionForm_PasswordResetLinkLabel,
        }}
        // TODO: Add disabled state during submission
        disabled={false}
      />
      <AuthenticationForm
        title={strings.session_SessionForm_FormTitle_UserSignUp}
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
