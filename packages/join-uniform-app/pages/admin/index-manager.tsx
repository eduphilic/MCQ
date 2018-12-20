import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  PendingChangesButton,
} from "@join-uniform/components";
import { GetIndexPageConfigComponent } from "@join-uniform/graphql";
import { Formik } from "formik";
import React from "react";
import { AdminLayoutDashboardContainer } from "~/containers";
import { FormikImagePicker } from "~/lib/admin";
import { withQueryLoadingSpinner } from "~/lib/utils";

type FormValues = {
  logoUrl: string;
};

export default function AdminIndexManagerPage() {
  return withQueryLoadingSpinner(
    GetIndexPageConfigComponent,
    getIndexPageConfigResult => (
      <Formik<FormValues>
        initialValues={{
          logoUrl: getIndexPageConfigResult.data.logoConfig.url,
        }}
        onSubmit={() => {
          //
        }}
      >
        {form => (
          <AdminLayoutDashboardContainer
            title="Index Manager"
            appBarButtons={[
              <PendingChangesButton
                hasDiscardableChanges={form.dirty}
                hasPublishableChanges={form.isValid}
                onDiscardButtonClick={() => form.resetForm()}
                onPublishButtonClick={() => form.submitForm()}
              />,
            ]}
          >
            <Grid container contentCenter spacing={16}>
              {/* Site logo config card. */}
              <Grid item xs={12}>
                <Card>
                  <CardHeader title="Logo" variant="admin" />
                  <CardContent>
                    <FormikImagePicker
                      name="logoUrl"
                      folder="logo"
                      form={form}
                    />
                  </CardContent>
                </Card>
              </Grid>

              <div>Page Contents</div>
              <div>{getIndexPageConfigResult.data!.logoConfig.url}</div>
            </Grid>
          </AdminLayoutDashboardContainer>
        )}
      </Formik>
    ),
  );
}
