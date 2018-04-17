import { Hero } from "components/organisms/Hero";
import { LandingTemplate } from "components/templates/LandingTemplate";
import React, { SFC } from "react";

const Home: SFC<{}> = () => (
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
    testCardNodes={[<div>Test Card Node</div>]}
    footerNode={<div>Footer Node</div>}
  />
);

export default Home;
