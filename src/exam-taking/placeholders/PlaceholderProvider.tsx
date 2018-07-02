import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "store";
import { actions } from "../actions";

export class PlaceholderProvider extends Component {
  private store = createStore();

  constructor(props: {}) {
    super(props);

    this.store.dispatch(actions.loadPlaceholderExam());
  }

  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}
