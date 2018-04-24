import strings from "l10n";
import Typography from "material-ui/Typography";
import React, { ReactNode, SFC } from "react";
import styled from "styled";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import {
  OnboardingAppBar,
  OnboardingAppBarProps,
} from "../../organisms/OnboardingAppBar";
import { Stepper, StepperProps } from "../../organisms/Stepper";

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

      <Typography variant="title">{stepText}</Typography>

      <PageContentsWrapper>Page Contents</PageContentsWrapper>

      <div>Bottom Toolbar</div>
    </Wrapper>
  );
};

const Wrapper = styled(ContentCenterWrapper)`
  display: flex;
  flex-direction: column;
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
  margin: ${({ theme }) => theme.spacing.unit * 5}px 0;
`;

const SelectionSummariesWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;

  > div {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
  }
`;

const PageContentsWrapper = styled.div`
  flex: 1;
`;
