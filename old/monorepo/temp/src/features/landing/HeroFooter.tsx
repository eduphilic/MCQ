import Typography from "@material-ui/core/Typography";
import gql from "graphql-tag";
import React from "react";
import { Query } from "../../api";
import { QueryWithLoading } from "../../components/QueryWithLoading";
import { styled } from "../../styled";
import { l } from "../localization";

const GET_HERO_FOOTER_TEXT = gql`
  query GetHeroFooterText {
    indexPageConfig {
      heroFooterText
    }
  }
`;

/**
 * Footer of hero image section of landing page.
 *
 * Needs background image.
 */
export const HeroFooter = () => (
  <Wrapper>
    <QueryWithLoading<Pick<Query, "indexPageConfig">>
      query={GET_HERO_FOOTER_TEXT}
    >
      {({ data }) => {
        return <Text>{l(data.indexPageConfig.heroFooterText)}</Text>;
      }}
    </QueryWithLoading>
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