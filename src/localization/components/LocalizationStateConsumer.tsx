import { Component, ConsumerProps } from "react";
import { connect } from "react-redux";
import { State } from "store";
import { actions } from "../actions";

type StateProps = {
  localizationLanguage: "en" | "hi";
};

type DispatchProps = {
  setLocalizationLanguage: (localizationLanguage: "en" | "hi") => void;
};

type ContextProps = StateProps & DispatchProps;

type OwnProps = ConsumerProps<ContextProps>;

type Props = StateProps & DispatchProps & OwnProps;

/**
 * Provides a component with a render method which exposes the contents of the
 * Localization store. This is provided as a convenience.
 */
class LocalizationStateConsumer extends Component<Props, ContextProps> {
  state: ContextProps = {
    localizationLanguage: "en",
    // tslint:disable-next-line:no-empty
    setLocalizationLanguage: () => {},
  };

  static getDerivedStateFromProps(
    props: Props,
    state: ContextProps,
  ): ContextProps | null {
    if (
      props.localizationLanguage !== state.localizationLanguage ||
      props.setLocalizationLanguage !== state.setLocalizationLanguage
    ) {
      return {
        localizationLanguage: props.localizationLanguage,
        setLocalizationLanguage: props.setLocalizationLanguage,
      };
    }

    return null;
  }

  render() {
    return this.props.children(this.state);
  }
}

const LocalizationStateConsumerContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  ({ localization }) => ({
    localizationLanguage: localization.localizationLanguage,
  }),
  {
    setLocalizationLanguage: actions.setLocalizationLanguage,
  },
)(LocalizationStateConsumer);
export { LocalizationStateConsumerContainer as LocalizationStateConsumer };
