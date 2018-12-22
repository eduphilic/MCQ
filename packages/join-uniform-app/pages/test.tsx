import {
  Grid,
  GridHideable,
  LayoutLanding,
  LogoText,
  Typography,
} from "@join-uniform/components";
import {
  GetIndexPageConfigComponent,
  GetIndexPageConfigQuery,
} from "@join-uniform/graphql";
import { DarkTheme, styled } from "@join-uniform/theme";
import Head from "next/head";
import React from "react";
import { createResponsiveImageUrl, withQueryLoadingSpinner } from "~/lib/utils";

type IndexPageConfigs = GetIndexPageConfigQuery;

const logoSize = 64;

// TODO: Use localized text strings!

export default function IndexPage() {
  return (
    <LayoutLanding>
      <Head>
        <title>Join Uniform</title>
      </Head>
      <DarkTheme>
        {withQueryLoadingSpinner(
          GetIndexPageConfigComponent,
          ({ data: indexPageConfigs }) => (
            <>
              <HeroSection
                indexPageConfig={indexPageConfigs.indexPageConfig}
                logoConfig={indexPageConfigs.logoConfig}
              >
                <div>Placeholder</div>
              </HeroSection>
            </>
          ),
        )}
      </DarkTheme>
    </LayoutLanding>
  );
}

const HeroSection = styled(
  (props: {
    className?: string;
    indexPageConfig: IndexPageConfigs["indexPageConfig"];
    logoConfig: IndexPageConfigs["logoConfig"];
  }) => {
    const {
      className,
      indexPageConfig: {
        heroBackgroundImageUrl,
        heroBackgroundAlpha,
        heroPrimaryText,
        heroFeatures,
      },
      logoConfig: { url: logoUrl },
    } = props;

    return (
      <div
        className={className}
        style={{
          // prettier-ignore
          background: `linear-gradient( rgba(0, 0, 0, ${heroBackgroundAlpha}), rgba(0, 0, 0, ${heroBackgroundAlpha}) ), url("${heroBackgroundImageUrl}")`,
          backgroundSize: "cover",
        }}
      >
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
                <img
                  className="logo-image"
                  src={createResponsiveImageUrl(logoUrl, {
                    w: logoSize.toString(),
                    h: logoSize.toString(),
                    format: "png",
                  })}
                />
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
                  {heroPrimaryText.en}
                </Typography>
              </Grid>
              <Grid item>
                <ul className="hero-feature-list">
                  {heroFeatures.map((feature, index) => (
                    <Typography
                      key={index}
                      className="hero-feature-text"
                      variant="h6"
                      component="li"
                    >
                      {feature.en}
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
  },
)`
  padding: 24px 0;

  .grid-container {
    margin-bottom: 36px;
  }

  .grid-item-left {
    margin-bottom: 16px;
  }

  .logo-image {
    display: block;
    width: ${logoSize}px;
    height: ${logoSize}px;
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
