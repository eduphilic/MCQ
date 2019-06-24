import { Typography } from "@material-ui/core";
import React from "react";
import styled, { css } from "styled-components";
import { LogoImage, LogoImageProps } from "./LogoImage";

type Props = Pick<LogoImageProps, "size"> & {
  className?: string;
  /**
   * Render logo text using only a single color rather than two.
   *
   * @default false
   */
  singleTone?: boolean;

  /**
   * Add optional text shadow.
   *
   * @default false
   */
  shadowed?: boolean;

  /**
   * Hide logo text on mobile.
   *
   * @default false
   */
  hideTextMobile?: boolean;
};

const LogoText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
`;

const hideTextMobileCss = css`
  ${({ theme }) => theme.breakpoints.down("xs")} {
    ${LogoText} {
      display: none;
    }
  }
`;

/**
 * Site logo.
 */
export const Logo = styled((props: Props) => {
  const { size, singleTone = false } = props;

  return (
    <div className={props.className}>
      <LogoImage size={size} />
      <LogoText component="span" color="primary">
        Join&nbsp;
      </LogoText>
      <LogoText component="span" color={singleTone ? "primary" : "secondary"}>
        Uniform
      </LogoText>
    </div>
  );
})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  ${({ shadowed }) => shadowed && "text-shadow: 1px 1px #000"};

  ${LogoImage} {
    margin-right: ${({ theme }) => theme.spacing(2)}px;
  }

  ${({ hideTextMobile }) => hideTextMobile && hideTextMobileCss};
`;
