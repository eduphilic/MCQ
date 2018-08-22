import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Typography } from "components/Typography";
import { CardMobileFlat } from "componentsV0/CardMobileFlat";
import React, { SFC } from "react";
import styled from "styled";

export type OverviewCardStat = {
  id: string;
  title: string;
  value: string;
};

export type OverviewCardProps = {
  title: string;

  stats: OverviewCardStat[];

  /**
   * If supplied, turns the stat value into a button. This handler is called
   * when the button is pressed with the stat id.
   */
  onStatValueClick?: (id: string) => void;
};

export const OverviewCard: SFC<OverviewCardProps> = props => {
  const { title, stats } = props;

  return (
    <CardMobileFlat>
      <CardHeader title={title} />

      <CardContent>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            {stats.map((stat, index) => (
              <Grid key={`${stat.id}-${index}`} container spacing={16}>
                <Grid item xs={12} md={6}>
                  {renderStatKey(props, stat.id)}
                </Grid>
                <Grid item xs={12} md={6}>
                  {renderStatValue(props, stat.id)}
                </Grid>

                {index < stats.length - 1 && (
                  <Hidden mdUp>
                    <Grid item xs={12} style={{ marginBottom: 8 }}>
                      <Divider />
                    </Grid>
                  </Hidden>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </CardMobileFlat>
  );
};

/**
 * Align the stat key with the stat value. The stat value button is 32px. If
 * the stat value is not-clickable, do nothing special.
 */
const renderStatKey = (props: OverviewCardProps, id: string) => {
  const stat = props.stats.find(s => s.id === id);
  if (!stat) {
    throw new Error("Could not find stat corresponding to supplied id.");
  }

  const keyNode = <Typography variant="Subtitle2">{stat.title}</Typography>;
  if (!props.onStatValueClick) return keyNode;

  return <VerticallySpacedKeyWrapper>{keyNode}</VerticallySpacedKeyWrapper>;
};

const renderStatValue = (props: OverviewCardProps, id: string) => {
  const stat = props.stats.find(s => s.id === id);
  if (!stat) {
    throw new Error("Could not find stat corresponding to supplied id.");
  }

  const { onStatValueClick } = props;
  const valueNode = <Typography variant="Subtitle2">{stat.value}</Typography>;
  if (!onStatValueClick) return valueNode;

  return (
    <ValueButton
      size="small"
      classes={{ label: "label" }}
      onClick={() => onStatValueClick(id)}
    >
      {valueNode}
    </ValueButton>
  );
};

const VerticallySpacedKeyWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
`;

const ValueButton = styled(Button)`
  & > .label {
    text-transform: none;
  }

  * {
    color: #2d9cdb !important;
  }
`;
