import { Typography } from "components/Typography";
import React from "react";
import styled from "styled";
import { colors } from "../../colors";
import { ReactComponent as SwipeImage } from "./swipe.svg";

export const SwipeInstructions = styled<{ className?: string }>(
  ({ className }) => (
    <div className={className}>
      <StyledSwipeImage />
      <InstructionsText />
    </div>
  ),
)`
  position: fixed;
  width: 30vmin;
  height: 30vmin;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
`;

const StyledSwipeImage = styled(SwipeImage)`
  fill: ${colors.green};
`;

const InstructionsText = styled<{ className?: string }>(({ className }) => (
  <Typography className={className}>
    Swipe LEFT/RIGHT to goto next or previous questions
  </Typography>
))`
  position: absolute;
  width: 200%;
  left: -50%;
  padding-top: 16px;
  font-size: 13px;
  text-align: center;
  color: #fff;
`;
