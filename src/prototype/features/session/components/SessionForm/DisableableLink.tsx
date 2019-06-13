import React, { cloneElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { TypographyButton } from "../../../../componentsV0/TypographyButton";

export type DisableableLinkProps = {
  className?: string;

  /** Link text. */
  label: string;

  /** Link path. */
  to: string;

  /** Whether link is disabled. */
  disabled: boolean;
};

export const DisableableLink = styled((props: DisableableLinkProps) => {
  const { className, label, to, disabled } = props;

  const button = (
    <TypographyButton variant="text" disabled={disabled}>
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
