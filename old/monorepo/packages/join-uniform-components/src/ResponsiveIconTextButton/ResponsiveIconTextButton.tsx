import { styled } from "@join-uniform/theme";
import React, { Fragment, ReactNode } from "react";
import { Button, ButtonProps } from "../Button";
import { Hidden } from "../Hidden";
import { IconButton, Tooltip } from "../muiComponents";

export type ResponsiveIconTextButtonProps = ButtonProps & {
  /**
   * Icon shown to the left of the children.
   */
  iconNode: ReactNode;

  /**
   * Tooltip text to display on hover on viewports above "xs".
   */
  tooltipTitle?: string;
};

/**
 * A button for use on app-bars and toolbars. Its purpose is to provide a button
 * which contains an icon and description text. On mobile viewport, the
 * description text is hidden to preserve horizontal space. It provides a
 * tooltip on hover on viewports above "xs".
 *
 * Uses the "text" button variant by default.
 */
export function ResponsiveIconTextButton(props: ResponsiveIconTextButtonProps) {
  const { children, iconNode, tooltipTitle, ...rest } = props;

  const MaybeTooltip = tooltipTitle ? Tooltip : Fragment;
  const { className, color, component, ...iconProps } = rest;
  const buttonProps = rest;

  return (
    <>
      <Hidden smUp implementation="css">
        <IconButton {...iconProps}>{iconNode}</IconButton>
      </Hidden>
      <Hidden xsDown implementation="css">
        <MaybeTooltip title={tooltipTitle}>
          <Button variant="text" {...buttonProps}>
            {iconNode}
            <IconRightMargin />
            {children}
          </Button>
        </MaybeTooltip>
      </Hidden>
    </>
  );
}

const IconRightMargin = styled.div`
  margin-right: 8px;
`;
