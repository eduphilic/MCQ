import styled from "styled-components";

import { CardHeader } from "@material-ui/core";

export const AuthenticationFormCardHeader = styled(CardHeader)`
  .MuiCardHeader-title {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .MuiCardHeader-subheader {
    margin-top: 4px;
    font-size: 12px;
    color: #000;
  }
`;
