// tslint:disable-next-line:import-name
import MuiDialogContent, {
  DialogContentProps,
} from "@material-ui/core/DialogContent";
import styled from "styled";

export const DialogContent = styled(MuiDialogContent)`
  padding: ${({ theme }) => theme.spacing.unit * 2}px;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
  }
`;

export { DialogContentProps };
