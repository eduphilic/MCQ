import strings from "l10n";
import React from "react";
import { OnboardingTemplateProps } from ".";
import { SelectionSummary } from "../../organisms/SelectionSummary";

interface Options {
  selectionSummariesCount: number;
  onLogoutButtonClick?: () => void;
}

export const createPlaceholderOnboardingTemplateProps = (
  options: Options,
): OnboardingTemplateProps => {
  // tslint:disable-next-line:no-empty
  const onLogoutButtonClick = options.onLogoutButtonClick || (() => {});

  const selectionSummaries = [
    <SelectionSummary
      key="selectedEntryType"
      label={strings.onboardingSummarySelectedEntryType}
      selections="Army, Navy, AirForce"
      onChangeClickUrl="/welcome/1"
    />,
    <SelectionSummary
      key="selectedCategories"
      label={strings.onboardingSummarySelectedCategories}
      selections="Soldier GD, Soldier Tradesman"
      onChangeClickUrl="/welcome/2"
    />,
  ].slice(0, options.selectionSummariesCount);

  return {
    onboardingAppBarProps: { onLogoutButtonClick },
    panelBottomButtonNavProps: {
      backButtonLabel: strings.navigationBackButtonText,
      nextButtonLabel: strings.navigationNextButtonText,
      // tslint:disable-next-line:no-empty
      onBackButtonClick: () => {},
      // tslint:disable-next-line:no-empty
      onNextButtonClick: () => {},
      showBackButton: false,
      showNextButton: true,
    },
    selectionSummaries,
    stepText: strings.onboardingPleaseSelectAtLeastOneEntryType,
    stepperProps: {
      labels: [
        strings.onboardingSelectEntryType,
        strings.onboardingSelectCategory,
        strings.onboardingPlan,
      ],
      visitedCount: 1,
    },
    username: "Jay",
  };
};
