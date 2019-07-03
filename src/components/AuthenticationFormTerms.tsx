import { Checkbox, FormControlLabel } from "@material-ui/core";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import React from "react";
import styled from "styled-components";
import { AuthenticationFormLink } from "./AuthenticationFormLink";
import { AuthenticationFormTooltip } from "./AuthenticationFormTooltip";

type Props = CheckboxProps & {
  error?: boolean;
};

export function AuthenticationFormTerms(props: Props) {
  const { disabled, error, ...rest } = props;

  return (
    <AuthenticationFormTooltip
      open={error}
      title="Please agree to the terms of service"
    >
      <StyledFormControlLabel
        control={<StyledCheckbox {...rest} disabled={disabled} />}
        label={
          <span>
            I agree to the{" "}
            <AuthenticationFormLink to="/terms-conditions" disabled={disabled}>
              Join Uniform Terms
            </AuthenticationFormLink>
          </span>
        }
      />
    </AuthenticationFormTooltip>
  );
}

const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    font-size: 12px;
    user-select: none;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiFormControlLabel-label {
      font-size: 14px;
    }
  }
`;

const StyledCheckbox = styled(Checkbox)`
  padding: 0;
  margin-right: 8px;
  border-radius: 0;
`;
