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
import { FormikHelpers, useFormik } from "formik";
import Router from "next/router";
import React, { useState } from "react";
import { adopt } from "react-adopt";
import { QueryResult } from "react-apollo";
import {
  EntryManagerCreateCategoryComponent,
  EntryManagerCreateCategoryMutationFn,
  EntryManagerCreateEntryComponent,
  EntryManagerCreateEntryMutationFn,
  EntryManagerGetEntriesComponent,
  EntryManagerGetEntriesEntries,
  EntryManagerGetEntriesQuery,
  EntryManagerGetEntriesVariables,
} from "~/lib/client";

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
  createEntry: EntryManagerCreateEntryMutationFn;
  createCategory: EntryManagerCreateCategoryMutationFn;
};

type Props = Omit<RenderProps, "getEntriesResult"> & {
  entries: EntryManagerGetEntriesEntries[];
};

const Composed = adopt<RenderProps, {}>({
  getEntriesResult: <EntryManagerGetEntriesComponent />,
  createEntry: <EntryManagerCreateEntryComponent />,
  createCategory: <EntryManagerCreateCategoryComponent />,
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
  const { entries, createEntry, createCategory } = props;

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
    // TODO: Add validation.
    // validationSchema: () => {
    //   return entrySource === "new"
    //     ? ValidatorCategoryCreationRequestNewEntry
    //     : ValidatorCategoryCreationRequestExistingEntry;
    // },
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
    let entryId: string = values.existingEntryId || "";

    if (entrySource === "new") {
      await createEntry({
        variables: {
          request: {
            name: values.entryName,
            explanation: values.entryExplanation,
            logoUrl: values.entryLogoUrl!,
          },
        },
        update: (proxy, fetchResult) => {
          updateStoreEntries(proxy, queryResult => {
            queryResult.entries.push(fetchResult.data!.createEntry);
            entryId = fetchResult.data!.createEntry.id;
          });
        },
      });
    }

    await createCategory({
      variables: {
        request: {
          entryId,
          name: values.categoryName,
          education: values.categoryEducation,
          pricePerPaperRs: parseInt(values.pricePerPaper, 10),
        },
      },
      update: (proxy, fetchResult) => {
        updateStoreEntries(proxy, queryResult => {
          const entry = queryResult.entries.find(e => e.id === entryId)!;
          entry.categories.push(fetchResult.data!.createCategory);
        });
      },
    });

    helpers.setSubmitting(false);
    await Router.replace("/admin/entry-manager");
  }
}