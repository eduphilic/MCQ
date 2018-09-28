import withWidth, { isWidthDown, WithWidth } from "@material-ui/core/withWidth";
import { Card, CardProps } from "components/Card";
import { CardContent } from "components/CardContent";
import React, { cloneElement, SFC } from "react";
import styled from "styled";

export type TestLoadingPageProps = {};

export const TestLoadingPage: SFC<TestLoadingPageProps> = props => {
  const {} = props;

  return (
    <StyledResponsiveCard>
      <CardContent>Placeholder</CardContent>
    </StyledResponsiveCard>
  );
};

const ResponsiveCard: SFC<CardProps & WithWidth> = ({
  width,
  innerRef,
  ...rest
}) => {
  const isMobile = isWidthDown("sm", width);

  const Wrapper = isMobile ? <div /> : <Card />;

  return cloneElement(Wrapper, rest);
};

const ResponsiveCardWithWith = withWidth()(ResponsiveCard);

const StyledResponsiveCard = styled(ResponsiveCardWithWith)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
