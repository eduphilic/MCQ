import { OnboardingTemplate } from "components/templates/OnboardingTemplate";
import { createPlaceholderOnboardingTemplateProps } from "components/templates/OnboardingTemplate/createPlaceholderOnboardingTemplateProps";
import React, { SFC } from "react";

export const Step1: SFC<{}> = () => {
  const onboardingTemplateProps = createPlaceholderOnboardingTemplateProps({
    selectionSummariesCount: 0,
  });

  return (
    <OnboardingTemplate {...onboardingTemplateProps}>
      <div>Page Contents</div>
    </OnboardingTemplate>
  );
};
