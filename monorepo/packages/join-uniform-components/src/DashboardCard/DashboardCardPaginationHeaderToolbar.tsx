import React, { Component } from "react";

import { Toolbar, Typography } from "../muiComponents";

import { DashboardCardPaginationProps } from "./DashboardCardPagination";

export type DashboardCardPaginationHeaderToolbarProps = DashboardCardPaginationProps & {
  /**
   * Description text of an item, eg. "question".
   */
  listItemType: string;
};

export class DashboardCardPaginationHeaderToolbar extends Component<
  DashboardCardPaginationHeaderToolbarProps
> {
  render() {
    const { rowsPerPage, count, listItemType } = this.props;

    if (!listItemType) {
      throw new Error("List item type required if using pagination controls.");
    }

    return (
      <Toolbar>
        <Typography variant="subtitle1">
          Showing {rowsPerPage} of {count} {listItemType}.
        </Typography>
      </Toolbar>
    );
  }
}
