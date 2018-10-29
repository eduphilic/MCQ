import { Link } from "@reach/router";
import React, { cloneElement } from "react";
import { Button } from "../../../components/Button";
import { styled } from "../../../styled";

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
    <Button variant="text" disabled={disabled}>
      {label}
    </Button>
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
