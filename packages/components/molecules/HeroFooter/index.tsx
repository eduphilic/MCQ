import strings from "l10n";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled from "styled";

/**
 * Footer of hero image section of landing page.
 *
 * Needs background image.
 */
export const HeroFooter: SFC<{}> = () => (
  <Wrapper>
    <Bar />
    <Text>{strings.heroFooterText}</Text>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(23, 133, 70, 0.7);

  > * {
    margin: ${props => props.theme.spacing.unit * 4}px;
  }
`;

const Bar = styled.div`
  width: 97px;
  height: 5px;
  background-color: #f2c94c;
`;

const Text = styled(Typography).attrs({
  variant: "title",
})`
  margin-top: 0 !important;
  font-size: 18px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.01rem;
`;
