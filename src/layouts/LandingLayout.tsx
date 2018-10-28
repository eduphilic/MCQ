import { Grid, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import React, { SFC } from "react";
import { Query } from "react-apollo";
import { HtmlConfig } from "../models";
import { DarkTheme, styled } from "../styled";

const GET_LANDING_FOOTER_TEXT = gql`
  query GetLandingFooterText {
    htmlConfig {
      landingFooter
    }
  }
`;
type Response = { htmlConfig: Pick<HtmlConfig, "landingFooter"> };

export const LandingLayout: SFC = ({ children }) => (
  <Query<Response> query={GET_LANDING_FOOTER_TEXT}>
    {({ data, loading }) =>
      loading ? null : (
        <Wrapper container direction="column" wrap="nowrap">
          <Grid item xs>
            {children}
          </Grid>
          <Grid item>
            <FooterWrapper
              component="footer"
              item
              container
              justify="center"
              alignItems="center"
            >
              <DarkTheme>
                <Typography variant="caption">
                  {data!.htmlConfig.landingFooter}
                </Typography>
              </DarkTheme>
            </FooterWrapper>
          </Grid>
        </Wrapper>
      )
    }
  </Query>
);

const Wrapper = styled(Grid)`
  height: 100%;
`;

const FooterWrapper = styled(Grid)`
  height: 40px;
  background-color: #333333;
`;
