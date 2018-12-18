import { styled } from "@join-uniform/theme";
import TableRow, { TableRowProps } from "@material-ui/core/TableRow";
import React from "react";

export const DashboardTableRow = styled(
  (props: Omit<TableRowProps, "classes">) => {
    return <TableRow {...props} classes={{ selected: "selected" }} />;
  },
)`
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.background.default};
  }

  &.selected {
    background-color: rgba(0, 0, 0, 0.07);
  }

  td {
    border: none;
  }
`;
