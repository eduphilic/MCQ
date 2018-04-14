import Tooltip from "material-ui/Tooltip";
import React, { ReactElement } from "react";
import styled, { injectGlobal } from "styled";
import { ErrorArrow } from "../../atoms/ErrorArrow";

interface Props {
  /** Target element to apply tooltip to. */
  children: ReactElement<any>;

  /** Display state of tooltip. Visible or invisible. */
  open: boolean;

  /** Text to display. */
  title: string;
}

/**
 * Displays a tooltip with a box shadow and an arrow pointing to the field.
 */
export const FormTooltip = (props: Props) => {
  const { children, open, title: titleText } = props;

  const title = (
    <>
      {titleText}
      <PositionedErrorArrow />
    </>
  );

  const classes = {
    tooltip: "form-tooltip-override",
    tooltipPlacementBottom: "form-tooltip-bottom-override",
  };

  return (
    <Tooltip classes={classes} open={open} title={title} placement="bottom-end">
      {children}
    </Tooltip>
  );
};

const PositionedErrorArrow = styled(ErrorArrow)`
  position: absolute;
  right: -7px;
  top: -13px;
`;

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  .form-tooltip-override {
    color: #000;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16);
  }

  .form-tooltip-bottom-override {
    margin-top: 8px;
  }
`;
