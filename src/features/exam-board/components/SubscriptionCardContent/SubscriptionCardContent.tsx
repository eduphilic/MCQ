import React, { SFC } from "react";
import styled from "styled";

import CardContent from "@material-ui/core/CardContent";

import { Typography2 } from "componentsV0/Typography2";

export type SubscriptionCardContentProps = {
  stats: Record<string, string>;
};

export const SubscriptionCardContent: SFC<
  SubscriptionCardContentProps
> = props => {
  const { stats } = props;

  return (
    <CardContent>
      {Object.entries(stats).map(([key, value], index) => (
        <StatRow key={`${key}-${index}`}>
          <Typography2 variant="Subtitle2">{key}</Typography2>
          <Typography2 variant="Subtitle2">{value}</Typography2>
        </StatRow>
      ))}
    </CardContent>
  );
};

const StatRow = styled.div`
  display: flex;

  > *:first-child {
    width: 50%;
  }

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.unit}px;
  }
`;
