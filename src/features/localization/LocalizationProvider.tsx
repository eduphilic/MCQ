import gql from "graphql-tag";
import { Component } from "react";
import { ChildProps, graphql } from "react-apollo";
import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { Language, LocalizedString } from "../../models";

const GET_TRANSLATIONS = gql`
  query GetTranslations {
    language {
      key
      en
      hi
    }
  }
`;

type Response = {
  language: LocalizedString[];
};

export let strings: LocalizedStringsMethods &
  { [k in keyof Language]: string } = null as any;

let stringsInitialized = false;

export const LocalizationProvider = graphql<{}, Response>(GET_TRANSLATIONS, {})(
  class extends Component<ChildProps<{}, Response>> {
    state = {
      initialized: false,
    };

    static getDerivedStateFromProps(
      props: ChildProps<{}, Response>,
      state: { initialized: boolean },
    ) {
      if (state.initialized) return null;
      if (stringsInitialized) return { initialized: true };

      const { loading, language } = props.data!;
      if (loading) return null;

      const localizedStrings: {
        en: Record<string, string>;
        hi: Record<string, string>;
      } = { en: {}, hi: {} };

      language!.forEach(s => {
        localizedStrings.en[s.key] = s.en;
        if (s.hi) localizedStrings.hi[s.key] = s.hi;
      });

      if (typeof window === "undefined") {
        strings = localizedStrings.en as any;
      } else {
        strings = new LocalizedStrings(localizedStrings as any);
      }

      stringsInitialized = true;
      return { initialized: true };
    }

    render() {
      const { children, data } = this.props;
      const { initialized } = this.state;
      const { loading } = data!;

      if (loading || !initialized) return null;
      return children;
    }
  },
);
