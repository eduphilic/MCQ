import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "./theme";
import * as Components from "./OnboardingForms.components";

/**
 * Provides visitors with the ability to both signup and login to services
 * provided. It also provides a password reset link.
 */
class OnboardingForms extends Component {
  static propTypes = {
    /**
     * Calls the provided function with the provided login credentials.
     * { username, password }.
     */
    onLoginSubmit: PropTypes.func.isRequired,

    /**
     * Calls the provided function with the login credentials.
     * { name, username, password }.
     */
    onSignupSubmit: PropTypes.func.isRequired,

    /**
     * Called when a user clicks the forgot password button.
     */
    onForgotPasswordClick: PropTypes.func.isRequired,
  };

  handleLoginSubmit = event => {
    event.preventDefault();

    const credentials = {
      username: event.target[0].value,
      password: event.target[1].value,
    };

    /* eslint-disable-next-line no-param-reassign */
    event.target[1].value = "";

    this.props.onLoginSubmit(credentials);
  };

  handleSignupSubmit = event => {
    event.preventDefault();

    const credentials = {
      name: event.target[0].value,
      username: event.target[1].value,
      password: event.target[2].value,
    };

    /* eslint-disable-next-line no-param-reassign */
    event.target[2].value = "";

    this.props.onSignupSubmit(credentials);
  };

  handleForgotPasswordClick = () => {
    this.props.onForgotPasswordClick();
  };

  render() {
    return (
      <ThemeProvider>
        <Components.FormsContainer>
          <form onSubmit={this.handleLoginSubmit}>
            <Components.FormPaper>
              <Components.FormTitle>Login</Components.FormTitle>
              <Components.FormInput
                name="login-mobile-number"
                placeholder="Enter Mobile number"
                required
              />
              <Components.FormInput
                name="login-password"
                placeholder="Enter Password"
                type="password"
                required
              />

              <Components.FormButtonSection>
                <Components.FormButton type="submit">
                  Login
                </Components.FormButton>
                <Components.FormPasswordResetButton
                  onClick={this.handleForgotPasswordClick}
                >
                  Forgot Password?
                </Components.FormPasswordResetButton>
              </Components.FormButtonSection>
            </Components.FormPaper>
          </form>

          <form onSubmit={this.handleSignupSubmit}>
            <Components.FormPaper>
              <Components.FormTitle>Signup</Components.FormTitle>
              <Components.FormInput
                name="signup-name"
                placeholder="Enter Your Name"
                required
              />
              <Components.FormInput
                name="signup-mobile-number"
                placeholder="Enter Mobile number"
                required
              />
              <Components.FormInput
                name="signup-password"
                placeholder="Enter Password"
                required
                type="password"
              />

              <Components.FormButtonSection>
                <Components.FormButton type="submit">
                  Signup
                </Components.FormButton>
              </Components.FormButtonSection>
            </Components.FormPaper>
          </form>
        </Components.FormsContainer>
      </ThemeProvider>
    );
  }
}

export default OnboardingForms;
