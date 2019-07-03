import React from "react";
import styled from "styled-components";
import { strings } from "../../../localization";

import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

import { AuthenticationFormLink } from "../../../../../components/AuthenticationFormLink";
// import { TextFieldTooltip } from "./TextFieldTooltip";

export type TermsConditionsCheckboxProps = CheckboxProps & {
  className?: string;

  /** Whether link is disabled. */
  disabled: boolean;

  error: boolean;
};

export const TermsConditionsCheckbox = styled(
  ({ className, disabled, error, ...rest }: TermsConditionsCheckboxProps) => (
    // <TextFieldTooltip
    //   open={Boolean(error)}
    //   title="Please review the Terms & Conditions."
    // >
    <div className={className}>
      <Checkbox color="primary" disabled={disabled} {...rest} />

      <AuthenticationFormLink disabled={disabled} to="/terms-conditions">
        {strings.session_SessionForm_TermsConditionsCheckbox_Label}
      </AuthenticationFormLink>
    </div>
    // </TextFieldTooltip>
  ),
)`
  display: flex;
  align-items: center;
`;
