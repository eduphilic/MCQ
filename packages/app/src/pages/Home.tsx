import { PageFooter } from "components/atoms/PageFooter";
import { AttemptCourseCard } from "components/organisms/AttemptCourseCard";
import { createPlaceholderData as createAttemptCourseCardPlaceholderData } from "components/organisms/AttemptCourseCard/createPlaceholderData";
import { Hero } from "components/organisms/Hero";
import {
  LandingTemplate,
  LandingTemplateProps,
} from "components/templates/LandingTemplate";
import React, { SFC } from "react";

const Home: SFC<{}> = () => {
  const testCardNodes: LandingTemplateProps["testCardNodes"] = [];
  for (let i = 0; i < 3; i += 1) {
    const placeholderData = createAttemptCourseCardPlaceholderData(() => {
      //
    });
    testCardNodes.push(<AttemptCourseCard {...placeholderData} />);
  }

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
              //
            },
            onSignupSubmit: () => {
              //
            },
            passwordResetHref: "/forgotPassword",
          }}
        />
      }
      testCardNodes={testCardNodes}
      footerNode={<PageFooter />}
    />
  );
};

export default Home;
