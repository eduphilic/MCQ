import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import React from "react";
import { styled } from "../../../styled";
import { DisableableLink } from "./DisableableLink";
import { TextFieldTooltip } from "./TextFieldTooltip";

export type TermsConditionsCheckboxProps = CheckboxProps & {
  className?: string;

  /** Whether link is disabled. */
  disabled: boolean;

  error: boolean;

  label: string;
};

export const TermsConditionsCheckbox = styled<TermsConditionsCheckboxProps>(
  ({ className, disabled, error, label, ...rest }) => (
    <TextFieldTooltip
      open={Boolean(error)}
      title="Please review the Terms & Conditions."
    >
      <div className={className}>
        <Checkbox color="primary" disabled={disabled} {...rest} />

        <DisableableLink
          disabled={disabled}
          to="/terms-conditions"
          label={label}
        />
      </div>
    </TextFieldTooltip>
  ),
)`
  display: flex;
  align-items: center;
`;
