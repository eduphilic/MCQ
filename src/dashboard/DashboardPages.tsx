import { AppLayout } from "navigation";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { State } from "store";
import { actions } from "./actions";
import { IEntry } from "./models/IEntry";
import { navigationLinks } from "./navigationLinks";

type StateProps = {
  entries: IEntry[] | null;
};

type DispatchProps = {
  loadPlaceholderEntries: () => {};
};

type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

class DashboardPages extends Component<Props> {
  constructor(props: Props) {
    super(props);

    props.loadPlaceholderEntries();
  }

  render() {
    if (!this.props.entries) return null;

    const links = navigationLinks;

    return (
      <AppLayout links={links}>
        <Switch>
          {links.map(({ component: RouteComponent, ...l }) => (
            <Route
              key={l.titleLocalizationKey}
              path={l.to}
              render={() => <RouteComponent />}
            />
          ))}
        </Switch>
      </AppLayout>
    );
  }
}

const DashboardPagesContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  state => ({
    entries: state.dashboard.entries,
  }),
  {
    loadPlaceholderEntries: actions.loadPlaceholderEntries,
  },
)(DashboardPages);
export { DashboardPagesContainer as DashboardPages };
