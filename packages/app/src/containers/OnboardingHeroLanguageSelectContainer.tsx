// tslint:disable-next-line:no-submodule-imports
import OnboardingHeroLanguageSelect from "components/OnboardingHeroLanguageSelect";
import React, { Component } from "react";

export default class OnboardingHeroLanguageSelectContainer extends Component {
  state = {
    value: "english",
  };

  handleValueChange = (_event: any, value: any) => {
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
