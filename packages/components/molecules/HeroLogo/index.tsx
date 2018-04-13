import React, { SFC } from "react";
import styled from "styled";
import { HeroLogoText } from "../../atoms/HeroLogoText";
import { LogoImage } from "../../atoms/LogoImage";

const logoHeight = 64;

/** Logo image and logo text for use in hero section of landing page. */
export const HeroLogo: SFC<{}> = () => (
  <Wrapper>
    <LogoImage />
    <HeroLogoText className="text" />
  </Wrapper>
);

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
