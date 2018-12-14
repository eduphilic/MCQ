import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  Grid,
  PendingChangesButton,
  Radio,
  RadioGroup,
} from "@join-uniform/components";
import { GetEntriesComponent } from "@join-uniform/graphql";
import { Divider } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import { AdminLayoutDashboardContainer } from "../../../containers";
import { withQueryLoadingSpinner } from "../../../lib/utils";

type FormValues = {
  entrySource: "existing" | "new";
};

export default function EntryManagerNew() {
  return withQueryLoadingSpinner(
    GetEntriesComponent,
    ({ data: { entries } }) => (
      <Formik<FormValues>
        initialValues={{
          entrySource: entries.length > 0 ? "existing" : "new",
        }}
        onSubmit={() => {}}
      >
        {form => (
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
                  <CardContent>
                    <FormControl>
                      <RadioGroup
                        name="entrySource"
                        value={form.values.entrySource}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      >
                        <FormControlLabel
                          value="existing"
                          control={<Radio />}
                          label="Existing entry"
                        />
                        <FormControlLabel
                          value="new"
                          control={<Radio />}
                          label="Create new entry"
                        />
                      </RadioGroup>
                    </FormControl>
                  </CardContent>
                  <Divider />
                  {form.values.entrySource === "existing" && (
                    <CardContent>Placeholder</CardContent>
                  )}
                </Card>
              </Grid>
            </Grid>
          </AdminLayoutDashboardContainer>
        )}
      </Formik>
    ),
  );
}
