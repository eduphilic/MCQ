import { landingAttemptCourseCards } from "common/structures/landingAttemptCourseCards";
import React, { SFC } from "react";

import { PageFooter } from "components/PageFooter";
import { Hero } from "./components/Hero";
import { LandingTemplate } from "./components/LandingTemplate";

export const LandingPage: SFC<{}> = () => {
  const testCardNodes = landingAttemptCourseCards();

  return (
    <LandingTemplate
      heroNode={
        <Hero
          languageSelectProps={{
            language: "english",
            onChange: () => {
              //
            },
          }}
        />
      }
      testCardNodes={testCardNodes}
      footerNode={<PageFooter />}
    />
  );
};
