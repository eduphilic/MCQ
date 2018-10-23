import { RouteComponentProps } from "@reach/router";
import React, { SFC } from "react";
import { HeroSection } from "../features/landing";
import { LandingLayout } from "../layouts";

export const RootIndexPage: SFC<RouteComponentProps> = () => (
  <LandingLayout>
    {/* Hero section. */}
    <HeroSection />

    {/* About section.*/}
  </LandingLayout>
);
