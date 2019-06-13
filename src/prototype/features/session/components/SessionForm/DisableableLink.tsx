import React, { cloneElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled";

import { TypographyButton } from "componentsV0/TypographyButton";

export type DisableableLinkProps = {
  className?: string;

  /** Link text. */
  label: string;

  /** Link path. */
  to: string;

  /** Whether link is disabled. */
  disabled: boolean;
};

export const DisableableLink = styled<DisableableLinkProps>(props => {
  const { className, label, to, disabled } = props;

  const button = (
    <TypographyButton variant="flat" disabled={disabled}>
      {label}
    </TypographyButton>
  );

  const wrapper = disabled ? <div /> : <Link to={to} />;

  return cloneElement(wrapper, { className }, button);
})`
  margin-left: auto;

  * {
    font-size: 12px;
  }

  button {
    padding: 8px 16px;
  }
`;
