import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  LoadingSpinner,
  PendingChangesButton,
  Typography,
} from "@join-uniform/components";
import { GetEntryComponent, UpdateEntryComponent } from "@join-uniform/graphql";
import { Formik } from "formik";
import { NextSFC } from "next";
import Router from "next/router";
import React from "react";
import * as yup from "yup";
import { AdminLayoutDashboardContainer } from "~/containers";
import { FormikImagePicker, FormikMuiTextField } from "~/lib/admin";

type Props = {
  entryId?: string;
};

type FormValues = {
  name: string;
  description: string;
  logoUrl: string;
};

const pageTitle = "Edit Entry";

const AdminEntryManagerEditEntryPage: NextSFC<Props> = props => {
  const { entryId } = props;

  if (!entryId || entryId.length < 1) {
    return renderNotFoundNode();
  }

  return (
    <UpdateEntryComponent>
      {updateEntry => (
        <GetEntryComponent variables={{ entryId }}>
          {getEntryResult => {
            if (getEntryResult.loading || getEntryResult.error) {
              return <LoadingSpinner />;
            }

            const entry = getEntryResult.data!.entry;
            if (!entry) return renderNotFoundNode();

            return (
              <Formik<FormValues>
                initialValues={{
                  name: entry.name,
                  description: entry.description,
                  logoUrl: entry.logoUrl,
                }}
                onSubmit={async values => {
                  await updateEntry({
                    variables: {
                      entryId: entry.id,
                      update: values,
                    },
                  });
                  await getEntryResult.refetch();
                  await Router.push("/admin/entry-manager");
                }}
                validationSchema={yup.object<FormValues>({
                  name: yup.string().required(),
                  description: yup.string().required(),
                  logoUrl: yup.string().required(),
                })}
              >
                {form => (
                  <AdminLayoutDashboardContainer
                    title={pageTitle}
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
                      <Grid item xs={12}>
                        <Card>
                          <CardHeader title="Entry" variant="admin" />
                          <CardContent>
                            <FormikMuiTextField
                              name="name"
                              label="Name"
                              form={form}
                            />
                            <FormikMuiTextField
                              name="description"
                              label="Description"
                              form={form}
                            />
                          </CardContent>
                          <CardHeader title="Entry Logo" variant="admin" />
                          <CardContent>
                            <FormikImagePicker
                              name="logoUrl"
                              folder="entries"
                              form={form}
                            />
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </AdminLayoutDashboardContainer>
                )}
              </Formik>
            );
          }}
        </GetEntryComponent>
      )}
    </UpdateEntryComponent>
  );

  function renderNotFoundNode() {
    return (
      <AdminLayoutDashboardContainer title={pageTitle}>
        <Grid container contentCenter spacing={16}>
          <Grid item xs={12}>
            <Typography>Specified Entry does not exist.</Typography>
          </Grid>
        </Grid>
      </AdminLayoutDashboardContainer>
    );
  }
};

AdminEntryManagerEditEntryPage.getInitialProps = async ctx => {
  const entryIdQuery = ctx.query.entryId;

  return {
    entryId: Array.isArray(entryIdQuery) ? entryIdQuery[0] : entryIdQuery,
  };
};

export default AdminEntryManagerEditEntryPage;

export const test = <AdminEntryManagerEditEntryPage />;
