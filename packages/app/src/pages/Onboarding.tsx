import { ContentCenterWrapper } from "components/atoms/ContentCenterWrapper";
import {
  PanelManager,
  PanelManagerProps,
} from "components/molecules/PanelManager";
import { EntrySelect } from "components/organisms/EntrySelect";
import { createSelectEntryPlaceholderData } from "components/organisms/EntrySelect/createSelectEntryPlaceholderData";
import {
  OnboardingHeader,
  OnboardingHeaderProps,
} from "components/organisms/OnboardingHeader";
import { PanelBottomButtonNav } from "components/organisms/PanelBottomButtonNav";
import { SelectionSummary } from "components/organisms/SelectionSummary";
import { Stepper } from "components/organisms/Stepper";
import strings from "l10n";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled";

export const Onboarding = withRouter(props => {
  // Will be replaced with connection to Redux store.
  const RootPanelManager = createPlaceholderPanelManager(3);
  const CategoryPanelManager = createPlaceholderPanelManager(3);

  // TODO: Wire to Redux sign-out logic
  const handleLogout = () => props.history.push("/");

  const onboardingHeaderProps: OnboardingHeaderProps = {
    logoutButtonProps: { onClick: handleLogout },
  };

  const stepperLabels = [
    strings.onboardingSelectEntryType,
    strings.onboardingSelectCategory,
    strings.onboardingPlan,
  ];

  const entrySelectProps = createSelectEntryPlaceholderData();
  const categorySelectProps = createSelectEntryPlaceholderData();
  categorySelectProps.entries.splice(5);
  categorySelectProps.maxSelectedCount = 1;
  categorySelectProps.minSelectedCount = 1;

  return (
    <RootPanelManager>
      {rootPanelApi => (
        <ContentCenterWrapper>
          <header>
            <OnboardingHeader {...onboardingHeaderProps} />
            <StepperWrapper>
              <Stepper
                labels={stepperLabels}
                visitedCount={rootPanelApi.currentPanel + 1}
              />
            </StepperWrapper>
          </header>

          <main>
            {rootPanelApi.currentPanel === 0 && (
              <>
                <Typography variant="headline" gutterBottom>
                  {strings.onboardingPleaseSelectAtLeastOneEntryType}
                </Typography>
                <EntrySelect {...entrySelectProps} />
              </>
            )}

            {rootPanelApi.currentPanel > 0 && (
              <SelectionSummary
                label={strings.onboardingSummarySelectedEntryType}
                selections="Army, Navy, AirForce"
                onChangeClick={() => rootPanelApi.goto(0)}
                smallBottomMargin={rootPanelApi.currentPanel === 2}
              />
            )}

            {rootPanelApi.currentPanel === 1 && (
              <>
                <Typography variant="headline" gutterBottom>
                  {strings.onboardingPleaseSelectCategoryTypeEachEntry}
                </Typography>

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

                <EntrySelect {...categorySelectProps} />
              </>
            )}

            {rootPanelApi.currentPanel === 2 && (
              <>
                <SelectionSummary
                  label={strings.onboardingPleaseSelectMembershipPlan}
                  selections="Soldier GD, Soldier Tradesman"
                  onChangeClick={() => rootPanelApi.goto(1)}
                />

                <Typography variant="headline" gutterBottom>
                  {strings.onboardingPleaseSelectMembershipPlan}
                </Typography>
              </>
            )}
          </main>

          <footer>
            <PanelBottomButtonNav
              backButtonLabel={strings.navigationBackButtonText}
              nextButtonLabel={
                rootPanelApi.currentPanel === 2
                  ? strings.navigationFinishButtonText
                  : strings.navigationNextButtonText
              }
              showBackButton={rootPanelApi.currentPanel > 0}
              showNextButton
              onBackButtonClick={() => rootPanelApi.gotoPrevious()}
              onNextButtonClick={() => {
                if (rootPanelApi.currentPanel === 2) return;
                rootPanelApi.gotoNext();
              }}
              label={
                rootPanelApi.currentPanel === 1
                  ? "Category Selected : Paramilitary (Asst comdt)"
                  : undefined
              }
            />
          </footer>
        </ContentCenterWrapper>
      )}
    </RootPanelManager>
  );
});

const StepperWrapper = styled.div`
  margin: ${props => props.theme.spacing.unit * 6}px 0;
`;

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
