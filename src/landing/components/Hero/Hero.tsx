import { strings } from "localization";
import React, { SFC } from "react";
import styled, { withProps } from "styled";
import { DarkTheme, LightTheme } from "theme";

import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { HeroFooter } from "components/HeroFooter";
import { Logo } from "components/Logo";
import {
  OnboardingForms,
  OnboardingFormsProps,
} from "components/OnboardingForms";
import { LanguageSelect, LanguageSelectProps } from "../LanguageSelect";

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

  languageSelectProps: LanguageSelectProps;

  onboardingFormsProps: OnboardingFormsProps;
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
            <LogoAndLanguageSelectWrapper>
              <LogoBottomMargin />
              <div style={{ marginTop: 2 }}>
                <LanguageSelect {...props.languageSelectProps} />
              </div>
            </LogoAndLanguageSelectWrapper>

            <DivideWrapper>
              <div>
                <Hidden smDown>
                  <HeroTextWrapper>
                    <HeroPrimaryText>
                      {strings.components_Hero_PrimaryText}
                    </HeroPrimaryText>
                    <HeroSecondaryText>
                      {strings.components_Hero_SecondaryText}
                    </HeroSecondaryText>
                  </HeroTextWrapper>
                </Hidden>
              </div>

              <div>
                <LightTheme>
                  <OnboardingForms {...props.onboardingFormsProps} />
                </LightTheme>
              </div>
            </DivideWrapper>
          </ContentCenterWrapper>
        </Wrapper>
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

const LogoAndLanguageSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-wrap: wrap;

    > *:last-child {
      margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
    }
  }
`;

const DivideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing.unit * 4}px;

  > div:nth-child(1) {
    flex: 1;
    width: 100%;
    margin-bottom: ${props => props.theme.spacing.unit * 4}px;
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
  margin-bottom: ${({ theme }) => theme.spacing.unit * 4}px;
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
  color: ${({ theme }) => theme.palette.secondary.main};

  ${props => props.theme.breakpoints.down("xs")} {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1px;
  }
`;

const HeroSecondaryText = styled(Typography).attrs({
  variant: "headline",
})`
  margin-top: ${props => props.theme.spacing.unit * 3}px;
  margin-bottom: ${props => props.theme.spacing.unit * 7}px;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 2px 2px #000;
  color: #63b760;
`;
