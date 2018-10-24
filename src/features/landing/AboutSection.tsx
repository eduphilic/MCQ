import { Grid, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import { ContentCenterWrapper } from "../../components/ContentCenterWrapper";
import { IndexPageConfig, LocalizationSupportedLanguages } from "../../models";
import { styled } from "../../styled";
import { LocalizationLanguageQuery } from "../localization";

const GET_ABOUT_SECTION_CONFIG = gql`
  query GetAboutSectionConfig($language: LocalizationLanguage!) {
    indexPageConfig {
      aboutTitle @l10n(language: $language)
      aboutText @l10n(language: $language)
      aboutImages {
        imageUrl
        title @l10n(language: $language)
        text @l10n(language: $language)
      }
    }
  }
`;

type Response = {
  indexConfig: Pick<
    IndexPageConfig,
    "aboutTitle" | "aboutText" | "aboutImages"
  >;
};
type Variables = { language: LocalizationSupportedLanguages };

export const AboutSection = () => (
  <Wrapper>
    <ContentCenterWrapper style={{ textAlign: "center" }}>
      <LocalizationLanguageQuery>
        {localizationLanguage => (
          <Query<Response, Variables>
            query={GET_ABOUT_SECTION_CONFIG}
            variables={{ language: localizationLanguage }}
          >
            {({ data }) => (
              <>
                <Title>{data!.indexConfig.aboutTitle}</Title>
                <Text>{data!.indexConfig.aboutText}</Text>
                <Grid container spacing={16}>
                  {data!.indexConfig.aboutImages.map((aboutImage, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      md={6}
                      style={{ marginTop: 24 }}
                    >
                      <img
                        src={aboutImage.imageUrl}
                        style={{ marginBottom: 24 }}
                      />
                      <Title>{aboutImage.title}</Title>
                      <Text>{aboutImage.text}</Text>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </Query>
        )}
      </LocalizationLanguageQuery>
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
