import { Grid } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import gql from "graphql-tag";
import React, { CSSProperties, SFC } from "react";
import { Query } from "react-apollo";
import { ContentCenterWrapper } from "../components/ContentCenterWrapper";
import { Logo } from "../components/Logo";
import { LandingLayout } from "../layouts";
import { IndexConfig } from "../models/IndexConfig";
import { DarkTheme, styled } from "../styled";

export const RootIndexPage: SFC<RouteComponentProps> = () => (
  <LandingLayout>
    <DarkTheme>
      <HeroBackgroundImage>
        <ContentCenterWrapper>
          <HeroGridContainer container>
            <HeroGridTextSectionItem item xs={12} md={8}>
              <LogoWithBottomMargin alternateSecondWordColoring />
              <p>Text Section</p>
            </HeroGridTextSectionItem>
            <Grid item xs={12} md={4}>
              <p>Form Section</p>
            </Grid>
          </HeroGridContainer>
        </ContentCenterWrapper>
      </HeroBackgroundImage>
    </DarkTheme>
  </LandingLayout>
);

const GET_BACKGROUND_IMAGE = gql`
  query GetBackgroundImage {
    indexConfig {
      heroBackgroundImageUrl
      heroBackgroundAlpha
    }
  }
`;

const HeroBackgroundImage = styled<{ className?: string }>(
  ({ className, children }) => (
    <Query<{
      indexConfig: Pick<
        IndexConfig,
        "heroBackgroundImageUrl" | "heroBackgroundAlpha"
      >;
    }>
      query={GET_BACKGROUND_IMAGE}
    >
      {({ loading, data }) => {
        const style: CSSProperties = loading
          ? {}
          : {
              // prettier-ignore
              background: `linear-gradient( rgba(0, 0, 0, ${data!.indexConfig.heroBackgroundAlpha}), rgba(0, 0, 0, ${data!.indexConfig.heroBackgroundAlpha}) ), url("${data!.indexConfig.heroBackgroundImageUrl}")`,
              backgroundSize: "cover",
            };

        return (
          <div className={className} style={style}>
            {children}
          </div>
        );
      }}
    </Query>
  ),
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
