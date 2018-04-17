import Button, { ButtonProps } from "material-ui/Button";
import React, { SFC } from "react";
import styled from "styled";

export type AttemptButtonProps = ButtonProps;

/**
 * Attempt button for call to action cards on landing page.
 */
export const AttemptButton: SFC<AttemptButtonProps> = props => {
  const { children, ...rest } = props;

  return <StyledAttemptButton {...rest as any}>Attempt</StyledAttemptButton>;
};

const StyledAttemptButton = styled(Button).attrs({
  classes: { label: "label" },
})`
  min-height: inherit;
  padding: 4px 8px;

  ${props => `
    color: ${props.theme.palette.primary.main};
    border: 1px solid ${props.theme.palette.primary.main}
  `};

  .label {
    font-size: 10px;
    font-weight: 600;
  }
`;
