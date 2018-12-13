import { Grid, PendingChangesButton } from "@join-uniform/components";
import React from "react";
import { AdminLayoutDashboardContainer } from "../../../containers";

export default function EntryManagerNew() {
  return (
    <AdminLayoutDashboardContainer
      title="New Entry"
      appBarButtons={[
        <PendingChangesButton
          hasDiscardableChanges
          hasPublishableChanges
          onDiscardButtonClick={() => {}} // tslint:disable-line:no-empty
          onPublishButtonClick={() => {}} // tslint:disable-line:no-empty
        />,
      ]}
    >
      <Grid container spacing={16} contentCenter>
        New Entry Page
      </Grid>
    </AdminLayoutDashboardContainer>
  );
}
