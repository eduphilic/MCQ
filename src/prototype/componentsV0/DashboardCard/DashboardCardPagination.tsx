import React, { Component } from "react";

import TablePagination, {
  TablePaginationProps,
} from "@material-ui/core/TablePagination";

export type DashboardCardPaginationProps = TablePaginationProps;

export class DashboardCardPagination extends Component<
  DashboardCardPaginationProps
> {
  render() {
    return <TablePagination {...this.props} />;
  }
}
