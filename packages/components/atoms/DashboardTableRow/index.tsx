import { TableRow } from "material-ui/Table";
import styled from "styled";

export const DashboardTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.background.default};
  }

  td {
    border: none;
  }
`;
