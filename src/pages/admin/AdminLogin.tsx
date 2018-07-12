import { strings } from "localization";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import { AdminLoginTemplate } from "components/AdminLoginTemplate";
import { AuthenticationErrorSnackbar } from "components/AuthenticationErrorSnackbar";
import { AuthenticationForm } from "components/AuthenticationForm";

interface AdminLoginProps {
  authenticating: boolean;
  authenticated: boolean;
  authenticationError: string | null;
  // onLogin: (login: string, password: string) => any;
  onSnackbarClose: () => void;
}

export class AdminLogin extends Component<AdminLoginProps> {
  handleLoginSubmit = (_formFields: Record<string, string>) => {
    // this.props.onLogin(formFields.login, formFields.password);
  };

  generateLoginForm = () => (
    <AuthenticationForm
      title={strings.pages_admin_AdminLogin_LoginFormTitle}
      fields={[
        {
          description:
            strings.components_OnboardingForms_MobileNumberFieldDescription,
          name: "login",
          // TODO: Remove development placeholder note (0000)
          placeholder:
            strings.components_OnboardingForms_MobileNumberFieldPlaceholder +
            " (0000)",
          type: "tel",
        },
        {
          description:
            strings.components_OnboardingForms_EnterPasswordFieldDescription,
          name: "password",
          // TODO: Remove development placeholder note (admin)
          placeholder:
            strings.components_OnboardingForms_EnterPasswordFieldPlaceholder +
            " (admin)",
          type: "password",
        },
      ]}
      onSubmit={this.handleLoginSubmit}
      disabled={this.props.authenticating}
    />
  );

  generateHeroNode = () => (
    <div style={{ marginTop: "10%" }}>
      <Typography variant="display3" gutterBottom>
        {strings.pages_admin_AdminLogin_HeroTextPrimary}
      </Typography>
      <Typography variant="display1">
        {strings.pages_admin_AdminLogin_HeroTextSecondary}
      </Typography>
    </div>
  );

  generateSnackbar = () => {
    const { authenticationError, onSnackbarClose } = this.props;

    return (
      <AuthenticationErrorSnackbar
        error={authenticationError}
        onClose={onSnackbarClose}
      />
    );
  };

  render() {
    const { authenticated } = this.props;

    if (authenticated) return <Redirect to="/admin/dashboard" />;

    const loginForm = this.generateLoginForm();
    const heroNode = this.generateHeroNode();
    const snackBar = this.generateSnackbar();

    return (
      <>
        <AdminLoginTemplate heroNode={heroNode} loginForm={loginForm} />
        {snackBar}
      </>
    );
  }
}
