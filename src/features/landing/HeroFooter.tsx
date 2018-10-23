import { Typography } from "@material-ui/core";
import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import { IndexConfig } from "../../models";
import { styled } from "../../styled";
import { LocalizationLanguageQuery } from "../localization";

const GET_HERO_FOOTER_TEXT = gql`
  query GetHeroFooterText($english: Boolean!) {
    indexConfig {
      heroFooterTextEn @include(if: $english)
      heroFooterTextHi @skip(if: $english)
    }
  }
`;

type Response = {
  indexConfig: Pick<IndexConfig, "heroFooterTextEn" | "heroFooterTextHi">;
};
type Variables = { english: boolean };

/**
 * Footer of hero image section of landing page.
 *
 * Needs background image.
 */
export const HeroFooter = () => (
  <Wrapper>
    <LocalizationLanguageQuery>
      {localizationLanguage => (
        <Query<Response, Variables>
          query={GET_HERO_FOOTER_TEXT}
          variables={{ english: localizationLanguage === "en" }}
        >
          {({ data }) => (
            <Text>
              {data!.indexConfig.heroFooterTextEn ||
                data!.indexConfig.heroFooterTextHi}
            </Text>
          )}
        </Query>
      )}
    </LocalizationLanguageQuery>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5ba87c;

  > * {
    margin: ${props => props.theme.spacing.unit * 4}px;
  }

  > * {
    font-size: 26px !important;
  }
`;

const Text = styled(Typography).attrs({
  variant: "h6",
})`
  font-weight: 600;
  letter-spacing: 0.01rem;
`;
