import { RouteComponentProps } from "@reach/router";
import React, { SFC } from "react";
import { AboutSection, HeroSection } from "../features/landing";
import { LandingLayout } from "../layouts";
import { DarkTheme } from "../styled";

export const RootIndexPage: SFC<RouteComponentProps> = () => (
  <LandingLayout>
    <DarkTheme>
      <>
        {/* Hero section. */}
        <HeroSection />

        {/* About section.*/}
        <AboutSection />
      </>
    </DarkTheme>
  </LandingLayout>
);
