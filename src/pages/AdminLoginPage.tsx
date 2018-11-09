import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import { Redirect, RouteComponentProps } from "@reach/router";
import gql from "graphql-tag";
import React, { SFC } from "react";
import { LocalizedString, UserRole } from "../api";
import { ContentCenterWrapper } from "../components/ContentCenterWrapper";
import { Logo } from "../components/Logo";
import { QueryWithLoading } from "../components/QueryWithLoading";
import { l } from "../features/localization";
import { SessionForm, useSession } from "../features/session";
import { LandingLayout } from "../layouts/LandingLayout";
import { DarkTheme, LightTheme, styled } from "../styled";

const GET_ADMIN_LOGIN_PAGE_CONFIG = gql`
  query GetAdminLoginPageConfig {
    adminLoginPageConfig {
      heroPrimaryText
      heroSecondaryText
    }
  }
`;

const AdminLoginPage: SFC<RouteComponentProps> = () => {
  const session = useSession();

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
          {(() => {
            // TODO: Fix this. Replace with imperative redirect.
            if (!session) return null;
            if (session === UserRole.ADMIN) {
              return <Redirect to="/admin/dashboard" noThrow />;
            }
            if (session === UserRole.USER) {
              return <Redirect to="/dashboard" noThrow />;
            }
            return null;
          })()}
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
                      <LightTheme>
                        <SessionForm type="admin-sign-in" />
                      </LightTheme>
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

export default AdminLoginPage;

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
