import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Typography } from "components/Typography";
import { CardMobileFlat } from "componentsV0/CardMobileFlat";
import React, { SFC } from "react";

export type OverviewCardStat = {
  id: string;
  title: string;
  value: string;
};

export type OverviewCardProps = {
  title: string;

  stats: OverviewCardStat[];
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
                  <Typography variant="Subtitle2">{stat.title}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="Subtitle2">{stat.value}</Typography>
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
