import {
  OnboardingForms,
  OnboardingFormsProps,
} from "components/organisms/OnboardingForms";
import strings from "l10n";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled, { withProps } from "styled";
import { DarkTheme, LightTheme } from "theme";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { HeroLogo } from "../../molecules/HeroLogo";
import {
  LanguageSelect,
  LanguageSelectProps,
} from "../../molecules/LanguageSelect";

const defaultBackgroundImage = "army (1).jpg";

interface HeroProps {
  /**
   * Background image to use for the hero section of the landing page. It is the
   * filename for an image in the folder /packages/app/public/images/hero.
   *
   * @default "army (1).jpg"
   */
  backgroundImage?: string;

  /**
   * Controls how much darkening is performed on the hero image to improve the
   * legibility of the text.
   *
   * @default 0.75
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
  const backgroundAlpha = props.backgroundAlpha || 0.75;

  return (
    <DarkTheme>
      <Wrapper
        backgroundImage={backgroundImage}
        backgroundAlpha={backgroundAlpha}
      >
        <ContentCenterWrapper>
          <HeroLogo />
          <DivideWrapper>
            <div>
              <LanguageSelectWrapper>
                <LanguageSelect {...props.languageSelectProps} />
              </LanguageSelectWrapper>
              <HeroTextWrapper>
                <HeroPrimaryText>{strings.heroPrimaryText}</HeroPrimaryText>
                <HeroSecondaryText>
                  {strings.heroSecondaryText}
                </HeroSecondaryText>
              </HeroTextWrapper>
            </div>
            <div>
              <LightTheme>
                <OnboardingForms {...props.onboardingFormsProps} />
              </LightTheme>
            </div>
          </DivideWrapper>
        </ContentCenterWrapper>
      </Wrapper>
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
  margin-top: ${props => props.theme.spacing.unit * 3}px;
  margin-bottom: ${props => props.theme.spacing.unit * 3}px;

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
`;
