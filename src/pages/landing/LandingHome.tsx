import { AttemptCourseCard } from "components/AttemptCourseCard";
import { createPlaceholderData as createAttemptCourseCardPlaceholderData } from "components/AttemptCourseCard/createPlaceholderData";
import { Hero } from "components/Hero";
import {
  LandingTemplate,
  LandingTemplateProps,
} from "components/LandingTemplate";
import { PageFooter } from "components/PageFooter";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

type HomeProps = RouteComponentProps<{}> & {};

export const LandingHome = withRouter<HomeProps>(props => {
  const testCardNodes: LandingTemplateProps["testCardNodes"] = [];
  for (let i = 0; i < 3; i += 1) {
    const placeholderData = createAttemptCourseCardPlaceholderData(() => {
      //
    });
    testCardNodes.push(<AttemptCourseCard {...placeholderData} />);
  }

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
