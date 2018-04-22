import Typography from "material-ui/Typography";
import styled from "styled";

/**
 * Material UI Typography element with large bottom margin for use on pages in
 * the admin dashboard.
 */
export const AdminDashboardPageTitle = styled(Typography).attrs({
  variant: "display1",
})`
  margin-bottom: ${({ theme }) => theme.spacing.unit * 8}px;
`;
