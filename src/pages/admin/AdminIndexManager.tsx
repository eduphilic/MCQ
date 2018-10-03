import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Add from "@material-ui/icons/Add";
// tslint:disable-next-line:import-name
import DragHandleIcon from "@material-ui/icons/DragHandle";
import Remove from "@material-ui/icons/Remove";
import { CardContent } from "components/CardContent";
import { CardHeader, CardHeaderProps } from "components/CardHeader";
import { DashboardSecondaryToolbar } from "componentsV0/DashboardSecondaryToolbar";
import { FormikFileUploadField } from "componentsV0/FormikFileUploadField";
import { FormikTextField } from "componentsV0/FormikTextField";
import { Typography } from "componentsV0/Typography";
import { Formik, FormikProps } from "formik";
import React, { SFC } from "react";
import {
  arrayMove,
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

type IndexPageSettings = {
  logoImage: File | null;

  heroBackgroundImage: File | null;
  heroBackgroundImageAlpha: number;
  heroTextPrimaryEnglish: string;
  heroTextPrimaryHindi: string;
  heroFeaturesEnglish: string;
  heroFeaturesHindi: string;

  heroAboutTitleEnglish: string;
  heroAboutTitleHindi: string;
  heroAboutTextEnglish: string;
  heroAboutTextHindi: string;

  images: {
    image: File | null;
    titleEnglish: string;
    titleHindi: string;
    textEnglish: string;
    textHindi: string;
  }[];

  // videos: { entryTitle: string; youtubeUrls: string[] }[];
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

  heroAboutTitleEnglish: "What is Join Uniform?",
  heroAboutTitleHindi: "What is Join Uniform?",
  heroAboutTextEnglish:
    "JoinUniform is created to help and prepare those aspirants(both Officer and Jawan entry) who are keen to serve India, in uniform(Army, Airforce, Navy, Assam Rifles, Coast Guard, TA, BSF, ITBP, CRPF, SSB, CISF & RPF.etc.). The platform is bilingual(Hindi & English),user can use it from anywhere, using mobile, laptop or TV. JoinUniform will benefit it's user in terms of quality content, proper attention, actual exam like tests, with explanation and performance analysis.",
  heroAboutTextHindi:
    "JoinUniform is created to help and prepare those aspirants(both Officer and Jawan entry) who are keen to serve India, in uniform(Army, Airforce, Navy, Assam Rifles, Coast Guard, TA, BSF, ITBP, CRPF, SSB, CISF & RPF.etc.). The platform is bilingual(Hindi & English),user can use it from anywhere, using mobile, laptop or TV. JoinUniform will benefit it's user in terms of quality content, proper attention, actual exam like tests, with explanation and performance analysis.",

  images: [
    {
      image: null,
      titleEnglish: "Jawan Entry Mock Tests",
      titleHindi: "Jawan Entry Mock Tests",
      textEnglish:
        "हम जवान, JCO और समकक्ष पद के लिए Army, Airforce, Navy, Assam Rifles, Coast Guard, TA, BSF, ITBP, CRPF, SSB, CISF & RPF में आवेदन करने वाले 8वीं, 10वीं और 12वीं उत्तीर्ण उम्मीदवारों के लिए online Mock(नकली) परीक्षण करवाते हैं।",
      textHindi:
        "हम जवान, JCO और समकक्ष पद के लिए Army, Airforce, Navy, Assam Rifles, Coast Guard, TA, BSF, ITBP, CRPF, SSB, CISF & RPF में आवेदन करने वाले 8वीं, 10वीं और 12वीं उत्तीर्ण उम्मीदवारों के लिए online Mock(नकली) परीक्षण करवाते हैं।",
    },
  ],
};

initialValues.images = Array.from({ length: 2 }, (_, index) => ({
  ...initialValues.images[0],
  titleEnglish: `${initialValues.images[0].titleEnglish} (${index})`,
}));

export const AdminIndexManager: SFC = () => (
  <AdminDashboardTemplateContainer>
    <Formik<IndexPageSettings>
      initialValues={initialValues}
      onSubmit={values => alert(JSON.stringify(values, null, 2))}
      validate={values => {
        /* tslint:disable-next-line:no-console */
        console.log("values", values.images);
      }}
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

          {/* About JoinUniform */}
          <Grid item xs={12}>
            <Card>
              <AdminCardHeader title="About JoinUniform" />
              <CardContent>
                <SectionTitle>Title</SectionTitle>
                <Grid container spacing={16}>
                  <Grid item xs={12} md={6}>
                    <FormikTextField
                      formikApi={formikProps}
                      name="heroAboutTitleEnglish"
                      label="Title (English)"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormikTextField
                      formikApi={formikProps}
                      name="heroAboutTitleHindi"
                      label="Title (Hindi)"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormikTextField
                      formikApi={formikProps}
                      name="heroAboutTextEnglish"
                      label="Text (English)"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormikTextField
                      formikApi={formikProps}
                      name="heroAboutTextHindi"
                      label="Text (Hindi)"
                    />
                  </Grid>
                </Grid>
              </CardContent>

              <CardContent>
                <SectionTitle>
                  Images{" "}
                  <IconButton>
                    <Add />
                  </IconButton>
                </SectionTitle>
                <Images
                  formikApi={formikProps}
                  useDragHandle
                  onSortEnd={({ oldIndex, newIndex }) =>
                    formikProps.setFieldValue(
                      "images",
                      arrayMove(formikProps.values.images, oldIndex, newIndex),
                    )
                  }
                />
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

const SectionTitle: SFC = props => (
  <Typography variant="tableHeadCell" style={{ marginBottom: 16 }}>
    {props.children}
  </Typography>
);

const DragHandle = SortableHandle(() => (
  <IconButton>
    <DragHandleIcon />
  </IconButton>
));

const Images = SortableContainer<{
  formikApi: FormikProps<IndexPageSettings>;
}>(props => (
  <div>
    {props.formikApi.values.images.map((_image, index) => (
      <Image
        key={index}
        formikApi={props.formikApi}
        index={index}
        imageIndex={index}
      />
    ))}
  </div>
));

const Image = SortableElement<{
  formikApi: FormikProps<IndexPageSettings>;
  imageIndex: number;
}>(props => (
  <Grid container spacing={16}>
    <Grid item>
      <Grid container direction="column">
        <DragHandle />
        <IconButton>
          <Remove />
        </IconButton>
      </Grid>
    </Grid>
    <Grid item xs>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <FormikFileUploadField
            formikApi={props.formikApi}
            name={`images[${props.imageIndex}].image` as any}
            label="Image"
            rawValue={props.formikApi.values.images[props.imageIndex].image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormikTextField
            formikApi={props.formikApi}
            name={`images[${props.imageIndex}].titleEnglish` as any}
            rawValue={
              props.formikApi.values.images[props.imageIndex].titleEnglish
            }
            label="Title (English)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormikTextField
            formikApi={props.formikApi}
            name={`images[${props.imageIndex}].titleHindi` as any}
            rawValue={
              props.formikApi.values.images[props.imageIndex].titleHindi
            }
            label="Title (Hindi)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormikTextField
            formikApi={props.formikApi}
            name={`images[${props.imageIndex}].textEnglish` as any}
            rawValue={
              props.formikApi.values.images[props.imageIndex].textEnglish
            }
            label="Text (English)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormikTextField
            formikApi={props.formikApi}
            name={`images[${props.imageIndex}].textHindi` as any}
            rawValue={props.formikApi.values.images[props.imageIndex].textHindi}
            label="Text (Hindi)"
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
));
