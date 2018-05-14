import React, { Component } from "react";

import Toolbar from "material-ui/Toolbar";

import { Typography } from "../../atoms/Typography";
import { DashboardCardPaginationProps } from "./DashboardCardPagination";

export interface DashboardCardPaginationHeaderToolbarProps
  extends DashboardCardPaginationProps {
  /**
   * Description text of an item, eg. "question".
   */
  listItemType: string;
}

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
        <Typography muiTypographyProps={{ variant: "subheading" }}>
          Showing {rowsPerPage} of {count} {listItemType}.
        </Typography>
      </Toolbar>
    );
  }
}
