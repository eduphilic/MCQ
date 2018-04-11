import React, { Component } from "react";
import OnboardingForms from "site-components/OnboardingForms";

/* eslint-disable no-use-before-define */

export default class OnboardingFormsContainer extends Component {
  handleLoginSubmit = event => {
    debugAlert(event);
  };

  handleSignupSubmit = event => {
    debugAlert(event);
  };

  handleForgotPasswordClick = event => {
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

function debugAlert(event) {
  /* eslint-disable-next-line no-alert */
  alert(JSON.stringify(event, null, 2));
}
