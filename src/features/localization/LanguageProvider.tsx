import React, { Component, Fragment, SFC } from "react";
import { LocalizationLanguage } from "../../api";
import { LanguageQuery } from "./LanguageQuery";
import { setLanguage } from "./strings";

type Props = {
  language: LocalizationLanguage;
};

type State = {
  lastLanguage: LocalizationLanguage | null;
};

let nextKey = 0;

class LanguageChangeRemount extends Component<Props, State> {
  state: State = { lastLanguage: null };

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.language !== state.lastLanguage) {
      setLanguage(props.language);
      nextKey += 1;
      return { lastLanguage: props.language };
    }
    return null;
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
export const LanguageProvider: SFC = ({ children }) => (
  <LanguageQuery>
    {language => (
      <LanguageChangeRemount language={language}>
        {children}
      </LanguageChangeRemount>
    )}
  </LanguageQuery>
);
