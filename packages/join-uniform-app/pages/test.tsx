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
import { AboutSection, HeroFooterSection, HeroSection } from "~/lib/landing";
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
                footerText={indexPageConfigs.indexPageConfig.heroFooterText}
              />

              <IndexCardsSection indexCards={indexPageConfigs.indexCards} />
            </>
          ),
        )}
      </DarkTheme>
    </LayoutLanding>
  );
}

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
