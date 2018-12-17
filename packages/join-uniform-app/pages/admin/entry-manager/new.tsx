import { Formik, FormikProps } from "formik";
import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Hidden,
  ImagePicker,
  InputLabel,
  MenuItem,
  PendingChangesButton,
  Radio,
  RadioGroup,
  Select,
  TextField,
  TextFieldProps,
} from "@join-uniform/components";
import { GetEntriesComponent } from "@join-uniform/graphql";
import { css } from "@join-uniform/theme";
import { AdminLayoutDashboardContainer } from "~/containers";
import {
  createResponsiveImageUrl,
  useCloudinary,
  withQueryLoadingSpinner,
} from "~/lib/utils";

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

export default function EntryManagerNew() {
  const cloudinary = useCloudinary();

  return withQueryLoadingSpinner(
    GetEntriesComponent,
    ({ data: { entries } }) => (
      <Formik<FormValues>
        initialValues={{
          entrySource: entries.length > 0 ? "existing" : "new",
          categoryName: "",
          categoryEducation: "",
          pricePerPaper: "10",

          existingEntryId: entries.length > 0 ? entries[0].id : null,

          entryName: "",
          entryExplanation: "",
          entryLogoUrl: null,
        }}
        onSubmit={() => {
          //
        }}
      >
        {form => (
          <AdminLayoutDashboardContainer
            title="New Category"
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
                            value={form.values.entrySource}
                            onChange={form.handleChange}
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
                      ))}
                    </FormControl>
                  </CardContent>

                  {/* Start existing entry or new entry selections. */}
                  <Divider />

                  {/* Existing entry selection. */}
                  {form.values.entrySource === "existing" && (
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
                  {form.values.entrySource === "new" && (
                    <>
                      <CardContent>
                        <FormTextField
                          name="entryName"
                          label="Entry Name"
                          form={form}
                        />
                        <FormTextField
                          name="entryExplanation"
                          label="Entry Explanation"
                          form={form}
                        />
                      </CardContent>
                      <CardHeader
                        title="Entry Logo"
                        variant="admin"
                        css={css`
                          padding-bottom: 8px;
                        `}
                      />
                      <CardContent>
                        <ImagePicker
                          uploadedImageUrl={
                            form.values.entryLogoUrl &&
                            createResponsiveImageUrl(form.values.entryLogoUrl, {
                              format: "png",
                            })
                          }
                          previewImageUrl={
                            form.values.entryLogoUrl &&
                            createResponsiveImageUrl(form.values.entryLogoUrl, {
                              w: "128",
                              h: "128",
                              format: "png",
                            })
                          }
                          onSelectButtonClick={() =>
                            handleLogoSelectButtonClick(form)
                          }
                          onUploadButtonClick={() =>
                            handleLogoUploadButtonClick(form)
                          }
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
                    <FormTextField
                      name="categoryName"
                      label="Category Name"
                      form={form}
                    />
                    <FormTextField
                      name="categoryEducation"
                      label="Category Education"
                      form={form}
                    />
                    <FormTextField
                      name="pricePerPaper"
                      type="number"
                      label="Price per Paper"
                      form={form}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </AdminLayoutDashboardContainer>
        )}
      </Formik>
    ),
  );

  async function handleLogoSelectButtonClick(form: FormikProps<FormValues>) {
    if (!cloudinary) return;

    cloudinary.client.openMediaLibrary(
      await cloudinary.getDefaultMediaLibraryWidgetOptions(),
      {
        insertHandler: data => {
          form.setFieldValue("entryLogoUrl", data.assets[0].secure_url);
        },
      },
    );
  }

  function handleLogoUploadButtonClick(form: FormikProps<FormValues>) {
    if (!cloudinary) return;

    cloudinary.client.openUploadWidget(
      {
        ...cloudinary.getDefaultUploadWidgetOptions(),
        folder: "categories",
      },
      (err, result) => {
        if (err) throw new Error(err);
        if (result.event === "abort" || result.event === "close") {
          return;
        }
        if (result.event === "success") {
          form.setFieldValue("entryLogoUrl", result.info.secure_url);
        }
      },
    );
  }
}

function FormTextField(props: {
  name: keyof FormValues;
  type?: TextFieldProps["type"];
  label: string;
  form: FormikProps<FormValues>;
}) {
  const { name, type, label, form } = props;

  return (
    <TextField
      fullWidth
      margin="normal"
      name={name}
      type={type}
      label={form.errors[name] || label}
      error={!!form.errors[name]}
      value={form.values[name] as string}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
    />
  );
}
