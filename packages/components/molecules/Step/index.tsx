// import strings from "l10n";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled, { withProps } from "styled";

export interface StepProps {
  className?: string;

  /** The step number. */
  stepNumber: number;

  /** The step label. */
  label: string;

  /** Whether or not the step has or is being visited. */
  visited: boolean;
}

/**
 * Step for the stepper on the onboarding screens.
 */
export const Step: SFC<StepProps> = props => {
  const { className, stepNumber, visited, label } = props;
  // const stepLabel = strings.onboardingStep
  //   // tslint:disable-next-line:no-invalid-template-strings
  //   .replace("${1}", stepNumber.toString())
  //   .toUpperCase();

  return (
    <Wrapper className={className}>
      <Circle visited={visited}>
        {visited && <CircleStepNumber>{stepNumber}</CircleStepNumber>}
      </Circle>

      {/* <Label visited={visited}>{stepLabel}</Label> */}

      <Label visited={visited}>{label}</Label>
    </Wrapper>
  );
};

export const stepWidth = 128;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: ${stepWidth}px;
`;

const Circle = withProps<{ visited: boolean }>()(styled.div)`
  position: relative;
  width: ${props => props.theme.spacing.unit * 4}px; /* 32px */
  height: ${props => props.theme.spacing.unit * 4}px; /* 32px */
  border-radius: 50%;
  background-color: ${props =>
    props.visited
      ? props.theme.palette.primary.main
      : props.theme.palette.grey["500"]};
`;

const CircleStepNumber = styled(Typography).attrs({ variant: "button" })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.palette.common.white};
`;

const Label = withProps<{ visited: boolean }>()(
  styled(Typography).attrs({ variant: "button" }),
)`
  font-size: 14px;
  text-align: center;
  text-transform: none;
  color: ${props =>
    props.visited ? "#4f4f4f" : props.theme.palette.grey["500"]};

  /* &:nth-child(2) { */
    margin-top: ${props => props.theme.spacing.unit}px; /* 8px */
  /* } */
`;
