import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import gql from "graphql-tag";
import React from "react";
import { ContentCenterWrapper } from "../../components/ContentCenterWrapper";
import { QueryWithLoading } from "../../components/QueryWithLoading";
import { IndexPageConfig } from "../../models";
import { styled } from "../../styled";
import { l } from "../localization";

const GET_ABOUT_SECTION_CONFIG = gql`
  query GetAboutSectionConfig {
    indexPageConfig {
      aboutTitle
      aboutText
      aboutImages {
        imageUrl
        title
        text
      }
    }
  }
`;

type Response = {
  indexPageConfig: Pick<
    IndexPageConfig,
    "aboutTitle" | "aboutText" | "aboutImages"
  >;
};

export const AboutSection = () => (
  <Wrapper>
    <ContentCenterWrapper style={{ textAlign: "center" }}>
      <QueryWithLoading<Response> query={GET_ABOUT_SECTION_CONFIG}>
        {({ data }) => (
          <>
            <Title>{l(data!.indexPageConfig.aboutTitle)}</Title>
            <Text>{l(data!.indexPageConfig.aboutText)}</Text>
            <Grid container spacing={16}>
              {data!.indexPageConfig.aboutImages.map((aboutImage, index) => (
                <Grid key={index} item xs={12} md={6} style={{ marginTop: 24 }}>
                  <img src={aboutImage.imageUrl} style={{ marginBottom: 24 }} />
                  <Title>{l(aboutImage.title)}</Title>
                  <Text>{l(aboutImage.text)}</Text>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </QueryWithLoading>
      )}
    </ContentCenterWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 48px 0;
  background-color: #161616;
`;

const Title = (props: { children: string }) => (
  <Typography variant="h5" component="h3" style={{ marginBottom: 24 }}>
    {props.children}
  </Typography>
);

const Text = (props: { children: string }) => (
  <Typography
    variant="h6"
    component="p"
    paragraph
    style={{ color: "#a4a4a4", fontSize: 16, lineHeight: "1.6rem" }}
  >
    {props.children}
  </Typography>
);
