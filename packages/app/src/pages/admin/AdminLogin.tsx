import { LandingForm } from "components/molecules/LandingForm";
import { AdminLoginTemplate } from "components/templates/AdminLoginTemplate";
import strings from "l10n";
import Typography from "material-ui/Typography";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

type AdminLoginProps = RouteComponentProps<{}> & {};

export const AdminLogin = withRouter<AdminLoginProps>(({ history }) => {
  const onLogin = () => {
    history.push("/admin/dashboard");
  };

  const heroNode = (
    <div style={{ marginTop: "10%" }}>
      <Typography variant="display3" gutterBottom>
        {strings.adminLoginHeroTextPrimary}
      </Typography>
      <Typography variant="display1">
        {strings.adminLoginHeroTextSecondary}
      </Typography>
    </div>
  );

  const landingForm = (
    <LandingForm
      title={strings.adminLoginFormTitle}
      fields={[
        {
          description:
            strings.onboardingFormEnterMobileNumberFieldValidationDescription,
          name: "login",
          placeholder: strings.onboardingFormEnterMobileNumber,
          type: "tel",
        },
        {
          description:
            strings.onboardingFormEnterPasswordFieldValidationDescription,
          name: "password",
          placeholder: strings.onboardingFormEnterPassword,
          type: "password",
        },
      ]}
      onSubmit={onLogin}
    />
  );

  return <AdminLoginTemplate heroNode={heroNode} loginForm={landingForm} />;
});
