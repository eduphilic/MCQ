import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import gql from "graphql-tag";
import React, { CSSProperties } from "react";
import { Query } from "../../api";
import { ContentCenterWrapper } from "../../components/ContentCenterWrapper";
import { Logo } from "../../components/Logo";
import { QueryWithLoading } from "../../components/QueryWithLoading";
import { styled } from "../../styled";
import { l } from "../localization";
import { LanguageSelect } from "./LanguageSelect";

const GET_HERO_CONFIG = gql`
  query GetHeroConfig {
    indexPageConfig {
      heroBackgroundImageUrl
      heroBackgroundAlpha
      heroPrimaryText
      heroFeatures
    }
  }
`;

export const HeroSection = () => (
  <QueryWithLoading<Pick<Query, "indexPageConfig">> query={GET_HERO_CONFIG}>
    {({ data }) => (
      <HeroBackgroundImage
        background={{
          heroBackgroundImageUrl: data.indexPageConfig.heroBackgroundImageUrl,
          heroBackgroundAlpha: data.indexPageConfig.heroBackgroundAlpha,
        }}
      >
        <ContentCenterWrapper>
          <HeroGridContainer container>
            {/* Left text content. */}
            <HeroGridTextSectionItem
              container
              direction="column"
              item
              xs={12}
              md={8}
            >
              <Grid item>
                <LogoWithBottomMargin alternateSecondWordColoring />
              </Grid>
              <Hidden smDown>
                <Grid container direction="column" justify="center" item xs>
                  <Grid item>
                    <HeroPrimaryText>
                      {l(data.indexPageConfig.heroPrimaryText)}
                    </HeroPrimaryText>
                  </Grid>
                  <Grid item>
                    <HeroFeatureList>
                      {data.indexPageConfig.heroFeatures.map((text, key) => (
                        <HeroFeatureItem key={key}>{l(text)}</HeroFeatureItem>
                      ))}
                    </HeroFeatureList>
                  </Grid>
                </Grid>
              </Hidden>
            </HeroGridTextSectionItem>

            {/* Right login/sign-up forms. */}
            <Grid item xs={12} md={4}>
              <LanguageSelect />
              <p style={{ height: 747, color: "#fff" }}>Form Section</p>
            </Grid>
          </HeroGridContainer>
        </ContentCenterWrapper>
      </HeroBackgroundImage>
    )}
  </QueryWithLoading>
);

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

const HeroFeatureList = styled.ul`
  margin-top: 24px;
  margin-bottom: 56px;
`;

const HeroFeatureItem = styled(Typography).attrs({
  component: "li",
  variant: "h6",
})`
  display: list-item;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 2px 2px #000;
  color: #63b760;
`;
