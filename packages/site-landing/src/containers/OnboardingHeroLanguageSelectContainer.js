import React, { Component } from "react";
import OnboardingHeroLanguageSelect from "site-components/OnboardingHeroLanguageSelect";

export default class OnboardingHeroLanguageSelectContainer extends Component {
  state = {
    value: "english",
  };

  // eslint-disable-next-line no-unused-vars
  handleValueChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <OnboardingHeroLanguageSelect
        value={this.state.value}
        onChange={this.handleValueChange}
      />
    );
  }
}
