import { Grid, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import { ContentCenterWrapper } from "../../components/ContentCenterWrapper";
import { IndexConfig } from "../../models";
import { styled } from "../../styled";
import { LocalizationLanguageQuery } from "../localization";

const GET_ABOUT_SECTION_CONFIG = gql`
  query GetAboutSectionConfig($english: Boolean!) {
    indexConfig {
      ...english @include(if: $english)
      ...hindi @skip(if: $english)

      aboutImages {
        imageUrl
      }
    }
  }

  fragment english on IndexConfig {
    aboutTitleEn
    aboutTextEn
    aboutImages {
      titleEn
      textEn
    }
  }

  fragment hindi on IndexConfig {
    aboutTitleHi
    aboutTextHi
    aboutImages {
      titleHi
      textHi
    }
  }
`;

type Response = {
  indexConfig: Pick<
    IndexConfig,
    | "aboutTitleEn"
    | "aboutTitleHi"
    | "aboutTextEn"
    | "aboutTextHi"
    | "aboutImages"
  >;
};
type Variables = { english: boolean };

export const AboutSection = () => (
  <Wrapper>
    <ContentCenterWrapper style={{ textAlign: "center" }}>
      <LocalizationLanguageQuery>
        {localizationLanguage => (
          <Query<Response, Variables>
            query={GET_ABOUT_SECTION_CONFIG}
            variables={{ english: localizationLanguage === "en" }}
          >
            {({ data }) => (
              <>
                {(() => console.log(data!.indexConfig))()}
                <Title>
                  {data!.indexConfig.aboutTitleEn ||
                    data!.indexConfig.aboutTitleHi}
                </Title>
                <Text>
                  {data!.indexConfig.aboutTextEn ||
                    data!.indexConfig.aboutTextHi}
                </Text>
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
                      <Title>{aboutImage.titleEn || aboutImage.titleHi}</Title>
                      <Text>{aboutImage.textEn || aboutImage.textHi}</Text>
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
