import { AppLayout, INavigationLink } from "navigation";
import React, { Component, ComponentType, SFC } from "react";
import { connect } from "react-redux";
import { Route, RouteProps, Switch } from "react-router-dom";
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
      <Switch>
        {links.map(l => (
          <DashboardRoute
            key={l.titleLocalizationKey}
            path={l.to}
            component={l.component}
            links={links}
          />
        ))}
      </Switch>
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

const DashboardRoute: SFC<
  RouteProps & {
    component: ComponentType<any>;
    links: INavigationLink[];
  }
> = ({ component: RouteComponent, links, ...rest }) => (
  <Route {...rest}>
    <AppLayout links={links}>
      <RouteComponent />
    </AppLayout>
  </Route>
);
