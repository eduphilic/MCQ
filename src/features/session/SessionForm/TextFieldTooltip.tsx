import Tooltip from "@material-ui/core/Tooltip";
import React, { ReactElement, ReactNode, SFC } from "react";
import { createGlobalStyle, styled } from "../../../styled";
import { TooltipArrow } from "./TooltipArrow";

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
    <>
      <TextFieldTooltipGlobalStyles />
      <Tooltip
        classes={classes}
        open={open}
        title={title}
        placement="bottom-end"
      >
        {children}
      </Tooltip>
    </>
  );
};

const PositionedErrorArrow = styled(TooltipArrow)`
  position: absolute;
  right: -5px;
  top: -13px;
`;

const TextFieldTooltipGlobalStyles = createGlobalStyle`
  .TextFieldTooltip {
    color: #000;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
  }

  .TextFieldTooltip-bottom-override {
    margin-top: 8px;
  }
`;
