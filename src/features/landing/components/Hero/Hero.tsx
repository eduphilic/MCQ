import { strings } from "features/localization";
import React, { SFC } from "react";
import styled, { withProps } from "styled";
import { DarkTheme, LightTheme } from "theme";

import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import { ContentCenterWrapper } from "componentsV0/ContentCenterWrapper";
import { Logo } from "componentsV0/Logo";
import { HeroDescription } from "../HeroDescription";
import { HeroFooter } from "../HeroFooter";
import { LanguageSelect } from "../LanguageSelect";
import { SigninSignupForms } from "../SigninSignupForms";

const defaultBackgroundImage = "soldier-optimized.png";

interface HeroProps {
  /**
   * Background image to use for the hero section of the landing page. It is the
   * filename for an image in the folder /packages/app/public/images/hero.
   *
   * @default "soldier-optimized.png"
   */
  backgroundImage?: string;

  /**
   * Controls how much darkening is performed on the hero image to improve the
   * legibility of the text.
   *
   * @default 0.25
   */
  backgroundAlpha?: number;
}

export const Hero: SFC<HeroProps> = props => {
  const backgroundImage = `${
    process.env.PUBLIC_URL
  }/images/hero/${encodeURIComponent(
    props.backgroundImage || defaultBackgroundImage,
  )}`;
  const backgroundAlpha = props.backgroundAlpha || 0.25;

  return (
    <DarkTheme>
      <>
        <Wrapper
          backgroundImage={backgroundImage}
          backgroundAlpha={backgroundAlpha}
        >
          <ContentCenterWrapper>
            <DivideWrapper>
              <div>
                <LogoBottomMargin />
                <Hidden smDown>
                  <HeroTextWrapper>
                    <HeroPrimaryText>
                      {strings.landing_Hero_PrimaryText}
                    </HeroPrimaryText>
                    <HeroSecondaryText>
                      {[
                        "Mock test as asked in Armed Forces exams.",
                        "Full length Weekly Mock Test",
                        "Instant result with detail analysis",
                        "All in rank",
                      ].map(line => (
                        <li key={line}>{line}</li>
                      ))}
                    </HeroSecondaryText>
                  </HeroTextWrapper>
                </Hidden>
              </div>

              <div>
                <div style={{ marginTop: 2, marginBottom: 16 }}>
                  <LanguageSelect />
                </div>

                <LightTheme>
                  <SigninSignupForms />
                </LightTheme>
              </div>
            </DivideWrapper>
          </ContentCenterWrapper>
        </Wrapper>

        <HeroDescription />

        <HeroFooter />
      </>
    </DarkTheme>
  );
};

const Wrapper = withProps<{
  backgroundAlpha: number;
  backgroundImage: string;
}>()(styled.div)`
  display: block;
  width: 100%;
  padding: ${props => props.theme.spacing.unit * 3}px 0;

  ${props =>
    `
    background: linear-gradient( rgba(0, 0, 0, ${
      props.backgroundAlpha
    }), rgba(0, 0, 0, ${props.backgroundAlpha}) ), url("${
      props.backgroundImage
    }");
    background-size: cover;
    `}
`;

const DivideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing.unit * 4}px;

  > div:nth-child(1) {
    flex: 1;
    width: 100%;
    margin-bottom: ${props => props.theme.spacing.unit * 2}px;
  }

  > div:nth-child(2) {
    width: 100%;

    ${props => props.theme.breakpoints.up("md")} {
      flex-basis: 400px;
    }
  }
`;

const LogoBottomMargin = styled(Logo).attrs({
  alternateSecondWordColoring: true,
})`
  margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const HeroPrimaryText = styled(Typography).attrs({
  variant: "display2",
})`
  margin-bottom: ${props => props.theme.spacing.unit * 2}px;
  font-size: 36px;
  font-weight: 600;
  text-shadow: 2px 2px #000;
  color: ${({ theme }) => theme.palette.secondary.main};

  ${props => props.theme.breakpoints.down("xs")} {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1px;
  }
`;

const HeroSecondaryText = styled.ul`
  margin-top: ${props => props.theme.spacing.unit * 3}px;
  margin-bottom: ${props => props.theme.spacing.unit * 7}px;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 2px 2px #000;
  color: #63b760;

  > li {
    margin-bottom: 8px;
  }
`;
