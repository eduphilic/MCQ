import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { CardContent } from "components/CardContent";
import { CardHeader, CardHeaderProps } from "components/CardHeader";
import { DashboardSecondaryToolbar } from "componentsV0/DashboardSecondaryToolbar";
import { FormikFileUploadField } from "componentsV0/FormikFileUploadField";
import { FormikTextField } from "componentsV0/FormikTextField";
import { Typography } from "componentsV0/Typography";
import { Formik } from "formik";
import React, { SFC } from "react";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

type IndexPageSettings = {
  logoImage: File | null;
  heroBackgroundImage: File | null;
  heroBackgroundImageAlpha: number;
  heroTextPrimaryEnglish: string;
  heroTextPrimaryHindi: string;
  heroFeaturesEnglish: string;
  heroFeaturesHindi: string;
};

const initialValues: IndexPageSettings = {
  logoImage: null,
  heroBackgroundImage: null,
  heroBackgroundImageAlpha: 0.25,
  heroTextPrimaryEnglish: "What we are offering mock test",
  heroTextPrimaryHindi: "What we are offering mock test",
  heroFeaturesEnglish: `Mock test as asked in Armed Forces exams.
Full length Weekly Mock Test
Instant result with detail analysis
All India rank`,
  heroFeaturesHindi: `Mock test as asked in Armed Forces exams.
Full length Weekly Mock Test
Instant result with detail analysis
All India rank`,
};

export const AdminIndexManager: SFC = () => (
  <AdminDashboardTemplateContainer>
    <Formik<IndexPageSettings>
      initialValues={initialValues}
      onSubmit={values => alert(JSON.stringify(values, null, 2))}
    >
      {formikProps => (
        <Grid container spacing={16}>
          {/* Logo Image */}
          <Grid item xs={12}>
            <DashboardSecondaryToolbar>
              <DashboardSecondaryToolbar.Content>
                <Typography variant="cardTitle">Logo</Typography>
              </DashboardSecondaryToolbar.Content>
              <DashboardSecondaryToolbar.Content
                style={{ flex: 1, paddingBottom: 12 }}
              >
                <FormikFileUploadField
                  formikApi={formikProps}
                  name="logoImage"
                  acceptedFileTypes="image/*"
                  placeholder="Browse"
                />
              </DashboardSecondaryToolbar.Content>
            </DashboardSecondaryToolbar>
          </Grid>

          {/* Hero */}
          <Grid item xs={12}>
            <Card>
              <AdminCardHeader title="Hero" />
              <CardContent>
                <SectionTitle>Hero Background</SectionTitle>
                <div style={{ marginTop: -16 }}>
                  <FormikFileUploadField
                    formikApi={formikProps}
                    name="heroBackgroundImage"
                    acceptedFileTypes="image/*"
                    placeholder="Browse"
                  />
                  <TextField
                    name="heroBackgroundImageAlpha"
                    type="number"
                    margin="normal"
                    fullWidth
                    label="Background Image Alpha (0.05 - 0.95)"
                    helperText="Controls the transparency of the background image."
                    inputProps={{ step: "0.05", min: "0.05", max: ".95" }}
                    value={formikProps.values.heroBackgroundImageAlpha}
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                  />
                </div>
              </CardContent>

              <CardContent>
                <Typography
                  variant="tableHeadCell"
                  style={{ marginBottom: 16 }}
                >
                  Hero Text
                </Typography>
                <Grid container spacing={16}>
                  <Grid item xs={12} md={6}>
                    <FormikTextField
                      formikApi={formikProps}
                      name="heroTextPrimaryEnglish"
                      label="Hero Primary Text (English)"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormikTextField
                      formikApi={formikProps}
                      name="heroTextPrimaryHindi"
                      label="Hero Primary Text (Hindi)"
                    />
                  </Grid>
                </Grid>
              </CardContent>

              <CardContent>
                <SectionTitle>Hero Features</SectionTitle>
                <Grid container spacing={16}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="heroFeaturesEnglish"
                      multiline
                      fullWidth
                      label="Hero Features (English)"
                      value={formikProps.values.heroFeaturesEnglish}
                      onChange={formikProps.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="heroFeaturesHindi"
                      multiline
                      fullWidth
                      label="Hero Features (Hindi)"
                      value={formikProps.values.heroFeaturesHindi}
                      onChange={formikProps.handleChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Formik>
  </AdminDashboardTemplateContainer>
);

const AdminCardHeader: SFC<CardHeaderProps> = props => (
  <CardHeader {...props} titleStyle={{ fontSize: 18, fontWeight: 500 }} />
);

const SectionTitle: SFC<{ children: string }> = props => (
  <Typography variant="tableHeadCell" style={{ marginBottom: 16 }}>
    {props.children}
  </Typography>
);
