import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import React, { SFC } from "react";
import { styled } from "../../../styled";

export interface TooltipArrowProps {
  className?: string;
  direction?: "down" | "up";
}

/**
 * Error arrow for use in form validation tooltip.
 */
export const TooltipArrow: SFC<TooltipArrowProps> = ({
  direction,
  ...rest
}) => {
  const Component = styled(direction === "down" ? ArrowDropDown : ArrowDropUp)`
    color: #ff0000;
  `;

  return <Component {...rest} />;
};
