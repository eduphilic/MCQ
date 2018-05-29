import React, { ReactNode } from "react";
import { Container } from "unstated";

import Icon from "@material-ui/core/Icon";

export interface ListCardHeaderState {
  /**
   * Card title.
   */
  title?: string;

  /**
   * Card icon.
   */
  iconNode?: ReactNode;
}

export class ListCardHeaderContainer extends Container<ListCardHeaderState> {
  state: ListCardHeaderState = {
    iconNode: <Icon>dashboard</Icon>,
  };

  setTitle = (title: string) => this.setState({ title });
}
