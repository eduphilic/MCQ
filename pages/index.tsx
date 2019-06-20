import { Toolbar } from "@material-ui/core";
import { ToolbarProps } from "@material-ui/core/Toolbar";
import React from "react";
import styled, { css } from "styled-components";
import { Logo, PageFooter, pageFooterHeight } from "../src/components";

type LandingPageProps = {
  /**
   * Background image to use for the hero section of the landing page.
   */
  heroBackgroundImageUrl: string;

  /**
   * Controls how much darkening is performed on the hero image to improve the
   * legibility of the text. Accepts a value between `0` and `1`.
   */
  heroBackgroundOpacity: number;
};

const props: LandingPageProps = {
  heroBackgroundImageUrl: "/static/images/hero/soldier-optimized.png",
  heroBackgroundOpacity: 0.25,
};

enum GridTemplateArea {
  // Outer grid.
  Hero = "hero",
  Footer = "footer",

  // Inner hero grid.
  HeroHeader = "hero-header",
  HeroContents = "hero-contents",
}

export default function LandingPage() {
  const { heroBackgroundImageUrl, heroBackgroundOpacity } = props;

  return (
    <LandingPageLayout>
      <LandingHeroSectionWrapper
        heroBackgroundImageUrl={heroBackgroundImageUrl}
        heroBackgroundOpacity={heroBackgroundOpacity}
      >
        <LandingPageHeader>
          <Logo size={64} shadowed />
        </LandingPageHeader>

        <div style={{ height: "150vh" }}>Content</div>
      </LandingHeroSectionWrapper>
      <PageFooter />
    </LandingPageLayout>
  );
}

const LandingPageHeader = styled(Toolbar).attrs(
  (): ToolbarProps => ({ component: "header" }),
)`
  width: 100%;
  max-width: ${({ theme }) =>
    theme.breakpoints.values[theme.app.maxContentWidthBreakpoint]}px;
  margin: ${({ theme }) => theme.spacing(3)}px auto 0 auto;
`;

const heroBackgroundCss = css<
  Pick<LandingPageProps, "heroBackgroundImageUrl" | "heroBackgroundOpacity">
>`
  ${({ heroBackgroundImageUrl, heroBackgroundOpacity }) => `
    background: linear-gradient( rgba(0, 0, 0, ${heroBackgroundOpacity}), rgba(0, 0, 0, ${heroBackgroundOpacity}) ), url("${heroBackgroundImageUrl}");
  `};
  background-size: cover;
`;

const LandingHeroSectionWrapper = styled.div<
  Pick<LandingPageProps, "heroBackgroundImageUrl" | "heroBackgroundOpacity">
>`
  min-height: 100vh;
  ${heroBackgroundCss};

  /* Internet Explorer support. */
  display: flex;
  flex-direction: column;

  @supports (display: grid) {
    display: grid;
    grid-template-areas:
      "${GridTemplateArea.HeroHeader}"
      "${GridTemplateArea.HeroContents}";
    grid-template-rows: 60px 1fr;
  }
`;

const LandingPageLayout = styled.div`
  min-height: 100vh;

  /* Internet Explorer support. */
  display: flex;
  flex-direction: column;

  @supports (display: grid) {
    display: grid;
    grid-template-areas:
      "${GridTemplateArea.Hero}"
      "${GridTemplateArea.Footer}";
    grid-template-rows: 1fr ${pageFooterHeight}px;

    ${LandingHeroSectionWrapper} {
      grid-area: ${GridTemplateArea.Hero};
    }

    ${PageFooter} {
      grid-area: ${GridTemplateArea.Footer};
    }
  }
`;
