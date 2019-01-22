import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  LoadingSpinner,
  PendingChangesButton,
} from "@join-uniform/components";
import { useFormik } from "formik";
import { NextContext } from "next";
import Router from "next/router";
import React from "react";
import { adopt } from "react-adopt";
import { MutationFn, QueryResult } from "react-apollo";
import * as yup from "yup";
import { AdminLayoutDashboardContainer } from "~/containers";
import {
  ErrorMessagePageContents,
  FormikImagePicker,
  FormikMuiTextField,
} from "~/lib/admin";
import {
  EntryManagerEntryPartsFragment,
  EntryManagerGetEntryComponent,
  EntryManagerGetEntryProps,
  EntryManagerGetEntryQuery,
  EntryManagerUpdateEntryComponent,
  EntryManagerUpdateEntryMutation,
  EntryManagerUpdateEntryProps,
} from "~/lib/client";

type FormValues = {
  name: string;
  description: string;
  logoUrl: string;
};

type InitialProps = {
  entryId?: string;
};

type RenderProps = {
  updateEntry: MutationFn<
    EntryManagerUpdateEntryMutation,
    EntryManagerUpdateEntryProps
  >;
  getEntryResult: QueryResult<
    EntryManagerGetEntryQuery,
    EntryManagerGetEntryProps
  >;
};

type Props = Omit<RenderProps, "getEntryResult"> & {
  entry: EntryManagerEntryPartsFragment;
};

const pageTitle = "Edit Entry";

const Composed = adopt<RenderProps, { entryId: string }>({
  updateEntry: <EntryManagerUpdateEntryComponent />,
  getEntryResult: props => (
    <EntryManagerGetEntryComponent variables={{ entryId: props.entryId }}>
      {props.render}
    </EntryManagerGetEntryComponent>
  ),
});

export default function PageContainer(props: InitialProps) {
  const { entryId } = props;

  if (!entryId) {
    return (
      <ErrorMessagePageContents
        pageTitle={pageTitle}
        errorMessage="Expected an entry id."
      />
    );
  }

  return (
    <Composed entryId={entryId}>
      {({ getEntryResult, updateEntry }) => {
        const { loading, error, data } = getEntryResult;
        if (loading || error || !data) return <LoadingSpinner />;

        const { entriesByIds } = data;
        if (!entriesByIds) {
          return (
            <ErrorMessagePageContents
              pageTitle={pageTitle}
              errorMessage="The specified entry was not found."
            />
          );
        }

        return (
          <AdminEntryManagerEditEntryPage
            entry={entriesByIds[0]}
            updateEntry={updateEntry}
          />
        );
      }}
    </Composed>
  );
}

PageContainer.getInitialProps = async (ctx: NextContext) => {
  const entryId = ctx.query.entryId;

  return {
    entryId: Array.isArray(entryId) ? entryId[0] : entryId,
  };
};

function AdminEntryManagerEditEntryPage(props: Props) {
  const { entry, updateEntry } = props;

  const form = useFormik<FormValues>({
    initialValues: {
      name: entry.name,
      description: entry.description,
      logoUrl: entry.logoUrl,
    },
    onSubmit: async values => {
      await updateEntry({
        variables: {
          entryId: entry.id,
          update: values,
        },
      });
      // await getEntryResult.refetch();
      await Router.push("/admin/entry-manager");
    },
    validationSchema: yup.object<FormValues>({
      name: yup.string().required(),
      description: yup.string().required(),
      logoUrl: yup.string().required(),
    }),
  });

  return (
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
              <FormikMuiTextField name="name" label="Name" form={form} />
              <FormikMuiTextField
                name="description"
                label="Description"
                form={form}
              />
            </CardContent>
            <CardHeader title="Entry Logo" variant="admin" />
            <CardContent>
              <FormikImagePicker name="logoUrl" folder="entries" form={form} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AdminLayoutDashboardContainer>
  );
}
