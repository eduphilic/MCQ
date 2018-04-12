// tslint:disable-next-line:no-submodule-imports
import OnboardingHeroSection from "components/OnboardingHeroSection";
import React, { SFC } from "react";
import OnboardingFormsContainer from "../containers/OnboardingFormsContainer";
import OnboardingHeroLanguageSelectContainer from "../containers/OnboardingHeroLanguageSelectContainer";

const Home: SFC<{}> = () => (
  <>
    <header>
      <OnboardingHeroSection
        onboardingTextNode={
          <>
            <OnboardingHeroLanguageSelectContainer />
          </>
        }
        onboardingFormNode={<OnboardingFormsContainer />}
      />
    </header>
  </>
);

export default Home;
