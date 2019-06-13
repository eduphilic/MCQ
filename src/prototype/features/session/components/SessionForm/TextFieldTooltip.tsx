import React, { ReactElement, ReactNode, SFC } from "react";
import styled from "styled-components";
import "./TextFieldTooltip.css";

import Tooltip from "@material-ui/core/Tooltip";

import { TooltipArrow } from "../../../../componentsV0/TooltipArrow";

export type TextFieldTooltipProps = {
  /** Target element to apply tooltip to. */
  children: ReactElement<any>;

  /** Display state of tooltip. Visible or invisible. */
  open: boolean;

  /** Text to display. */
  title: ReactNode;
};

/**
 * Displays a tooltip with a box shadow and an arrow pointing to the field.
 */
export const TextFieldTooltip: SFC<TextFieldTooltipProps> = props => {
  const { children, open, title: titleText } = props;

  const title = (
    <>
      {titleText}
      <PositionedErrorArrow />
    </>
  );

  const classes = {
    tooltip: "TextFieldTooltip",
    tooltipPlacementBottom: "TextFieldTooltip-bottom-override",
  };

  return (
    <Tooltip classes={classes} open={open} title={title} placement="bottom-end">
      {children}
    </Tooltip>
  );
};

const PositionedErrorArrow = styled(TooltipArrow)`
  position: absolute;
  right: -5px;
  top: -13px;
`;