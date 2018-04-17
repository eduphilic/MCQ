import strings from "l10n";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled from "styled";
import { DarkTheme } from "theme";

export const PageFooter: SFC<{}> = () => (
  <DarkTheme>
    <Wrapper>
      <Text>{strings.pageFooterText}</Text>
    </Wrapper>
  </DarkTheme>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.theme.spacing.unit * 5}px;
  background-color: #333333;
`;

const Text = styled(Typography).attrs({
  variant: "body2",
})`
  font-size: 12px;
`;
