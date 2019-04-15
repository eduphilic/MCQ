import { Grid, Typography } from "@join-uniform/components";
import { L, LocalizedString } from "@join-uniform/localization";
import { styled } from "@join-uniform/theme";
import React from "react";

type Props = {
  className?: string;
  footerText: LocalizedString;
};

function HeroFooterSection(props: Props) {
  const { className, footerText } = props;

  return (
    <Grid className={className} container>
      <Grid className="hero-footer-text-wrapper" item xs={12}>
        <Typography className="hero-footer-text" variant="h6" align="center">
          <L localizedString={footerText} />
        </Typography>
      </Grid>
    </Grid>
  );
}

const StyledHeroFooterSection = styled(HeroFooterSection)`
  background-color: #5ba87c;

  .hero-footer-text-wrapper {
    margin: 32px;
  }

  .hero-footer-text {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.01rem;
  }
`;

export { StyledHeroFooterSection as HeroFooterSection };
