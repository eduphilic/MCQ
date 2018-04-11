import React, { Fragment } from "react";
import OnboardingHeroSection from "site-components/OnboardingHeroSection";
import OnboardingHeroLanguageSelectContainer from "../containers/OnboardingHeroLanguageSelectContainer";

const Home = () => (
  <Fragment>
    <header>
      <OnboardingHeroSection
        onboardingTextNode={
          <Fragment>
            <OnboardingHeroLanguageSelectContainer />
          </Fragment>
        }
        onboardingFormNode={<div>Placeholder</div>}
      />
    </header>
  </Fragment>
);

export default Home;
