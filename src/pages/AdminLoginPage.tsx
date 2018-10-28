import { Grid, Hidden, Typography } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import React, { SFC } from "react";
import { ContentCenterWrapper } from "../components/ContentCenterWrapper";
import { Logo } from "../components/Logo";
import { LandingLayout } from "../layouts";
import { DarkTheme, styled } from "../styled";

export const AdminLoginPage: SFC<RouteComponentProps> = () => {
  //

  return (
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
                        Prepare for INDIAN Defence Examinations
                      </Typography>
                      <Typography variant="h4">
                        Some message can be written here to explain about this
                        website
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
