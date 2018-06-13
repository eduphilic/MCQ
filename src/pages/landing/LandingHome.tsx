import { landingAttemptCourseCards } from "common/structures/landingAttemptCourseCards";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { Hero } from "components/Hero";
import { LandingTemplate } from "components/LandingTemplate";
import { PageFooter } from "components/PageFooter";

type HomeProps = RouteComponentProps<{}> & {};

export const LandingHome = withRouter<HomeProps>(props => {
  const testCardNodes = landingAttemptCourseCards();

  const navigateToOnboarding = () => props.history.push("/welcome/1");

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
          onboardingFormsProps={{
            onLoginSubmit: () => {
              navigateToOnboarding();
            },
            onSignupSubmit: () => {
              navigateToOnboarding();
            },
            passwordResetHref: "/resetPassword",
          }}
        />
      }
      testCardNodes={testCardNodes}
      footerNode={<PageFooter />}
    />
  );
});
