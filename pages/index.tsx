import { Button, Dialog, IconButton, Toolbar } from "@material-ui/core";
import { ToolbarProps } from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Logo } from "../src/components";
import { LandingPageLayout } from "../src/components/LandingPageLayout";

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
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  // const [authDialog, setAuthDialog] = useState<"signin" | "signup">("signin");

  const handleSignInButtonClick = () => {
    setAuthDialogOpen(true);
  };

  const handleAuthDialogClose = () => {
    setAuthDialogOpen(false);
  };

  return (
    <>
      <LandingPageLayout
        sectionFoldAboveElement={
          <LandingHeroSectionWrapper
            heroBackgroundImageUrl={heroBackgroundImageUrl}
            heroBackgroundOpacity={heroBackgroundOpacity}
          >
            <LandingPageHeader>
              <Logo size={64} shadowed hideTextMobile />
              <LandingPageHeaderSpacer />
              <Button color="primary" onClick={handleSignInButtonClick}>
                Sign in
              </Button>
            </LandingPageHeader>
          </LandingHeroSectionWrapper>
        }
        sectionFoldBelowElement={<div style={{ height: "150vh" }}>Content</div>}
      />
      <Dialog fullScreen open={authDialogOpen} onClose={handleAuthDialogClose}>
        <LandingPageHeader>
          <Logo size={64} />
          <LandingPageHeaderSpacer />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Close"
            onClick={handleAuthDialogClose}
          >
            <CloseIcon />
          </IconButton>
        </LandingPageHeader>
      </Dialog>
    </>
  );
}

const LandingPageHeaderSpacer = styled.div`
  flex: 1;
`;

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
