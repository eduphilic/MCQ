import { Theme, Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import React from "react";

export type LogoProps = {
  component?: TypographyProps["component"];
  imageUrl: string;
};

/**
 * Logo image and logo text for use in hero section, app drawers, and misc
 * page headers.
 */
export function Logo(props: LogoProps) {
  return (
    <StyledTypography
      component={props.component}
      variant="h5"
      aria-label="Join Uniform"
    >
      <img src={props.imageUrl} alt="" />
      <span>Join</span>
      <span>Uniform</span>
    </StyledTypography>
  );
}

const StyledTypography = styled((props: TypographyProps) => (
  <Typography {...props} />
))<Theme, {}>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: 22,
  textShadow: "1px 1px #000",

  "& img": {
    width: 64,
    height: 64,
    marginRight: theme.spacing(2),
  },

  "& span:nth-child(2)": {
    color: theme.palette.primary.main,
  },

  "& span:nth-child(3)": {
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.down("sm")]: {
    "& span": {
      display: "none",
    },
  },
}));
