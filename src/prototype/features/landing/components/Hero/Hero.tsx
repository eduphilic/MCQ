import React, { FC } from "react";
import styled from "styled-components";
import { strings } from "../../../../features/localization";
import { DarkTheme, LightTheme } from "../../../../theme";

import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import { Logo } from "../../../../../components";
import { ContentCenterWrapper } from "../../../../componentsV0/ContentCenterWrapper";
import { HeroDescription } from "../HeroDescription";
import { HeroFooter } from "../HeroFooter";
import { LanguageSelect } from "../LanguageSelect";
import { SigninSignupForms } from "../SigninSignupForms";

export const Hero: FC = () => {
  return (
    <DarkTheme>
      <>
        <div>
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
                        "All India rank",
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
        </div>

        <HeroDescription />

        <HeroFooter />
      </>
    </DarkTheme>
  );
};

const DivideWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing(4)}px;

  > div:nth-child(1) {
    flex: 1;
    width: 100%;
    margin-bottom: ${props => props.theme.spacing(2)}px;
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
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const HeroPrimaryText = styled(Typography).attrs({
  variant: "h2",
})`
  margin-bottom: ${props => props.theme.spacing(2)}px;
  font-size: 36px;
  font-weight: 600;
  text-shadow: 2px 2px #000;
  color: ${({ theme }) => theme.palette.primary.main};

  ${props => props.theme.breakpoints.down("xs")} {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1px;
  }
`;

const HeroSecondaryText = styled.ul`
  margin-top: ${props => props.theme.spacing(3)}px;
  margin-bottom: ${props => props.theme.spacing(7)}px;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 2px 2px #000;
  color: ${({ theme }) => theme.palette.secondary.main};

  > li {
    margin-bottom: 8px;
  }
`;
