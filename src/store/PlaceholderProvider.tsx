import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "store";

import { actions as dashboardActions } from "dashboard";
import { actions as examTakingActions } from "exam-taking";

export class PlaceholderProvider extends Component {
  private store = createStore();

  constructor(props: {}) {
    super(props);

    this.store.dispatch(dashboardActions.loadPlaceholderEntries());
    this.store.dispatch(examTakingActions.loadPlaceholderExam());
  }

  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}
