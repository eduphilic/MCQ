import { strings } from "localization";
import React from "react";
import styled from "styled";

import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

import { DisableableLink } from "./DisableableLink";

export type TermsConditionsCheckboxProps = CheckboxProps & {
  className?: string;

  /** Whether link is disabled. */
  disabled: boolean;
};

export const TermsConditionsCheckbox = styled<TermsConditionsCheckboxProps>(
  ({ className, disabled, ...rest }) => (
    <div className={className}>
      <Checkbox color="primary" disabled={disabled} {...rest} />

      <DisableableLink
        disabled={disabled}
        to="/terms-conditions"
        label={strings.session_SessionForm_TermsConditionsCheckbox_Label}
      />
    </div>
  ),
)`
  display: flex;
  align-items: center;

  button {
    padding-left: ${({ theme }) => theme.spacing.unit}px;
    padding-right: ${({ theme }) => theme.spacing.unit}px;
    margin-right: ${({ theme }) => theme.spacing.unit * 3}px;
  }
`;
