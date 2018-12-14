import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  PendingChangesButton,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@join-uniform/components";
import { GetEntriesComponent } from "@join-uniform/graphql";
import { Formik, FormikProps } from "formik";
import React from "react";
import { AdminLayoutDashboardContainer } from "../../../containers";
import { withQueryLoadingSpinner } from "../../../lib/utils";

type FormValues = {
  entrySource: "existing" | "new";
  existingEntryId: string | null;
  entryName: string;
  entryExplanation: string;
};

export default function EntryManagerNew() {
  return withQueryLoadingSpinner(
    GetEntriesComponent,
    ({ data: { entries } }) => (
      <Formik<FormValues>
        initialValues={{
          entrySource: entries.length > 0 ? "existing" : "new",
          existingEntryId: entries.length > 0 ? entries[0].id : null,
          entryName: "",
          entryExplanation: "",
        }}
        onSubmit={() => {
          //
        }}
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
                  <CardHeader title="Entry Selection" variant="admin" />
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
                          label="Add to existing entry"
                        />
                        <FormControlLabel
                          value="new"
                          control={<Radio />}
                          label="Create new entry"
                        />
                      </RadioGroup>
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

                  {form.values.entrySource === "new" && (
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

function FormTextField(props: {
  name: keyof FormValues;
  label: string;
  form: FormikProps<FormValues>;
}) {
  const { name, label, form } = props;

  return (
    <TextField
      fullWidth
      margin="normal"
      name={name}
      label={form.errors[name] || label}
      error={!!form.errors[name]}
      value={form.values[name] as string}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
    />
  );
}
