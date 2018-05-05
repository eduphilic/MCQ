import { TableRow, TableRowProps } from "material-ui/Table";
import styled from "styled";

export const DashboardTableRow = styled(TableRow).attrs({
  // Used type assertion here because dependent types were requiring a classes
  // field be set. Using the type from TableRowProps to make it optional.
  // tslint:disable-next-line:no-object-literal-type-assertion
  ...({
    classes: {
      selected: "selected",
    },
  } as Pick<TableRowProps, "classes">),
})`
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
