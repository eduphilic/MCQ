import { OnboardingForms } from "components/organisms/OnboardingForms";
import React, { Component } from "react";

export default class OnboardingFormsContainer extends Component {
  handleLoginSubmit = (event: any) => {
    debugAlert(event);
  };

  handleSignupSubmit = (event: any) => {
    debugAlert(event);
  };

  handleForgotPasswordClick = (event: any) => {
    debugAlert(event);
  };

  render() {
    return (
      <OnboardingForms
        onLoginSubmit={this.handleLoginSubmit}
        onSignupSubmit={this.handleSignupSubmit}
        passwordResetHref="/forgotPassword"
      />
    );
  }
}

function debugAlert(event: any) {
  alert(JSON.stringify(event, null, 2));
}
