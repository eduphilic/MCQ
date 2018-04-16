import { LanguageSelect } from "components/molecules/LanguageSelect";
import React, { Component } from "react";

interface State {
  language: "english" | "hindi";
}

export default class LanguageSelectContainer extends Component<{}, State> {
  state: State = {
    language: "english",
  };

  handleLanguageChange = (language: State["language"]) => {
    this.setState({ language });
  };

  render() {
    return (
      <LanguageSelect
        language={this.state.language}
        onChange={this.handleLanguageChange}
      />
    );
  }
}
