import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { State } from "store";
import { actions } from "./actions";
import { IEntry } from "./models/IEntry";

import { DashboardPage } from "./DashboardPage";
import { ExamPackPage } from "./ExamPackPage";
import { MembershipPage } from "./MembershipPage";
import { SettingsPage } from "./SettingsPage";

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

    return (
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/exam-pack" component={ExamPackPage} />
        <Route path="/membership" component={MembershipPage} />
        <Route path="/settings" component={SettingsPage} />
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
