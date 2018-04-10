import React from "react";
import styled from "styled-components";
import LayoutLanding from "site-components/LayoutLanding";
import HeroContainer from "site-components/HeroContainer";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

export default () => (
  <LayoutLanding>
    <section>
      <HeroContainer>
        <Grid item xs={12}>
          <HeroTitle>Join Uniform</HeroTitle>
        </Grid>
      </HeroContainer>
    </section>
  </LayoutLanding>
);

const HeroTitle = styled(Typography).attrs({
  variant: "title",
})`
  color: #fff;
`;
