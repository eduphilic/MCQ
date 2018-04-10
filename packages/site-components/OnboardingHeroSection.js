import React from "react";
import PropTypes from "prop-types";
import PageContentCentering from "./PageContentCentering";
import * as Components from "./OnboardingHeroSection.components";

/**
 * Hero section of the main landing page. It is responsible for responsively
 * arranging the hero content sections.
 */
const OnboardingHeroSection = ({ onboardingTextNode, onboardingFormNode }) => (
  <Components.Section>
    <PageContentCentering>
      <Components.ContentsContainer>
        <Components.PageTitleContainer>
          <Components.PageTitle>Join Uniform</Components.PageTitle>
        </Components.PageTitleContainer>

        <Components.OnboardingContainer>
          <Components.OnboardingTextSection>
            {onboardingTextNode}
          </Components.OnboardingTextSection>
          <Components.OnboardingFormSection>
            {onboardingFormNode}
          </Components.OnboardingFormSection>
        </Components.OnboardingContainer>
      </Components.ContentsContainer>
    </PageContentCentering>
  </Components.Section>
);

OnboardingHeroSection.propTypes = {
  /** Section providing the text contents on the left with language selection. */
  onboardingTextNode: PropTypes.node.isRequired,

  /** Section providing sign-up and login text. */
  onboardingFormNode: PropTypes.node.isRequired,
};

export default OnboardingHeroSection;
