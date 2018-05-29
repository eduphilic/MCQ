import React, { SFC } from "react";
import { Provider } from "unstated";

import Card from "@material-ui/core/Card";

import { ListCardHeader } from "./ListCardHeader";
import { ListCardHeaderContainer } from "./ListCardHeaderContainer";

// tslint:disable-next-line:no-empty-interface
export interface ListCardProps {}

export const ListCard: SFC<ListCardProps> = props => {
  const cardHeader = new ListCardHeaderContainer();
  const { children } = props;

  return (
    <Provider inject={[cardHeader]}>
      <Card>
        <ListCardHeader />
      </Card>
      {children}
    </Provider>
  );
};
