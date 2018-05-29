import React, { SFC } from "react";
import { Subscribe } from "unstated";

import {
  ListCardHeaderContainer,
  ListCardHeaderState,
} from "./ListCardHeaderContainer";
import { syncPropsToContainer } from "./syncPropsToContainer";

export interface ListCardHeaderOptionsProps
  extends Pick<ListCardHeaderState, "title" | "iconNode"> {}

export const ListCardHeaderOptions: SFC<ListCardHeaderOptionsProps> = props => (
  <Subscribe to={[ListCardHeaderContainer]}>
    {headerState => {
      syncPropsToContainer(props, headerState);
      return null;
    }}
  </Subscribe>
);
