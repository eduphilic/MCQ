// tslint:disable-next-line:no-submodule-imports
import OnboardingForms from "components/OnboardingForms";
import React, { Component } from "react";

/* eslint-disable no-use-before-define */

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
        onForgotPasswordClick={this.handleForgotPasswordClick}
      />
    );
  }
}

function debugAlert(event: any) {
  /* eslint-disable-next-line no-alert */
  alert(JSON.stringify(event, null, 2));
}
