import strings from "l10n";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actions, RootState } from "store";

import Typography from "@material-ui/core/Typography";

import { AdminLoginTemplate } from "components/AdminLoginTemplate";
import { AuthenticationErrorSnackbar } from "components/AuthenticationErrorSnackbar";
import { AuthenticationForm } from "components/AuthenticationForm";
import { PageTitleSetter } from "components/PageTitleSetter";

interface AdminLoginProps {
  authenticating: boolean;
  authenticated: boolean;
  authenticationError: string | null;
  onLogin: (login: string, password: string) => any;
  onSnackbarClose: () => void;
}

class AdminLoginBase extends Component<AdminLoginProps> {
  handleLoginSubmit = (formFields: Record<string, string>) => {
    this.props.onLogin(formFields.login, formFields.password);
  };

  generateLoginForm = () => (
    <AuthenticationForm
      title={strings.adminLoginFormTitle}
      fields={[
        {
          description:
            strings.onboardingFormEnterMobileNumberFieldValidationDescription,
          name: "login",
          // TODO: Remove development placeholder note (0000)
          placeholder: strings.onboardingFormEnterMobileNumber + " (0000)",
          type: "tel",
        },
        {
          description:
            strings.onboardingFormEnterPasswordFieldValidationDescription,
          name: "password",
          // TODO: Remove development placeholder note (admin)
          placeholder: strings.onboardingFormEnterPassword + " (admin)",
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
        {strings.adminLoginHeroTextPrimary}
      </Typography>
      <Typography variant="display1">
        {strings.adminLoginHeroTextSecondary}
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
        <PageTitleSetter title="Login - JoinUniform" />

        <AdminLoginTemplate heroNode={heroNode} loginForm={loginForm} />
        {snackBar}
      </>
    );
  }
}

const mapStateToProps = ({ app }: RootState) => ({
  authenticating: app.authenticating,
  authenticated: Boolean(app.user && app.user.isAdmin),
  authenticationError: app.authenticationError,
});

const mapDispatchToProps: Partial<AdminLoginProps> = {
  onLogin: actions.app.login,
  onSnackbarClose: actions.app.loginFailureClear,
};

// prettier-ignore
export const AdminLogin = connect(mapStateToProps, mapDispatchToProps)(
  AdminLoginBase,
);