import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  PendingChangesButton,
} from "@join-uniform/components";
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
        <Grid item xs>
          <Card>
            <CardHeader title="Entry Selection" />
            <CardContent>Existing entry / create new entry</CardContent>
          </Card>
        </Grid>
      </Grid>
    </AdminLayoutDashboardContainer>
  );
}
