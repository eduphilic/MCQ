import React from "react";
import LayoutLanding from "site-components/LayoutLanding";
import HeroSection from "site-components/HeroSection";
import PageContentCentering from "site-components/PageContentCentering";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Radio, { RadioGroup } from "material-ui/Radio";

const Home = () => (
  <LayoutLanding>
    <HeroSection>
      <PageContentCentering>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="title">Join Uniform</Typography>
          </Grid>

          {/* On-boarding Area */}
          <Grid item xs={12} container>
            {/* Left Text Area */}
            <Grid item xs={12} md={8}>
              <Typography variant="headline">
                Selected preferred language :
              </Typography>
              <RadioGroup>
                <Radio>English</Radio>
                <Radio>Hindia</Radio>
              </RadioGroup>
            </Grid>

            {/* Right Input Area */}
            <Grid item xs={12} md={4}>
              Right Area
            </Grid>
          </Grid>
        </Grid>
      </PageContentCentering>
    </HeroSection>
  </LayoutLanding>
);

export default Home;
