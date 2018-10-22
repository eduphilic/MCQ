import gql from "graphql-tag";
import { Component } from "react";
import { ChildProps, graphql } from "react-apollo";
import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { Language, Localization, LocalizedString } from "../../models";

const GET_TRANSLATIONS = gql`
  query GetTranslations {
    language {
      key
      en
      hi
    }
    localization @client {
      localizationLanguage
    }
  }
`;

type Response = {
  language: LocalizedString[];
  localization: Localization;
};

export let strings: LocalizedStringsMethods &
  { [k in keyof Language]: string } = null as any;

type Props = ChildProps<{}, Response>;
type State = { initialized: boolean };

export const LocalizationProvider = graphql<{}, Response>(GET_TRANSLATIONS, {})(
  class extends Component<Props, State> {
    state = { initialized: false };

    static getDerivedStateFromProps(props: Props, state: State) {
      if (state.initialized) return null;

      const data = props.data!;
      if (data.loading) return null;

      const language = data.language!;
      const localizationLanguage = data.localization!.localizationLanguage;
      const localizedStrings = language.reduce(
        (accumulator, s) => {
          accumulator.en[s.key] = s.en;
          if (s.hi) accumulator.hi[s.key] = s.hi;
          return accumulator;
        },
        { en: {}, hi: {} } as {
          en: Record<string, string>;
          hi: Record<string, string>;
        },
      );
      strings = new LocalizedStrings(localizedStrings as any);
      strings.setLanguage(localizationLanguage);

      return { initialized: true };
    }

    render() {
      const { initialized } = this.state;
      if (!initialized) return null;

      return this.props.children;
    }
  },
);
