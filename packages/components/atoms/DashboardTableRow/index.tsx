import { TableRow } from "material-ui/Table";
import styled from "styled";

export const DashboardTableRow = styled(TableRow).attrs({
  classes: {
    selected: "selected",
  },
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
