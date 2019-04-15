import { LayoutLanding, LoadingSpinner } from "@join-uniform/components";
import { DarkTheme } from "@join-uniform/theme";
import Head from "next/head";
import React, { useMemo } from "react";
import {
  LandingGetIndexPageConfigHOC,
  LandingGetIndexPageConfigProps,
} from "~/lib/client";
import {
  AboutSection,
  HeroFooterSection,
  HeroSection,
  IndexCardsSection,
  IndexCardsSectionProps,
} from "~/lib/landing";

type Props = LandingGetIndexPageConfigProps<{}>;

function IndexPage(props: Props) {
  const { data } = props;
  if (!data || data.loading || data.error) return <LoadingSpinner />;

  const { indexPageConfig, logoConfig, indexCards } = data;
  const {
    heroBackgroundImageUrl,
    heroBackgroundAlpha,
    heroPrimaryText,
    heroFeatures,
    heroFooterText,
    aboutTitle,
    aboutText,
    aboutImages,
  } = indexPageConfig!;
  const { url: logoUrl } = logoConfig!;
  const memoizedIndexCards = useMemo(
    () =>
      indexCards!.map(
        ({ categories, ...rest }): IndexCardsSectionProps["indexCards"][0] => ({
          ...rest,
          categories: categories.map(c => c.title),
        }),
      ),
    [indexCards!],
  );

  return (
    <LayoutLanding>
      <Head>
        <title>Join Uniform</title>
      </Head>
      <DarkTheme>
        <>
          <HeroSection
            backgroundImageUrl={heroBackgroundImageUrl}
            backgroundAlpha={heroBackgroundAlpha}
            primaryText={heroPrimaryText}
            features={heroFeatures}
            logoUrl={logoUrl}
          />

          <AboutSection
            title={aboutTitle}
            about={aboutText}
            images={aboutImages}
          />

          <HeroFooterSection footerText={heroFooterText} />

          <IndexCardsSection indexCards={memoizedIndexCards} />
        </>
      </DarkTheme>
    </LayoutLanding>
  );
}

export default LandingGetIndexPageConfigHOC(undefined)(IndexPage);
