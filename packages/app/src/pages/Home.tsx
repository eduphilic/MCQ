import { PageFooter } from "components/atoms/PageFooter";
import { AttemptCourseCard } from "components/organisms/AttemptCourseCard";
import { createPlaceholderData as createAttemptCourseCardPlaceholderData } from "components/organisms/AttemptCourseCard/createPlaceholderData";
import { Hero } from "components/organisms/Hero";
import {
  LandingTemplate,
  LandingTemplateProps,
} from "components/templates/LandingTemplate";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

type HomeProps = RouteComponentProps<{}> & {};

export const Home = withRouter<HomeProps>(props => {
  const testCardNodes: LandingTemplateProps["testCardNodes"] = [];
  for (let i = 0; i < 3; i += 1) {
    const placeholderData = createAttemptCourseCardPlaceholderData(() => {
      //
    });
    testCardNodes.push(<AttemptCourseCard {...placeholderData} />);
  }

  const navigateToOnboarding = () => props.history.push("/welcome");

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
