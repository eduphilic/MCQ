import {
  Card,
  CardContent,
  CardHeader,
  DashboardCard,
  DashboardCardItem,
  DraggableList,
  Grid,
  IconButton,
  PendingChangesButton,
  Typography,
} from "@join-uniform/components";
import {
  GetIndexPageConfigAboutImages,
  GetIndexPageConfigComponent,
  LocalizedString,
} from "@join-uniform/graphql";
import { AddIcon } from "@join-uniform/icons";
import { FieldArray, Formik } from "formik";
import React from "react";
import { AdminLayoutDashboardContainer } from "~/containers";
import {
  FormikImagePicker,
  FormikImagePickerArrayItem,
  FormikMuiTextField,
  FormikMuiTextFieldArrayItem,
} from "~/lib/admin";
import { withQueryLoadingSpinner } from "~/lib/utils";

type FormValues = {
  logoUrl: string;
  heroBackgroundImageUrl: string;
  heroBackgroundAlpha: number;
  heroPrimaryTextEnglish: string;
  heroPrimaryTextHindi?: string;
  heroFeatures: LocalizedString[];
  aboutTitleEnglish: string;
  aboutTitleHindi?: string;
  aboutTextEnglish: string;
  aboutTextHindi?: string;
  aboutImages: GetIndexPageConfigAboutImages[];
};

export default function AdminIndexManagerPage() {
  return withQueryLoadingSpinner(
    GetIndexPageConfigComponent,
    ({ data: { logoConfig, indexPageConfig, indexCards } }) => (
      <Formik<FormValues>
        initialValues={{
          logoUrl: logoConfig.url,
          heroBackgroundImageUrl: indexPageConfig.heroBackgroundImageUrl,
          heroBackgroundAlpha: indexPageConfig.heroBackgroundAlpha,
          heroPrimaryTextEnglish: indexPageConfig.heroPrimaryText.en,
          heroPrimaryTextHindi: indexPageConfig.heroPrimaryText.hi,
          heroFeatures: indexPageConfig.heroFeatures,
          aboutTitleEnglish: indexPageConfig.aboutTitle.en,
          aboutTitleHindi: indexPageConfig.aboutText.hi,
          aboutTextEnglish: indexPageConfig.aboutText.en,
          aboutTextHindi: indexPageConfig.aboutText.hi,
          aboutImages: indexPageConfig.aboutImages,
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
                hasDiscardableChanges={true} // form.dirty}
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
                  <CardHeader title="Site Logo" variant="admin" />
                  <CardContent>
                    <FormikImagePicker
                      name="logoUrl"
                      folder="logo"
                      form={form}
                    />
                  </CardContent>
                </Card>
              </Grid>

              {/* Hero card. */}
              <Grid item xs={12}>
                <Card>
                  <CardHeader title="Hero" variant="admin" />

                  {/* Hero Background section. */}
                  <CardContent>
                    <Typography variant="subtitle2" paragraph>
                      Hero Background
                    </Typography>
                    <FormikImagePicker
                      name="heroBackgroundImageUrl"
                      folder="hero"
                      form={form}
                    />
                    <FormikMuiTextField
                      name="heroBackgroundAlpha"
                      label="Background Image Alpha (0.05 - 0.95)"
                      helperText="Controls the transparency of the background image."
                      inputProps={{ step: "0.05", min: "0.05", max: ".95" }}
                      type="number"
                      form={form}
                    />
                  </CardContent>

                  {/* Hero Text section. */}
                  <CardContent>
                    <Typography variant="subtitle2" paragraph>
                      Hero Text
                    </Typography>
                    <Grid container spacing={16}>
                      <Grid item xs={12} md={6}>
                        <FormikMuiTextField
                          name="heroPrimaryTextEnglish"
                          label="Hero Primary Text (English)"
                          form={form}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormikMuiTextField
                          name="heroPrimaryTextHindi"
                          label="Hero Primary Text (Hindi)"
                          form={form}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>

                  {/* Hero Features section. */}
                  <CardContent>
                    <FieldArray name="heroFeatures">
                      {arrayHelpers => (
                        <>
                          <Typography variant="subtitle2">
                            Hero Features
                            <IconButton>
                              <AddIcon
                                onClick={() =>
                                  // tslint:disable-next-line:no-object-literal-type-assertion
                                  arrayHelpers.push({
                                    en: "",
                                  } as LocalizedString)
                                }
                              />
                            </IconButton>
                          </Typography>
                          <DraggableList
                            itemElements={form.values.heroFeatures.map(
                              (_heroFeature, index) => (
                                <Grid key={index} container spacing={16}>
                                  <Grid item xs={12} md={6}>
                                    <FormikMuiTextFieldArrayItem
                                      arrayName="heroFeatures"
                                      arrayIndex={index}
                                      arrayItemSubpath=".en"
                                      label="Hero Feature (English)"
                                      form={form}
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    <FormikMuiTextFieldArrayItem
                                      arrayName="heroFeatures"
                                      arrayIndex={index}
                                      arrayItemSubpath=".hi"
                                      label="Hero Feature (Hindi)"
                                      form={form}
                                    />
                                  </Grid>
                                </Grid>
                              ),
                            )}
                            onSortEnd={({ oldIndex, newIndex }) =>
                              arrayHelpers.move(oldIndex, newIndex)
                            }
                            onRemoveButtonClick={index =>
                              arrayHelpers.remove(index)
                            }
                          />
                        </>
                      )}
                    </FieldArray>
                  </CardContent>
                </Card>
              </Grid>

              {/* About Join Uniform card. */}
              <Grid item xs={12}>
                <Card>
                  <CardHeader title="About Join Uniform" variant="admin" />

                  {/* Title section. */}
                  <CardContent>
                    <Typography variant="subtitle2">Title</Typography>
                    <Grid container spacing={16}>
                      <Grid item xs={12} md={6}>
                        <FormikMuiTextField
                          name="aboutTitleEnglish"
                          label="Title (English)"
                          form={form}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormikMuiTextField
                          name="aboutTitleHindi"
                          label="Title (Hindi)"
                          form={form}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormikMuiTextField
                          name="aboutTextEnglish"
                          label="Text (English)"
                          form={form}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormikMuiTextField
                          name="aboutTextHindi"
                          label="Text (Hindi)"
                          form={form}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>

                  {/* Images section. */}
                  <CardContent>
                    <FieldArray name="aboutImages">
                      {arrayHelpers => (
                        <>
                          <Typography variant="subtitle2">
                            Images
                            <IconButton>
                              <AddIcon
                                onClick={() =>
                                  arrayHelpers.push(
                                    // tslint:disable-next-line:no-object-literal-type-assertion
                                    {
                                      imageUrl: "",
                                      text: { en: "" },
                                      title: { en: "" },
                                    } as GetIndexPageConfigAboutImages,
                                  )
                                }
                              />
                            </IconButton>
                          </Typography>
                          <DraggableList
                            itemElements={form.values.aboutImages.map(
                              (_aboutImage, index) => (
                                <Grid key={index} container spacing={16}>
                                  <Grid item xs={12}>
                                    <FormikImagePickerArrayItem
                                      arrayName="aboutImages"
                                      arrayIndex={index}
                                      arrayItemSubpath=".imageUrl"
                                      folder="about-images"
                                      form={form}
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    <FormikMuiTextFieldArrayItem
                                      arrayName="aboutImages"
                                      arrayIndex={index}
                                      arrayItemSubpath=".title.en"
                                      label="Title (English)"
                                      form={form}
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    <FormikMuiTextFieldArrayItem
                                      arrayName="aboutImages"
                                      arrayIndex={index}
                                      arrayItemSubpath=".title.hi"
                                      label="Title (Hindi)"
                                      form={form}
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    <FormikMuiTextFieldArrayItem
                                      arrayName="aboutImages"
                                      arrayIndex={index}
                                      arrayItemSubpath=".text.en"
                                      label="Text (English)"
                                      form={form}
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    <FormikMuiTextFieldArrayItem
                                      arrayName="aboutImages"
                                      arrayIndex={index}
                                      arrayItemSubpath=".text.hi"
                                      label="Text (Hindi)"
                                      form={form}
                                    />
                                  </Grid>
                                </Grid>
                              ),
                            )}
                            onSortEnd={({ oldIndex, newIndex }) =>
                              arrayHelpers.move(oldIndex, newIndex)
                            }
                            onRemoveButtonClick={index =>
                              arrayHelpers.remove(index)
                            }
                          />
                        </>
                      )}
                    </FieldArray>
                  </CardContent>
                </Card>
              </Grid>

              {/* Index Cards. */}
              {indexCards.map(indexCard => (
                <Grid key={indexCard.entryId} item xs={12}>
                  <DashboardCard
                    title={indexCard.title}
                    columnLabels={["Category", "Visibility"]}
                    columnTypes={["single-line", "switch"]}
                    items={indexCard.categories.map(
                      (category): DashboardCardItem => ({
                        key: category.categoryId,
                        columns: [
                          {
                            primaryText: category.title,
                          },
                          {
                            switchChecked: category.visible,
                            switchAlwaysClickable: true,
                          },
                        ],
                      }),
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </AdminLayoutDashboardContainer>
        )}
      </Formik>
    ),
  );
}
