import React, { Component } from "react";

import { TablePagination, TablePaginationProps } from "../muiComponents";

// tslint:disable-next-line:no-empty-interface
export interface DashboardCardPaginationProps extends TablePaginationProps {}

export class DashboardCardPagination extends Component<
  DashboardCardPaginationProps
> {
  render() {
    return <TablePagination {...this.props} />;
  }
}
