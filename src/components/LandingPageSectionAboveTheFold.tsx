import { Typography } from "@material-ui/core";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Container } from "./Container";
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
};

const placeholderProps: LandingPageSectionAboveTheFoldProps = {
  backgroundImageUrl: "/static/images/hero/soldier-optimized.png",
  backgroundDarkenFactor: 0.25,
  headerText: "Prepare for Indian Defence Forces Exams",
};

export function LandingPageSectionAboveTheFold() {
  const {
    backgroundImageUrl,
    backgroundDarkenFactor,
    headerText,
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

        <HeaderSection>
          <H1>{headerText}</H1>
        </HeaderSection>
      </Wrapper>
    </Background>
  );
}

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
        "header aside"
        "header-section section";
      grid-template-rows: 64px 1fr;
      grid-template-columns: 1fr 400px;
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

const Background = styled.article<BackgroundProps>`
  display: flex;
  background-color: ${({ theme }) => theme.app.colors.greenDark};

  ${({ theme }) => theme.breakpoints.up("md")} {
    ${({ backgroundImageUrl, backgroundDarkenFactor }) => `
      background: linear-gradient( rgba(0, 0, 0, ${backgroundDarkenFactor}), rgba(0, 0, 0, ${backgroundDarkenFactor}) ), url("${backgroundImageUrl}");
    `}
    background-size: cover;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: header;

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

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: header-section;
`;

const H1 = styled(Typography).attrs({ component: "h1" })`
  margin: 16px 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.app.colors.blueLight};

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 36px;
    font-weight: 600;
    text-align: unset;
    text-shadow: 2px 2px #000;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
