import { Grid, Typography } from "@material-ui/core";
import React, { SFC } from "react";
import { strings } from "../features/localization";
import { DarkTheme, styled } from "../styled";

export const LandingLayout: SFC = ({ children }) => (
  <Wrapper container direction="column">
    <Grid item xs>
      {children}
    </Grid>
    <FooterWrapper item container justify="center" alignItems="center">
      <DarkTheme>
        <Typography variant="caption">{strings.landingFooter}</Typography>
      </DarkTheme>
    </FooterWrapper>
  </Wrapper>
);

const Wrapper = styled(Grid)`
  height: 100%;
`;

const FooterWrapper = styled(Grid)`
  height: 40px;
  background-color: #333333;
`;
