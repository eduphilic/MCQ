import { RouteComponentProps } from "@reach/router";
import React, { SFC } from "react";
import { AboutSection, HeroFooter, HeroSection } from "../features/landing";
import { LandingLayout } from "../layouts/LandingLayout";
import { DarkTheme } from "../styled";

const RootIndexPage: SFC<RouteComponentProps> = () => (
  <LandingLayout>
    <DarkTheme>
      <>
        {/* <HeroSection /> */}

        {/* <AboutSection /> */}

        <HeroFooter />
      </>
    </DarkTheme>
  </LandingLayout>
);

export default RootIndexPage;
