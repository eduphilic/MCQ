import Typography from "@material-ui/core/Typography";
import React, { SFC } from "react";
import styled from "styled-components";
import { strings } from "../../features/localization";
import { DarkTheme } from "../../theme";

export const PageFooter: SFC<{}> = () => (
  <DarkTheme>
    <Wrapper>
      <Text>{strings.components_PageFooter_Text}</Text>
    </Wrapper>
  </DarkTheme>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.theme.spacing(5)}px;
  background-color: #333333;
`;

const Text = styled(Typography).attrs({
  variant: "body2",
})`
  font-size: 12px;
`;
