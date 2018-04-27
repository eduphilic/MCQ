import {
  PanelManager,
  PanelManagerProps,
} from "components/molecules/PanelManager";
import { EntrySelect } from "components/organisms/EntrySelect";
import { createSelectEntryPlaceholderData } from "components/organisms/EntrySelect/createSelectEntryPlaceholderData";
import { OnboardingTemplate } from "components/templates/OnboardingTemplate";
import { createPlaceholderOnboardingTemplateProps } from "components/templates/OnboardingTemplate/createPlaceholderOnboardingTemplateProps";
import strings from "l10n";
import Tabs, { Tab } from "material-ui/Tabs";
import React, { Component, ReactElement } from "react";
import { withRouter } from "react-router-dom";

import { ExamQuantitySelector } from "components/molecules/ExamQuantitySelector";
import { createPlaceholderExamQuantitySelectorProps } from "components/molecules/ExamQuantitySelector/createPlaceholderExamQuantitySelectorProps";

export const Step1 = withRouter(props => {
  const { history } = props;

  const onboardingTemplateProps = createPlaceholderOnboardingTemplateProps({
    onLogoutButtonClick: () => history.push("/"),
    selectionSummariesCount: 0,
  });
  onboardingTemplateProps.panelBottomButtonNavProps = {
    ...onboardingTemplateProps.panelBottomButtonNavProps,
    onNextButtonClick: () => history.push("/welcome/2"),
  };

  const entrySelectProps = createSelectEntryPlaceholderData();

  return (
    <OnboardingTemplate {...onboardingTemplateProps}>
      <EntrySelect {...entrySelectProps} />
    </OnboardingTemplate>
  );
});

export const Step2 = withRouter(props => {
  const { history } = props;

  const onboardingTemplateProps = createPlaceholderOnboardingTemplateProps({
    onLogoutButtonClick: () => history.push("/"),
    selectionSummariesCount: 1,
  });
  onboardingTemplateProps.stepperProps = {
    ...onboardingTemplateProps.stepperProps,
    visitedCount: 2,
  };
  onboardingTemplateProps.stepText =
    strings.onboardingPleaseSelectCategoryTypeEachEntry;
  onboardingTemplateProps.panelBottomButtonNavProps = {
    ...onboardingTemplateProps.panelBottomButtonNavProps,
    onBackButtonClick: () => history.push("/welcome/1"),
    onNextButtonClick: () => history.push("/welcome/3"),
    showBackButton: true,
  };

  const CategoryPanelManager = createPlaceholderPanelManager(3);
  const entrySelectProps = createSelectEntryPlaceholderData();

  return (
    <OnboardingTemplate {...onboardingTemplateProps}>
      <CategoryPanelManager>
        {api => (
          <Tabs
            value={api.currentPanel}
            onChange={(_e, panelNumber) => api.goto(panelNumber)}
          >
            <Tab label="Army" />
            <Tab label="Navy" />
            <Tab label="AirForce" />>
          </Tabs>
        )}
      </CategoryPanelManager>

      <EntrySelect {...entrySelectProps} />
    </OnboardingTemplate>
  );
});

export const Step3 = withRouter(props => {
  const { history } = props;

  const onboardingTemplateProps = createPlaceholderOnboardingTemplateProps({
    onLogoutButtonClick: () => history.push("/"),
    selectionSummariesCount: 2,
  });
  onboardingTemplateProps.stepperProps = {
    ...onboardingTemplateProps.stepperProps,
    visitedCount: 3,
  };
  onboardingTemplateProps.stepText =
    strings.onboardingPleaseSelectMembershipPlan;
  onboardingTemplateProps.panelBottomButtonNavProps = {
    ...onboardingTemplateProps.panelBottomButtonNavProps,
    nextButtonLabel: strings.navigationFinishButtonText,
    onBackButtonClick: () => history.push("/welcome/2"),
    showBackButton: true,
  };

  const CategoryPanelManager = createPlaceholderPanelManager(3);
  const examQuantitySelectorProps = createPlaceholderExamQuantitySelectorProps();
  const examQuantitySelectorExamCategories = [
    "Sol GD",
    "Sol Tech",
    "Sol Pharm",
    "Sol NA",
  ];
  const examQuantitySelectors: ReactElement<any>[] = [];
  for (let i = 0; i < 4; i += 1) {
    examQuantitySelectors.push(
      <ExamQuantitySelector
        key={i}
        {...examQuantitySelectorProps}
        category={examQuantitySelectorExamCategories[i]}
      />,
    );
  }

  return (
    <OnboardingTemplate {...onboardingTemplateProps}>
      <CategoryPanelManager>
        {api => (
          <Tabs
            value={api.currentPanel}
            onChange={(_e, panelNumber) => api.goto(panelNumber)}
          >
            <Tab label="Army" />
            <Tab label="Navy" />
            <Tab label="AirForce" />>
          </Tabs>
        )}
      </CategoryPanelManager>

      <>{examQuantitySelectors}</>
    </OnboardingTemplate>
  );
});

// This logic should largely be replaced with a connection to Redux store.
function createPlaceholderPanelManager(panelCount: number) {
  return class extends Component<{ children: PanelManagerProps["children"] }> {
    state = {
      currentPanel: 0,
    };

    render() {
      const { currentPanel } = this.state;
      const { children } = this.props;
      const accessiblePanels: boolean[] = [];
      for (let i = 0; i < panelCount; i += 1) accessiblePanels.push(true);

      return (
        <PanelManager
          currentPanel={currentPanel}
          panelCount={panelCount}
          onPanelChange={panel => this.setState({ currentPanel: panel })}
          accessiblePanels={accessiblePanels}
        >
          {api => children(api)}
        </PanelManager>
      );
    }
  };
}
