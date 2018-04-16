// tslint:disable-next-line:no-submodule-imports
import OnboardingHeroSection from "components/OnboardingHeroSection";
import React, { SFC } from "react";
import LanguageSelectContainer from "../containers/LanguageSelectContainer";
import OnboardingFormsContainer from "../containers/OnboardingFormsContainer";

const Home: SFC<{}> = () => (
  <>
    <header>
      <OnboardingHeroSection
        onboardingTextNode={
          <>
            <LanguageSelectContainer />
          </>
        }
        onboardingFormNode={<OnboardingFormsContainer />}
      />
    </header>
  </>
);

export default Home;
