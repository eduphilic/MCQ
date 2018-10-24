import { Typography } from "@material-ui/core";
import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import { IndexPageConfig, LocalizationSupportedLanguages } from "../../models";
import { styled } from "../../styled";
import { LocalizationLanguageQuery } from "../localization";

const GET_HERO_FOOTER_TEXT = gql`
  query GetHeroFooterText($language: LocalizationLanguage!) {
    indexPageConfig {
      heroFooterText @l10n(language: $language)
    }
  }
`;

type Response = {
  indexConfig: Pick<IndexPageConfig, "heroFooterText">;
};
type Variables = { language: LocalizationSupportedLanguages };

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
          variables={{ language: localizationLanguage }}
        >
          {({ data }) => <Text>{data!.indexConfig.heroFooterText}</Text>}
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
