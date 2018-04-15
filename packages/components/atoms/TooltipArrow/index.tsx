import Icon from "material-ui/Icon";
import React, { SFC } from "react";
import styled from "styled";

interface Props {
  className?: string;
  direction?: "down" | "up";
}

/** Error arrow for use in form validation tooltip. */
export const TooltipArrow: SFC<Props> = props => {
  const { className, direction = "up" } = props;

  return (
    <ColoredArrow
      className={className}
    >{`arrow_drop_${direction}`}</ColoredArrow>
  );
};

const ColoredArrow = styled(Icon)`
  color: #ff0000;
`;
