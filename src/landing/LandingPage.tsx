import { landingAttemptCourseCards } from "common/structures/landingAttemptCourseCards";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routePathFromLocalizationKey } from "../routes";

import { PageFooter } from "components/PageFooter";
import { Hero } from "./components/Hero";
import { LandingTemplate } from "./components/LandingTemplate";

type Props = RouteComponentProps<{}>;

export const LandingPage = withRouter<Props>(props => {
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
          signinSignupFormsProps={{
            onLoginSubmit: () => {
              navigateToOnboarding();
            },
            onSignupSubmit: () => {
              navigateToOnboarding();
            },
            passwordResetHref: routePathFromLocalizationKey(
              "routes_Landing_PasswordResetPage",
            ),
          }}
        />
      }
      testCardNodes={testCardNodes}
      footerNode={<PageFooter />}
    />
  );
});
