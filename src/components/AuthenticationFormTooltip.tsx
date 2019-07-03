import { Tooltip } from "@material-ui/core";
import { TooltipProps } from "@material-ui/core/Tooltip";
import { ArrowDropUp as ArrowIcon } from "@material-ui/icons";
import React, { ConsumerProps } from "react";
import styled from "styled-components";

type Props = OmitStrict<
  TooltipProps,
  | "classes"
  | "placement"
  | "disableTouchListener"
  | "disableFocusListener"
  | "disableHoverListener"
  | "title"
> & {
  title?: string;
};

export function AuthenticationFormTooltip(props: Props) {
  const { title, ...rest } = props;

  const titleNode = title ? (
    <>
      {title}
      <StyledArrowIcon />
    </>
  ) : (
    ""
  );

  return (
    <TooltipClassProvider>
      {tooltipClass => (
        <Tooltip
          {...rest}
          title={titleNode}
          classes={{ tooltip: tooltipClass }}
          placement="bottom-end"
          disableFocusListener
          disableHoverListener
          disableTouchListener
        />
      )}
    </TooltipClassProvider>
  );
}

const TooltipClassProvider = styled(
  ({ children, className }: ConsumerProps<string> & { className?: string }) => (
    <>{children(className!)}</>
  ),
)`
  margin-top: 8px;
  color: #000;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
`;

const StyledArrowIcon = styled(ArrowIcon)`
  position: absolute;
  right: -6px;
  top: -6px;
  color: #ff0000;
`;
