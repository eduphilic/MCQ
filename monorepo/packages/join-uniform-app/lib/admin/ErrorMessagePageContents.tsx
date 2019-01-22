import { Grid, Typography } from "@join-uniform/components";
import React from "react";
import { AdminLayoutDashboardContainer } from "~/containers";

type Props = {
  pageTitle: string;
  errorMessage: string;
};

export function ErrorMessagePageContents(props: Props) {
  const { pageTitle, errorMessage } = props;

  return (
    <AdminLayoutDashboardContainer title={pageTitle}>
      <Grid container contentCenter spacing={16}>
        <Grid item xs={12}>
          <Typography>{errorMessage}</Typography>
        </Grid>
      </Grid>
    </AdminLayoutDashboardContainer>
  );
}
