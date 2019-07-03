import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import styled from "styled-components";

export const AuthenticationFormButton = styled(Button)`
  padding: 8px 32px;
  background-color: ${grey[50]};
  font-size: 12px;

  :hover {
    background-color: ${grey[200]};
  }
`;
