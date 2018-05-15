import strings from "l10n";
import React, { SFC } from "react";
import styled, { withProps } from "styled";
import { DarkTheme, LightTheme } from "theme";

import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import {
  OnboardingForms,
  OnboardingFormsProps,
} from "components/organisms/OnboardingForms";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { HeroFooter } from "../../molecules/HeroFooter";
import {
  LanguageSelect,
  LanguageSelectProps,
} from "../../molecules/LanguageSelect";
import { Logo } from "../../molecules/Logo";

const defaultBackgroundImage = "Army-soldier-1024x782.jpg";

interface HeroProps {
  /**
   * Background image to use for the hero section of the landing page. It is the
   * filename for an image in the folder /packages/app/public/images/hero.
   *
   * @default "Army-soldier-1024x782.jpg"
   */
  backgroundImage?: string;

  /**
   * Controls how much darkening is performed on the hero image to improve the
   * legibility of the text.
   *
   * @default 0.55
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
  const backgroundAlpha = props.backgroundAlpha || 0.55;

  return (
    <DarkTheme>
      <>
        <Wrapper
          backgroundImage={backgroundImage}
          backgroundAlpha={backgroundAlpha}
        >
          <ContentCenterWrapper>
            <Logo />

            <DivideWrapper>
              <div>
                <LanguageSelectWrapper>
                  <LanguageSelect {...props.languageSelectProps} />
                </LanguageSelectWrapper>
                <Hidden smDown>
                  <HeroTextWrapper>
                    <HeroPrimaryText>{strings.heroPrimaryText}</HeroPrimaryText>
                    <HeroSecondaryText>
                      {strings.heroSecondaryText}
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

const DivideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${props => props.theme.spacing.unit * 4}px 0;

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

  ${props => props.theme.breakpoints.down("md")} {
    margin-top: ${props => props.theme.spacing.unit * 8}px;
  }
`;

const LanguageSelectWrapper = styled.div`
  ${props => props.theme.breakpoints.up("md")} {
    height: 25%;
  }
`;

const HeroTextWrapper = styled.div``;

const HeroPrimaryText = styled(Typography).attrs({
  variant: "display2",
})`
  color: #fff;
  margin-top: ${props => props.theme.spacing.unit * 8}px;
  margin-bottom: ${props => props.theme.spacing.unit * 2}px;
  font-size: 28px;
  font-weight: 600;

  ${props => props.theme.breakpoints.down("xs")} {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1px;
  }
`;

const HeroSecondaryText = styled(Typography).attrs({
  variant: "headline",
})`
  margin-bottom: ${props => props.theme.spacing.unit * 3}px;
  font-size: 18px;
`;
