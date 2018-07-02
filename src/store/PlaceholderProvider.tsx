import { actions as examTakingActions } from "exam-taking";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "store";

export class PlaceholderProvider extends Component {
  private store = createStore();

  constructor(props: {}) {
    super(props);

    this.store.dispatch(examTakingActions.loadPlaceholderExam());
  }

  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}
