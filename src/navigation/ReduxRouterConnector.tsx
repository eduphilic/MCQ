import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { State } from "store";
import { actions } from "./actions";

type StateProps = {
  locationPageTitle: string;
};

type DispatchProps = {
  onLocationChange: (locationPathname: string) => void;
};

type OwnProps = {};
export { OwnProps as ReduxRouterConnectorProps };

type Props = StateProps & DispatchProps & RouteComponentProps<{}> & OwnProps;

/**
 * Updates the page title to match the currently view page.
 */
class ReduxRouterConnector extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (prevProps.location.pathname === this.props.location.pathname) return;

    this.props.onLocationChange(this.props.location.pathname);
  }

  render() {
    const { children, locationPageTitle } = this.props;

    return (
      <>
        <Helmet>
          <title>{locationPageTitle}</title>
        </Helmet>

        {children}
      </>
    );
  }
}

const ReduxRouterConnectorContainer = withRouter(
  connect<StateProps, DispatchProps, OwnProps, State>(
    ({ navigation }): StateProps => ({
      locationPageTitle: navigation.locationPageTitle,
    }),
    {
      onLocationChange: actions.updateLocation,
    },
  )(ReduxRouterConnector),
);
export { ReduxRouterConnectorContainer as ReduxRouterConnector };
