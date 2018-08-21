import React, { SFC } from "react";

import { PageFooter } from "componentsV0/PageFooter";
import { Hero } from "./components/Hero";
import { IndexCards } from "./components/IndexCards";
import { LandingTemplate } from "./components/LandingTemplate";

export const LandingPage: SFC<{}> = () => {
  return (
    <LandingTemplate
      heroNode={<Hero />}
      testCardNode={<IndexCards />}
      footerNode={<PageFooter />}
    />
  );
};
