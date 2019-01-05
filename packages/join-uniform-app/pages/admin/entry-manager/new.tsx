import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Hidden,
  InputLabel,
  LoadingSpinner,
  MenuItem,
  PendingChangesButton,
  Radio,
  RadioGroup,
  Select,
} from "@join-uniform/components";
import {
  EntryManagerCreateCategoryAndNewEntryComponent,
  EntryManagerCreateCategoryAndNewEntryMutation,
  EntryManagerCreateCategoryAndNewEntryVariables,
  EntryManagerCreateCategoryForExistingEntryComponent,
  EntryManagerCreateCategoryForExistingEntryMutation,
  EntryManagerCreateCategoryForExistingEntryVariables,
  EntryManagerGetEntriesComponent,
  EntryManagerGetEntriesEntries,
  EntryManagerGetEntriesQuery,
  EntryManagerGetEntriesVariables,
  ValidatorCategoryCreationRequestExistingEntry,
  ValidatorCategoryCreationRequestNewEntry,
} from "@join-uniform/graphql";
import { FormikHelpers, useFormik } from "formik";
import Router from "next/router";
import React, { useState } from "react";
import { adopt } from "react-adopt";
import { MutationFn, QueryResult } from "react-apollo";

import { AdminLayoutDashboardContainer } from "~/containers";
import {
  FormikImagePicker,
  FormikMuiTextField,
  updateStoreEntries,
} from "~/lib/admin";

type FormValues = {
  categoryName: string;
  categoryEducation: string;
  pricePerPaper: string;

  existingEntryId: string | null;

  entryName: string;
  entryExplanation: string;
  entryLogoUrl: string | null;
};

type RenderProps = {
  getEntriesResult: QueryResult<
    EntryManagerGetEntriesQuery,
    EntryManagerGetEntriesVariables
  >;
  createCategoryExistingEntry: MutationFn<
    EntryManagerCreateCategoryForExistingEntryMutation,
    EntryManagerCreateCategoryForExistingEntryVariables
  >;
  createCategoryNewEntry: MutationFn<
    EntryManagerCreateCategoryAndNewEntryMutation,
    EntryManagerCreateCategoryAndNewEntryVariables
  >;
};

type Props = Omit<RenderProps, "getEntriesResult"> & {
  entries: EntryManagerGetEntriesEntries[];
};

const Composed = adopt<RenderProps, {}>({
  getEntriesResult: <EntryManagerGetEntriesComponent />,
  createCategoryExistingEntry: (
    <EntryManagerCreateCategoryForExistingEntryComponent />
  ),
  createCategoryNewEntry: <EntryManagerCreateCategoryAndNewEntryComponent />,
});

export default function PageContainer() {
  return (
    <Composed>
      {props => {
        const {
          getEntriesResult: { loading, error, data },
        } = props;
        if (loading || error || !data) return <LoadingSpinner />;
        const { entries } = data;

        return <Page {...props} entries={entries} />;
      }}
    </Composed>
  );
}

function Page(props: Props) {
  const {
    entries,
    createCategoryExistingEntry,
    createCategoryNewEntry,
  } = props;

  const [entrySource, setEntrySource] = useState<"existing" | "new">(
    entries.length > 0 ? "existing" : "new",
  );

  const initialValues: FormValues = {
    categoryName: "",
    categoryEducation: "",
    pricePerPaper: "10",

    existingEntryId: entrySource === "existing" ? entries[0].id : null,

    entryName: "",
    entryExplanation: "",
    entryLogoUrl: null,
  };

  const form = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: () => {
      return entrySource === "new"
        ? ValidatorCategoryCreationRequestNewEntry
        : ValidatorCategoryCreationRequestExistingEntry;
    },
  });

  return (
    <AdminLayoutDashboardContainer
      title="New Entry"
      appBarButtons={[
        <PendingChangesButton
          hasDiscardableChanges={form.dirty}
          hasPublishableChanges={form.isValid}
          onDiscardButtonClick={() => form.resetForm()}
          onPublishButtonClick={() => form.submitForm()}
        />,
      ]}
    >
      <Grid container spacing={16} contentCenter>
        {/* Entry Selection card. */}
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Entry Selection" variant="admin" />
            <CardContent>
              <FormControl>
                {/* Display as row on tablet viewport. */}
                {Array.from({ length: 2 }).map((_item, index) => (
                  <Hidden
                    key={index}
                    smDown={index === 1}
                    mdUp={index === 0}
                    implementation="css"
                  >
                    <RadioGroup
                      name="entrySource"
                      value={entrySource}
                      onChange={(
                        event: React.ChangeEvent<{}>,
                        value: string,
                      ) => {
                        form.handleChange(event);
                        setEntrySource(value as "existing" | "new");
                      }}
                      onBlur={form.handleBlur}
                      row={index === 1}
                    >
                      {entries.length > 0 && (
                        <FormControlLabel
                          value="existing"
                          control={<Radio />}
                          label="Add to existing entry"
                        />
                      )}
                      <FormControlLabel
                        value="new"
                        control={<Radio />}
                        label="Create new entry"
                      />
                    </RadioGroup>
                  </Hidden>
                ))}
              </FormControl>
            </CardContent>

            {/* Start existing entry or new entry selections. */}
            <Divider />

            {/* Existing entry selection. */}
            {entrySource === "existing" && (
              <CardContent>
                <FormControl fullWidth margin="normal">
                  <InputLabel htmlFor="existingEntry">Entry</InputLabel>
                  <Select
                    value={form.values.existingEntryId || ""}
                    onChange={form.handleChange}
                    inputProps={{
                      id: "existingEntry",
                      name: "existingEntryId",
                    }}
                  >
                    {entries.map(entry => (
                      <MenuItem key={entry.id} value={entry.id}>
                        {entry.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            )}

            {/* New entry selection. */}
            {entrySource === "new" && (
              <>
                <CardContent>
                  <FormikMuiTextField
                    name="entryName"
                    label="Entry Name"
                    form={form}
                  />
                  <FormikMuiTextField
                    name="entryExplanation"
                    label="Entry Explanation"
                    form={form}
                  />
                </CardContent>
                <CardHeader title="Entry Logo" variant="admin" />
                <CardContent>
                  <FormikImagePicker
                    name="entryLogoUrl"
                    folder="entries"
                    form={form}
                  />
                </CardContent>
              </>
            )}
          </Card>
        </Grid>

        {/* Category card. */}
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Category" variant="admin" />
            <CardContent>
              <FormikMuiTextField
                name="categoryName"
                label="Category Name"
                form={form}
              />
              <FormikMuiTextField
                name="categoryEducation"
                label="Category Education"
                form={form}
              />
              <FormikMuiTextField
                name="pricePerPaper"
                type="number"
                label="Price Per Paper (Rs)"
                form={form}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AdminLayoutDashboardContainer>
  );

  async function handleSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>,
  ) {
    if (entrySource === "existing") {
      await handleSubmitUsingExistingEntry(values);
    }
    if (entrySource === "new") {
      await handleSubmitUsingNewEntry(values);
    }
    helpers.setSubmitting(false);

    await Router.replace("/admin/entry-manager");
  }

  async function handleSubmitUsingExistingEntry(values: FormValues) {
    const entryId = values.existingEntryId!;
    await createCategoryExistingEntry({
      variables: {
        request: {
          existingEntryId: entryId,
          categoryName: values.categoryName,
          categoryEducation: values.categoryEducation,
          pricePerPaper: parseInt(values.pricePerPaper, 10),
        },
      },
      update: (proxy, fetchResult) => {
        updateStoreEntries(proxy, queryResult => {
          queryResult.entries
            .find(e => e.id === entryId)!
            .categories.push(fetchResult.data!.createCategoryExistingEntry);
        });
      },
    });
  }

  async function handleSubmitUsingNewEntry(values: FormValues) {
    await createCategoryNewEntry({
      variables: {
        request: {
          entryName: values.entryName,
          entryExplanation: values.entryExplanation,
          entryLogoUrl: values.entryLogoUrl!,
          categoryName: values.categoryName,
          categoryEducation: values.categoryEducation,
          pricePerPaper: parseInt(values.pricePerPaper, 10),
        },
      },
      update: (proxy, fetchResult) => {
        updateStoreEntries(proxy, queryResult => {
          queryResult.entries.push(fetchResult.data!.createCategoryNewEntry);
        });
      },
    });
  }
}
