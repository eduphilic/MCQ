import { LandingForm } from "components/molecules/LandingForm";
import { AdminLoginTemplate } from "components/templates/AdminLoginTemplate";
import strings from "l10n";
import Typography from "material-ui/Typography";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actions, RootState } from "store";

interface AdminLoginProps {
  authenticating: boolean;
  authenticated: boolean;
  onLogin: (login: string, password: string) => any;
}

class AdminLoginBase extends Component<AdminLoginProps> {
  handleLoginSubmit = (formFields: Record<string, string>) => {
    this.props.onLogin(formFields.login, formFields.password);
  };

  generateLoginForm = () => (
    <LandingForm
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

  render() {
    const { authenticating, authenticated } = this.props;

    if (authenticated) return <Redirect to="/admin/dashboard" />;

    /* tslint:disable-next-line:no-console */
    console.log("authenticating", authenticating);

    const loginForm = this.generateLoginForm();
    const heroNode = this.generateHeroNode();

    return <AdminLoginTemplate heroNode={heroNode} loginForm={loginForm} />;
  }
}

const mapStateToProps = (store: RootState) => ({
  authenticating: store.app.authenticating,
  authenticated: store.app.user && store.app.user.isAdmin,
});

const mapDispatchToProps = {
  onLogin: actions.app.login,
};

export const AdminLogin = connect(mapStateToProps, mapDispatchToProps)(
  AdminLoginBase,
);
