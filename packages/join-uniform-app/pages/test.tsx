import {
  Grid,
  IndexCard,
  LayoutLanding,
  Typography,
} from "@join-uniform/components";
import {
  GetIndexPageConfigComponent,
  GetIndexPageConfigQuery,
} from "@join-uniform/graphql";
import { DarkTheme, LightTheme, styled } from "@join-uniform/theme";
import Head from "next/head";
import React from "react";
import { AboutSection, HeroSection } from "~/lib/landing";
import { withQueryLoadingSpinner } from "~/lib/utils";

type IndexPageConfigs = GetIndexPageConfigQuery;

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
                backgroundImageUrl={
                  indexPageConfigs.indexPageConfig.heroBackgroundImageUrl
                }
                backgroundAlpha={
                  indexPageConfigs.indexPageConfig.heroBackgroundAlpha
                }
                primaryText={indexPageConfigs.indexPageConfig.heroPrimaryText}
                features={indexPageConfigs.indexPageConfig.heroFeatures}
                logoUrl={indexPageConfigs.logoConfig.url}
              />

              <AboutSection
                title={indexPageConfigs.indexPageConfig.aboutTitle}
                about={indexPageConfigs.indexPageConfig.aboutText}
                images={indexPageConfigs.indexPageConfig.aboutImages}
              />

              <HeroFooterSection
                indexPageConfig={indexPageConfigs.indexPageConfig}
              />

              <IndexCardsSection indexCards={indexPageConfigs.indexCards} />
            </>
          ),
        )}
      </DarkTheme>
    </LayoutLanding>
  );
}

const HeroFooterSection = styled(
  (props: {
    className?: string;
    indexPageConfig: IndexPageConfigs["indexPageConfig"];
  }) => {
    const {
      className,
      indexPageConfig: { heroFooterText },
    } = props;

    return (
      <Grid className={className} container>
        <Grid className="hero-footer-text-wrapper" item xs={12}>
          <Typography className="hero-footer-text" variant="h6" align="center">
            {heroFooterText.en}
          </Typography>
        </Grid>
      </Grid>
    );
  },
)`
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

const IndexCardsSection = styled(
  (props: {
    className?: string;
    indexCards: IndexPageConfigs["indexCards"];
  }) => {
    const { indexCards } = props;

    return (
      <LightTheme>
        <>
          {indexCards.map((indexCard, index) => (
            <IndexCard
              key={index}
              title={indexCard.title}
              colorBlock={indexCard.colorBlock}
              colorCategoryBackground={indexCard.colorCategoryBackground}
              colorLogoBackground={indexCard.colorLogoBackground}
              colorTitle={"#000"}
              categories={indexCard.categories.map(category => category.title)}
              entryLogoUrl={indexCard.entryLogoUrl}
            />
          ))}
        </>
      </LightTheme>
    );
  },
)``;
