import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "store";

import { actions as examTakingActions } from "exam-taking";
import { actions as subscriptionManagementActions } from "subscription-management";

export class PlaceholderProvider extends Component {
  private store = createStore();

  constructor(props: {}) {
    super(props);

    this.store.dispatch(examTakingActions.loadPlaceholderExam());
    this.store.dispatch(subscriptionManagementActions.loadPlaceholderData());
  }

  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}
