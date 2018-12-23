import {
  Grid,
  GridHideable,
  LogoText,
  Typography,
} from "@join-uniform/components";
import { L, LocalizedString } from "@join-uniform/localization";
import { styled } from "@join-uniform/theme";
import React, { CSSProperties, useMemo } from "react";
import { createResponsiveImageUrl } from "../utils";

const LOGO_SIZE = 64;

type Props = {
  className?: string;
  backgroundImageUrl: string;
  backgroundAlpha: number;
  logoUrl: string;
  primaryText: LocalizedString;
  features: LocalizedString[];
};

function HeroSection(props: Props) {
  const {
    className,
    backgroundImageUrl: backgroundImageUrl,
    backgroundAlpha: backgroundAlpha,
    logoUrl,
    primaryText,
    features,
  } = props;

  const optimizedBackgroundImageUrl = useMemo(
    () =>
      createResponsiveImageUrl(backgroundImageUrl, {
        q: "20",
        format: "jpg",
      }),
    [backgroundImageUrl],
  );

  const backgroundImageStyle = useMemo(
    (): CSSProperties => ({
      background: `linear-gradient( rgba(0, 0, 0, ${backgroundAlpha}), rgba(0, 0, 0, ${backgroundAlpha}) ), url("${optimizedBackgroundImageUrl}")`,
      backgroundSize: "cover",
    }),
    [optimizedBackgroundImageUrl, backgroundAlpha],
  );

  const optimizedLogoImageUrl = useMemo(
    () =>
      createResponsiveImageUrl(logoUrl, {
        w: LOGO_SIZE.toString(),
        h: LOGO_SIZE.toString(),
        format: "png",
      }),
    [logoUrl],
  );

  return (
    <div className={className} style={backgroundImageStyle}>
      <Grid className="grid-container" container contentCenter spacing={16}>
        {/* Left text content. */}
        <Grid
          className="grid-item-left"
          item
          xs={12}
          md={8}
          container
          direction="column"
        >
          <Grid item container alignItems="center">
            <Grid item>
              <img className="logo-image" src={optimizedLogoImageUrl} />
            </Grid>
            <Grid item>
              <LogoText className="logo-text" variant="split-color" />
            </Grid>
          </Grid>

          <GridHideable
            item
            xs
            container
            direction="column"
            justify="center"
            smDown
          >
            <Grid item>
              <Typography className="hero-primary-text" variant="h3">
                <L localizedString={primaryText} />
              </Typography>
            </Grid>
            <Grid item>
              <ul className="hero-feature-list">
                {features.map((feature, index) => (
                  <Typography
                    key={index}
                    className="hero-feature-text"
                    variant="h6"
                    component="li"
                  >
                    <L localizedString={feature} />
                  </Typography>
                ))}
              </ul>
            </Grid>
          </GridHideable>
        </Grid>

        {/* Right login/sign-up forms. */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle2" style={{ height: 48 }}>
            Language Select
          </Typography>
          <Typography variant="subtitle2" style={{ height: 747 }}>
            Authentication Forms
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

const StyledHeroSection = styled(HeroSection)`
  padding: 24px 0;

  .grid-container {
    margin-bottom: 36px;
  }

  .grid-item-left {
    margin-bottom: 16px;
  }

  .logo-image {
    display: block;
    width: ${LOGO_SIZE}px;
    height: ${LOGO_SIZE}px;
  }

  .logo-text {
    padding: 16px;
  }

  .hero-primary-text {
    margin-bottom: 16px;
    font-size: 36px;
    font-weight: 600;
    text-shadow: 2px 2px #000;
    color: ${({ theme }) => theme.palette.secondary.main};

    ${({ theme }) => theme.breakpoints.down("xs")} {
      font-size: 40px;
      line-height: 44px;
      letter-spacing: 1px;
    }
  }

  .hero-feature-list {
    margin-top: 24px;
    margin-bottom: 56px;
  }

  .hero-feature-text {
    display: list-item;
    font-size: 24px;
    font-weight: 600;
    text-shadow: 2px 2px #000;
    color: #63b760;
  }
`;

export { StyledHeroSection as HeroSection };
