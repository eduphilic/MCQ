import { Grid, Hidden, Typography } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import gql from "graphql-tag";
import React, { SFC } from "react";
import { ContentCenterWrapper } from "../components/ContentCenterWrapper";
import { Logo } from "../components/Logo";
import { QueryWithLoading } from "../components/QueryWithLoading";
import { l } from "../features/localization";
import { LandingLayout } from "../layouts";
import { LocalizedString } from "../models";
import { DarkTheme, styled } from "../styled";

const GET_ADMIN_LOGIN_PAGE_CONFIG = gql`
  query GetAdminLoginPageConfig {
    adminLoginPageConfig {
      heroPrimaryText
      heroSecondaryText
    }
  }
`;

export const AdminLoginPage: SFC<RouteComponentProps> = () => {
  //

  return (
    <QueryWithLoading<{
      adminLoginPageConfig: {
        heroPrimaryText: LocalizedString;
        heroSecondaryText: LocalizedString;
      };
    }>
      query={GET_ADMIN_LOGIN_PAGE_CONFIG}
    >
      {({ data }) => (
        <LandingLayout>
          <DarkTheme>
            <Wrapper>
              <LogoBarWrapper>
                <ContentCenterWrapper>
                  <Logo />
                </ContentCenterWrapper>
              </LogoBarWrapper>

              <ContentWrapper>
                <ContentCenterWrapper>
                  <Grid container spacing={16}>
                    <Hidden xsDown>
                      <Grid item sm={8}>
                        <TypographyWrapper>
                          <Typography variant="h2" gutterBottom>
                            {l(data!.adminLoginPageConfig.heroPrimaryText)}
                          </Typography>
                          <Typography variant="h4">
                            {l(data!.adminLoginPageConfig.heroSecondaryText)}
                          </Typography>
                        </TypographyWrapper>
                      </Grid>
                    </Hidden>

                    <Grid item xs={12} sm={4}>
                      <p>Login Forms</p>
                    </Grid>
                  </Grid>
                </ContentCenterWrapper>
              </ContentWrapper>
            </Wrapper>
          </DarkTheme>
        </LandingLayout>
      )}
    </QueryWithLoading>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #404040;
`;

const LogoBarWrapper = styled.div`
  padding: 16px 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 3%,
    rgba(0, 0, 0, 0)
  );
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const TypographyWrapper = styled.div`
  margin-top: 10%;
`;
