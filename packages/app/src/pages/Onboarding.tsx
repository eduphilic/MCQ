import { ContentCenterWrapper } from "components/atoms/ContentCenterWrapper";
import {
  PanelManager,
  PanelManagerProps,
} from "components/molecules/PanelManager";
import {
  OnboardingHeader,
  OnboardingHeaderProps,
} from "components/organisms/OnboardingHeader";
import { Stepper } from "components/organisms/Stepper";
import strings from "l10n";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export const Onboarding = withRouter(props => {
  // Will be replaced with connection to Redux store.
  const RootPanelManager = createPlaceholderPanelManager(3);

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

  return (
    <RootPanelManager>
      {rootPanelApi => (
        <ContentCenterWrapper>
          <header>
            <OnboardingHeader {...onboardingHeaderProps} />
            <Stepper
              labels={stepperLabels}
              visitedCount={rootPanelApi.currentPanel + 1}
            />
          </header>
        </ContentCenterWrapper>
      )}
    </RootPanelManager>
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
