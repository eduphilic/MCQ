import { Grid, Hidden, Typography } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import gql from "graphql-tag";
import React, { CSSProperties } from "react";
import { graphql } from "react-apollo";
import { ContentCenterWrapper } from "../components/ContentCenterWrapper";
import { Logo } from "../components/Logo";
import { LandingLayout } from "../layouts";
import { Localization } from "../models";
import { IndexConfig } from "../models/IndexConfig";
import { DarkTheme, styled } from "../styled";

const GET_HERO_CONFIG = gql`
  query GetHeroConfig {
    indexConfig {
      heroBackgroundImageUrl
      heroBackgroundAlpha
      heroPrimaryTextEn
      heroPrimaryTextHi
    }
    localization {
      localizationLanguage
    }
  }
`;

type Response = {
  indexConfig: Pick<
    IndexConfig,
    "heroBackgroundImageUrl" | "heroBackgroundAlpha"
  >;
  localization: Localization;
};

export const RootIndexPage = graphql<RouteComponentProps, Response>(
  GET_HERO_CONFIG,
)(({ data }) => {
  const { loading, indexConfig } = data!;
  const background = loading
    ? undefined
    : {
        heroBackgroundImageUrl: indexConfig!.heroBackgroundImageUrl,
        heroBackgroundAlpha: indexConfig!.heroBackgroundAlpha,
      };

  return (
    <LandingLayout>
      {/* Hero section */}
      <DarkTheme>
        <HeroBackgroundImage background={background}>
          <ContentCenterWrapper>
            <HeroGridContainer container>
              {/* Left text content. */}
              <HeroGridTextSectionItem item xs={12} md={8}>
                <LogoWithBottomMargin alternateSecondWordColoring />
                <Hidden smDown>
                  <Grid container direction="column" justify="center">
                    <Grid item>
                      <HeroPrimaryText> </HeroPrimaryText>
                    </Grid>
                  </Grid>
                </Hidden>
              </HeroGridTextSectionItem>
              {/* Right login/sign-up forms. */}
              <Grid item xs={12} md={4}>
                <p>Form Section</p>
              </Grid>
            </HeroGridContainer>
          </ContentCenterWrapper>
        </HeroBackgroundImage>
      </DarkTheme>
    </LandingLayout>
  );
});

type HeroBackgroundImageProps = {
  className?: string;
  background?: {
    heroBackgroundAlpha: number;
    heroBackgroundImageUrl: string;
  };
};
const HeroBackgroundImage = styled<HeroBackgroundImageProps>(
  ({ className, children, background }) => {
    const style: CSSProperties = !background
      ? {}
      : {
          // prettier-ignore
          background: `linear-gradient( rgba(0, 0, 0, ${background.heroBackgroundAlpha}), rgba(0, 0, 0, ${background.heroBackgroundAlpha}) ), url("${background.heroBackgroundImageUrl}")`,
          backgroundSize: "cover",
        };

    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  },
)`
  padding: 24px 0;
`;

const HeroGridContainer = styled(Grid)`
  margin-bottom: 36px;
`;

const HeroGridTextSectionItem = styled(Grid)`
  margin-bottom: 16px;
`;

const LogoWithBottomMargin = styled(Logo)`
  margin-bottom: 16px;
`;

const HeroPrimaryText = styled(Typography).attrs({
  variant: "h3",
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
