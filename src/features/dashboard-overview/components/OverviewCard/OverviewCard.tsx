import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Typography } from "components/Typography";
import { CardMobileFlat } from "componentsV0/CardMobileFlat";
import React, { SFC } from "react";
import styled from "styled";

export type OverviewCardProps = {
  title: string;

  stats: Record<string, string>;
};

export const OverviewCard: SFC<OverviewCardProps> = props => {
  const { title, stats } = props;

  return (
    <CardMobileFlat>
      <CardHeader title={title} />

      <CardContent>
        {Object.entries(stats).map(([key, value], index) => (
          <StatRow key={`${key}-${index}`}>
            <Typography variant="Subtitle2">{key}</Typography>
            <Typography variant="Subtitle2">{value}</Typography>
          </StatRow>
        ))}
      </CardContent>
    </CardMobileFlat>
  );
};

const StatRow = styled.div`
  display: flex;

  > *:first-child {
    width: 50%;
  }

  > * {
    margin-bottom: ${({ theme }) => theme.spacing.unit}px;
  }
`;
