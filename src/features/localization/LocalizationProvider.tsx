import React, { Component, Fragment, SFC } from "react";
import { LocalizationSupportedLanguages } from "../../models";
import { LocalizationLanguageQuery } from "./LocalizationLanguageQuery";
import { setLanguage } from "./strings";

type Props = {
  language: LocalizationSupportedLanguages;
};

type State = {
  lastLanguage: LocalizationSupportedLanguages | null;
};

let nextKey = 0;

class LocalizationProviderForceRender extends Component<Props, State> {
  state: State = { lastLanguage: null };

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.language !== state.lastLanguage) {
      setLanguage(props.language);
      nextKey += 1;
      return { lastLanguage: props.language };
    }
    return name;
  }

  render() {
    return <Fragment key={nextKey}>{this.props.children}</Fragment>;
  }
}

/**
 * Subscribes to changes in the current localization. It performs a forced
 * re-render of its child component tree when the selected localization language
 * changes. This is done to force components to re-render their localized
 * strings.
 */
export const LocalizationProvider: SFC = ({ children }) => (
  <LocalizationLanguageQuery>
    {localizationLanguage => (
      <LocalizationProviderForceRender language={localizationLanguage}>
        {children}
      </LocalizationProviderForceRender>
    )}
  </LocalizationLanguageQuery>
);
