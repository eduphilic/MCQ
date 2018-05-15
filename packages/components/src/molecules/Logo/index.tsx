import React, { SFC } from "react";
import styled, { withProps } from "styled";
import { LogoImage } from "../../atoms/LogoImage";
import { LogoText } from "../../atoms/LogoText";

const logoHeight = 64;

export interface LogoProps {
  /**
   * Hide logo text on mobile.
   *
   * @default false
   */
  hideTextMobile?: boolean;

  className?: string;
}

/** Logo image and logo text for use in hero section of landing page. */
export const Logo: SFC<LogoProps> = props => {
  const { className, hideTextMobile = false } = props;

  return (
    <Wrapper className={className}>
      <LogoImage />
      <HideableLogoText className="text" hideTextMobile={hideTextMobile} />
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

  .text {
    padding: ${props => props.theme.spacing.unit * 2}px;
    color: #ecd100;
  }
`;

const HideableLogoText = withProps<{ hideTextMobile: boolean }>()(
  styled(LogoText),
)`
  ${props =>
    props.hideTextMobile
      ? `
          ${props.theme.breakpoints.down("xs")} {
            display: none;
          }
        `
      : ""}
`;
