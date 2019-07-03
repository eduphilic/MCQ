import { Card, CardContent, Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { AuthenticationFormButton } from "./AuthenticationFormButton";
import { AuthenticationFormCardActions } from "./AuthenticationFormCardActions";
import { AuthenticationFormCardHeader } from "./AuthenticationFormCardHeader";
import { AuthenticationFormTerms } from "./AuthenticationFormTerms";
import { AuthenticationFormTextField } from "./AuthenticationFormTextField";
import { Container } from "./Container";
import { LanguageSelect } from "./LanguageSelect";
import { LogoImage } from "./LogoImage";
import { LogoText } from "./LogoText";

type LandingPageSectionAboveTheFoldProps = OmitStrict<
  BackgroundProps,
  "children"
> & {
  /**
   * Header text.
   */
  headerText: string;

  /**
   * List of features to list under `headerText`.
   */
  featureTexts: string[];
};

const placeholderProps: LandingPageSectionAboveTheFoldProps = {
  backgroundImageUrl: "/static/images/hero/soldier-optimized.png",
  backgroundDarkenFactor: 0.25,
  headerText: "Prepare for Indian Defence Forces Exams",
  featureTexts: [
    "Mock test as asked in Armed Forces exams.",
    "Full length Weekly Mock Test",
    "Instant result with detail analysis",
    "All India rank",
  ],
};

export function LandingPageSectionAboveTheFold() {
  const {
    backgroundImageUrl,
    backgroundDarkenFactor,
    headerText,
    featureTexts,
  } = placeholderProps;

  return (
    <Background
      backgroundImageUrl={backgroundImageUrl}
      backgroundDarkenFactor={backgroundDarkenFactor}
    >
      <Wrapper>
        <Header>
          <LogoImage size={64} />
          <LogoText component="h1" singleToneMobile />
        </Header>

        <TextSection>
          <H1>{headerText}</H1>

          <UL>
            {featureTexts.map(featureText => (
              <li key={featureText}>{featureText}</li>
            ))}
          </UL>
        </TextSection>

        <LanguageSelectSection>
          <LanguageSelect />
        </LanguageSelectSection>

        <AuthenticationSection>
          <Card>
            <AuthenticationFormCardHeader
              title="Signup"
              subheader={
                <span>
                  Already a Member? <strong>Login</strong>
                </span>
              }
            />
            <CardContent>
              <AuthenticationFormTextField
                label="This is a test error!"
                placeholder="Enter Email Address"
                type="email"
              />
              <AuthenticationFormTextField
                label="This is a test error!"
                placeholder="Enter Password"
                type="password"
                error
              />
            </CardContent>
            <AuthenticationFormCardActions>
              <AuthenticationFormTerms error />
              <AuthenticationFormButton variant="contained" fullWidth>
                Sign up
              </AuthenticationFormButton>
            </AuthenticationFormCardActions>
          </Card>
        </AuthenticationSection>
      </Wrapper>
    </Background>
  );
}

const GRID_AREA_HEADER = "header";
const GRID_AREA_HEADER_SECTION = "header-section";
const GRID_AREA_LANGUAGE_SELECT = "language-select";
const SIDEBAR_WIDTH = 400;

const Wrapper = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;

  @supports (display: grid) {
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: grid;
      grid-template-areas:
        "${GRID_AREA_HEADER} ${GRID_AREA_LANGUAGE_SELECT}"
        "header-section section";
      grid-template-rows: 64px 1fr;
      grid-template-columns: 1fr ${SIDEBAR_WIDTH}px;
      align-items: unset;
    }
  }
`;

type BackgroundProps = {
  children?: ReactNode;

  /**
   * Background image.
   */
  backgroundImageUrl: string;

  /**
   * Amount to darken the background image for readability.
   */
  backgroundDarkenFactor: number;
};

const backgroundCss = css<BackgroundProps>`
  background-image:
    linear-gradient(
      rgba(0, 0, 0, ${({ backgroundDarkenFactor }) => backgroundDarkenFactor}),
      rgba(0, 0, 0, ${({ backgroundDarkenFactor }) => backgroundDarkenFactor})
    ),
    url("${({ backgroundImageUrl }) => backgroundImageUrl}");
`;

const Background = styled.section<BackgroundProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.app.colors.greenDark};

  ${({ theme }) => theme.breakpoints.up("md")} {
    background-color: #000;
    background-size: cover;
    ${backgroundCss};
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: ${GRID_AREA_HEADER};

  ${LogoImage} {
    margin-bottom: 8px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: unset;

    ${LogoImage} {
      margin-bottom: unset;
      margin-right: 16px;
    }
  }
`;

const textShadowCss = css`
  text-shadow: 2px 2px #000;
`;

const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: ${GRID_AREA_HEADER_SECTION};
`;

const H1 = styled(Typography).attrs(
  (): TypographyProps => ({ component: "h1" }),
)`
  margin: 24px 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.app.colors.blueLight};

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 36px;
    font-weight: 600;
    text-align: unset;
    color: ${({ theme }) => theme.palette.primary.main};
    ${textShadowCss};
  }
`;

const UL = styled.ul`
  display: none;
  margin: 0 0 56px 0;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  ${textShadowCss};

  li:not(:last-child) {
    margin-bottom: 8px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: unset;
  }
`;

const LanguageSelectSection = styled.section`
  grid-area: ${GRID_AREA_LANGUAGE_SELECT};
  display: flex;
  width: 100%;
  max-width: ${SIDEBAR_WIDTH}px;
`;

const AuthenticationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
