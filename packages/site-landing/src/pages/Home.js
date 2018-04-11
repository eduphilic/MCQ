import React, { Fragment } from "react";
import OnboardingHeroSection from "site-components/OnboardingHeroSection";
import OnboardingHeroLanguageSelectContainer from "../containers/OnboardingHeroLanguageSelectContainer";
import OnboardingFormsContainer from "../containers/OnboardingFormsContainer";

const Home = () => (
  <Fragment>
    <header>
      <OnboardingHeroSection
        onboardingTextNode={
          <Fragment>
            <OnboardingHeroLanguageSelectContainer />
          </Fragment>
        }
        onboardingFormNode={<OnboardingFormsContainer />}
      />
    </header>
  </Fragment>
);

export default Home;
