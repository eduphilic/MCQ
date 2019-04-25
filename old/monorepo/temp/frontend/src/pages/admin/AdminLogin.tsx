import { strings } from "features/localization";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import { AdminLoginTemplate } from "componentsV0/AdminLoginTemplate";
import { AuthenticationErrorSnackbar } from "componentsV0/AuthenticationErrorSnackbar";
import { SessionForm } from "features/session";

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

  generateLoginForm = () => <SessionForm type="admin-sign-in" />;

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