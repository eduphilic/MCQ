import { RouteComponentProps } from "@reach/router";
import React, { SFC } from "react";
import { AboutSection, HeroFooter, HeroSection } from "../features/landing";
import { LandingLayout } from "../layouts";
import { DarkTheme } from "../styled";

export const RootIndexPage: SFC<RouteComponentProps> = () => (
  <LandingLayout>
    <DarkTheme>
      <>
        <HeroSection />

        <AboutSection />

        <HeroFooter />
      </>
    </DarkTheme>
  </LandingLayout>
);
