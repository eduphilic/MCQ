import Typography from "@material-ui/core/Typography";
import React, { SFC } from "react";
import styled from "styled-components";
import { LogoImage } from "../LogoImage";

const logoHeight = 64;

export interface LogoProps {
  /**
   * Hide logo text on mobile.
   *
   * @default false
   */
  hideTextMobile?: boolean;

  /**
   * Use alternate color for second word in logo text.
   *
   * @default false
   */
  alternateSecondWordColoring?: boolean;

  className?: string;
}

/**
 * Logo image and logo text for use in hero section, app drawers, and misc
 * page headers.
 */
export const Logo: SFC<LogoProps> = props => {
  const { className, hideTextMobile, alternateSecondWordColoring } = props;

  return (
    <Wrapper className={className}>
      <LogoImage />

      <LogoText
        hideTextMobile={hideTextMobile}
        alternateSecondWordColoring={alternateSecondWordColoring}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${LogoImage} {
    width: ${logoHeight}px;
    height: ${logoHeight}px;
  }
`;

const LogoText = styled(({ className }: LogoProps) => (
  <Typography className={className} variant="h5">
    <span>Join</span>
    <span>Uniform</span>
  </Typography>
))`
  padding: ${({ theme }) => theme.spacing(2)}px;
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;

  > span {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ theme, alternateSecondWordColoring }) =>
    alternateSecondWordColoring &&
    `
      > span:last-child {
        color: ${theme.palette.secondary.main};
      }
    `};

  ${({ hideTextMobile, theme }) =>
    hideTextMobile &&
    `
      ${theme.breakpoints.down("xs")} {
        display: none;
      }
    `};
`;
