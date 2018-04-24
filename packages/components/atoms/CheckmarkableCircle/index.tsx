import Check from "@material-ui/icons/Check";
import React, { SFC } from "react";
import styled, { withProps } from "styled";

export interface CheckmarkableCircleProps {
  /**
   * Color to use when checked. Primary color or secondary color from theme.
   *
   * @default primary
   */
  color?: "primary" | "secondary";

  /**
   * Whether item is checked or not.
   */
  checked: boolean;
}

/**
 * Checkmark with primary and secondary color theme option. Grey when not
 * selected.
 */
export const CheckmarkableCircle: SFC<CheckmarkableCircleProps> = props => {
  const { checked } = props;

  return <Wrapper {...props}>{checked && <Check />}</Wrapper>;
};

const Wrapper = withProps<CheckmarkableCircleProps>()(styled.div)`
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => {
    const { checked, color = "primary" } = props;
    const palette = props.theme.palette;
    if (!checked) return palette.grey["300"];

    return color === "primary" ? palette.primary.main : palette.secondary.main;
  }};

  > svg {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
`;
