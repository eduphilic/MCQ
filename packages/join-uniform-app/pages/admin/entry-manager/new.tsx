import { Formik } from "formik";
import Router from "next/router";
import React, { useRef } from "react";

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
  MenuItem,
  PendingChangesButton,
  Radio,
  RadioGroup,
  Select,
} from "@join-uniform/components";
import {
  CreateCategoryExistingEntryComponent,
  CreateCategoryNewEntryComponent,
  GetEntriesComponent,
  GetEntryCategoriesDocument,
  GetEntryCategoriesVariables,
  ValidatorCategoryCreationRequestExistingEntry,
  ValidatorCategoryCreationRequestNewEntry,
} from "@join-uniform/graphql";
import { AdminLayoutDashboardContainer } from "~/containers";
import { FormikImagePicker, FormikMuiTextField } from "~/lib/admin";
import { withQueryLoadingSpinner } from "~/lib/utils";

type FormValues = {
  entrySource: "existing" | "new";
  categoryName: string;
  categoryEducation: string;
  pricePerPaper: string;

  existingEntryId: string | null;

  entryName: string;
  entryExplanation: string;
  entryLogoUrl: string | null;
};

export default function AdminEntryManagerNewEntryPage() {
  const entrySourceRef = useRef<FormValues["entrySource"] | null>(null);

  return withQueryLoadingSpinner(
    GetEntriesComponent,
    ({ data: { entries }, refetch }) => {
      entrySourceRef.current = entries.length > 0 ? "existing" : "new";

      return (
        <CreateCategoryExistingEntryComponent>
          {createCategoryExistingEntry => (
            <CreateCategoryNewEntryComponent>
              {createCategoryNewEntry => (
                <Formik<FormValues>
                  initialValues={{
                    entrySource: entrySourceRef.current!,
                    categoryName: "",
                    categoryEducation: "",
                    pricePerPaper: "10",

                    existingEntryId: entries.length > 0 ? entries[0].id : null,

                    entryName: "",
                    entryExplanation: "",
                    entryLogoUrl: null,
                  }}
                  onSubmit={async values => {
                    if (values.entrySource === "existing") {
                      const entryCategoriesVars: GetEntryCategoriesVariables = {
                        entryId: values.existingEntryId!,
                      };
                      await createCategoryExistingEntry({
                        variables: {
                          request: {
                            categoryEducation: values.categoryEducation,
                            categoryName: values.categoryName,
                            existingEntryId: values.existingEntryId!,
                            pricePerPaper: parseInt(values.pricePerPaper, 10),
                          },
                        },
                        refetchQueries: [
                          {
                            query: GetEntryCategoriesDocument,
                            variables: entryCategoriesVars,
                          },
                        ],
                      });
                      await Router.replace("/admin/entry-manager");
                      return;
                    }

                    await createCategoryNewEntry({
                      variables: {
                        request: {
                          categoryEducation: values.categoryEducation,
                          categoryName: values.categoryName,
                          entryExplanation: values.entryExplanation,
                          entryLogoUrl: values.entryLogoUrl!,
                          entryName: values.entryName,
                          pricePerPaper: parseInt(values.pricePerPaper, 10),
                        },
                      },
                    });
                    await refetch();
                    await Router.replace("/admin/entry-manager");
                  }}
                  validationSchema={() => {
                    return entrySourceRef.current === "new"
                      ? ValidatorCategoryCreationRequestNewEntry
                      : ValidatorCategoryCreationRequestExistingEntry;
                  }}
                >
                  {form => (
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
                            <CardHeader
                              title="Entry Selection"
                              variant="admin"
                            />
                            <CardContent>
                              <FormControl>
                                {/* Display as row on tablet viewport. */}
                                {Array.from({ length: 2 }).map(
                                  (_item, index) => (
                                    <Hidden
                                      key={index}
                                      smDown={index === 1}
                                      mdUp={index === 0}
                                      implementation="css"
                                    >
                                      <RadioGroup
                                        name="entrySource"
                                        value={form.values.entrySource}
                                        onChange={(
                                          event: React.ChangeEvent<{}>,
                                          value: string,
                                        ) => {
                                          form.handleChange(event);
                                          entrySourceRef.current = value as FormValues["entrySource"];
                                        }}
                                        onBlur={form.handleBlur}
                                        row={index === 1}
                                      >
                                        <FormControlLabel
                                          value="existing"
                                          control={<Radio />}
                                          label="Add to existing entry"
                                        />
                                        <FormControlLabel
                                          value="new"
                                          control={<Radio />}
                                          label="Create new entry"
                                        />
                                      </RadioGroup>
                                    </Hidden>
                                  ),
                                )}
                              </FormControl>
                            </CardContent>

                            {/* Start existing entry or new entry selections. */}
                            <Divider />

                            {/* Existing entry selection. */}
                            {form.values.entrySource === "existing" && (
                              <CardContent>
                                <FormControl fullWidth margin="normal">
                                  <InputLabel htmlFor="existingEntry">
                                    Entry
                                  </InputLabel>
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
                            {form.values.entrySource === "new" && (
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
                                <CardHeader
                                  title="Entry Logo"
                                  variant="admin"
                                />
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
                  )}
                </Formik>
              )}
            </CreateCategoryNewEntryComponent>
          )}
        </CreateCategoryExistingEntryComponent>
      );
    },
  );
}
