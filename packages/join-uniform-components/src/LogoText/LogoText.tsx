import { css, styled } from "@join-uniform/theme";
import React from "react";
import { Typography } from "../muiComponents";

export type LogoTextProps = {
  className?: string;
  variant?: "default" | "split-color";
};

export const LogoText = styled(({ className }: LogoTextProps) => (
  <Typography className={className} variant="h5">
    <span>Join&nbsp;</span>
    <span>Uniform</span>
  </Typography>
))`
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;

  > span {
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  ${props =>
    props.variant === "split-color" &&
    css`
      > span:last-child {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    `};
`;
