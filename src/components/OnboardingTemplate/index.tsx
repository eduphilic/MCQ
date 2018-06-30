import { strings } from "localization";
import React, { ReactNode, SFC } from "react";
import styled from "styled";

import Typography from "@material-ui/core/Typography";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import {
  OnboardingAppBar,
  OnboardingAppBarProps,
} from "components/OnboardingAppBar";
import {
  PanelBottomButtonNav,
  PanelBottomButtonNavProps,
} from "components/PanelBottomButtonNav";
import { Stepper, StepperProps } from "components/Stepper";

export interface OnboardingTemplateProps {
  /**
   * AppBar props.
   */
  onboardingAppBarProps: OnboardingAppBarProps;

  /**
   * Stepper props.
   */
  stepperProps: StepperProps;

  /**
   * Components to display before page contents. Used to display a summary of a
   * user's choices from previous steps (<SelectionSummary />).
   */
  selectionSummaries: ReactNode[];

  /**
   * User's name to use in the welcome text.
   */
  username: string;

  /**
   * Description text of the current step.
   */
  stepText: string;

  panelBottomButtonNavProps: PanelBottomButtonNavProps;
}

/**
 * Template for the onboarding screens. Shown at first login to allow a user to
 * configure their account.
 */
export const OnboardingTemplate: SFC<OnboardingTemplateProps> = props => {
  const {
    onboardingAppBarProps,
    stepperProps,
    selectionSummaries,
    username,
    stepText,
    children,
    panelBottomButtonNavProps,
  } = props;

  const welcomeText = strings.onboardingWelcomeLetsSetupAccount.replace(
    // tslint:disable-next-line:no-invalid-template-strings
    "${1}",
    username,
  );

  return (
    <Wrapper>
      <AppBar {...onboardingAppBarProps} />

      <WelcomeText>{welcomeText}</WelcomeText>

      <StyledStepper {...stepperProps} />

      <SelectionSummariesWrapper>
        {selectionSummaries}
      </SelectionSummariesWrapper>

      <StepText>{stepText}</StepText>

      <PageContentsWrapper>{children}</PageContentsWrapper>

      <StyledPanelBottomButtonNav {...panelBottomButtonNavProps} />
    </Wrapper>
  );
};

const Wrapper = styled(ContentCenterWrapper)`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: 100%;
`;

const AppBar = styled(OnboardingAppBar)`
  margin-top: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const WelcomeText = styled(Typography).attrs({ variant: "display1" })`
  margin: ${({ theme }) => theme.spacing.unit * 3}px 0;
  font-size: 24px;
  font-weight: 500;
`;

const StyledStepper = styled(Stepper)`
  flex-shrink: 0;
  margin: ${({ theme }) => theme.spacing.unit * 5}px 0;
`;

const SelectionSummariesWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;

  > div {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
  }
`;

const StepText = styled(Typography).attrs({ variant: "subheading" })`
  margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
  font-weight: 500;
`;

const PageContentsWrapper = styled.div`
  flex: 1;
`;

const StyledPanelBottomButtonNav = styled(PanelBottomButtonNav)`
  flex-shrink: 0;
`;
