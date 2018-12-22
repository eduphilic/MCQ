import {
  Button,
  Card,
  CardContent,
  CardHeader,
  DashboardCard,
  DashboardCardItem,
  DraggableList,
  FormControl,
  Grid,
  IconButton,
  IndexCard,
  Input,
  InputLabel,
  MenuItem,
  PendingChangesButton,
  Popover,
  Select,
  Typography,
} from "@join-uniform/components";
import {
  GetEntriesComponent,
  GetIndexPageConfigAboutImages,
  GetIndexPageConfigComponent,
  GetIndexPageConfigIndexCards,
  GetIndexPageConfigYoutubeVideos,
  LocalizedString,
} from "@join-uniform/graphql";
import { AddIcon } from "@join-uniform/icons";
import { styled } from "@join-uniform/theme";
import { FieldArray, Formik, FormikProps } from "formik";
import React, { MouseEvent, useEffect, useState } from "react";
import { ChromePicker, ColorResult } from "react-color";
import * as yup from "yup";
import { AdminLayoutDashboardContainer } from "~/containers";
import {
  FormikImagePicker,
  FormikImagePickerArrayItem,
  FormikMuiTextField,
  FormikMuiTextFieldArrayItem,
} from "~/lib/admin";
import { createResponsiveImageUrl, withQueryLoadingSpinner } from "~/lib/utils";

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
  indexCards: GetIndexPageConfigIndexCards[];
  youtubeVideos: GetIndexPageConfigYoutubeVideos[];
};

const localizedString = yup.object({
  en: yup.string().required(),
  hi: yup.string(),
});

export default function AdminIndexManagerPage() {
  return withQueryLoadingSpinner(
    GetIndexPageConfigComponent,
    ({ data: { logoConfig, indexPageConfig, indexCards, youtubeVideos } }) =>
      withQueryLoadingSpinner(GetEntriesComponent, ({ data: { entries } }) => (
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
            indexCards,
            youtubeVideos,
          }}
          onSubmit={() => {
            //
          }}
          validationSchema={yup.object<FormValues>({
            logoUrl: yup.string().required(),
            heroBackgroundImageUrl: yup.string().required(),
            heroBackgroundAlpha: yup
              .number()
              .min(0.05)
              .max(0.95)
              .required(),
            heroPrimaryTextEnglish: yup.string().required(),
            heroPrimaryTextHindi: yup.string(),
            heroFeatures: yup.array(localizedString).ensure(),
            aboutTitleEnglish: yup.string().required(),
            aboutTitleHindi: yup.string(),
            aboutTextEnglish: yup.string().required(),
            aboutTextHindi: yup.string(),
            aboutImages: yup
              .array(
                yup.object({
                  imageUrl: yup.string().required(),
                  title: localizedString,
                  text: localizedString,
                }),
              )
              .ensure(),
            indexCards: yup
              .array(
                yup.object({
                  entryId: yup.string().required(),
                  title: yup.string().required(),
                  categories: yup
                    .array(
                      yup.object({
                        categoryId: yup.string().required(),
                        title: yup.string().required(),
                        visible: yup.boolean().required(),
                      }),
                    )
                    .required(),
                  entryLogoUrl: yup.string().required(),
                  colorBlock: yup.string().required(),
                  colorCategoryBackground: yup.string().required(),
                  colorLogoBackground: yup.string().required(),
                  colorTitle: yup.string().required(),
                }),
              )
              .required(),
            youtubeVideos: yup
              .array(
                yup.object({
                  entryId: yup.string().nullable(true),
                  title: localizedString,
                  youtubeUrl: yup.string().required(),
                }),
              )
              .ensure(),
          })}
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
              <Logger form={form} />
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
                {form.values.indexCards.map((indexCard, index) => (
                  <Grid key={indexCard.entryId} item xs={12}>
                    <DashboardCard
                      title={indexCard.title}
                      columnLabels={["Category", "Visibility"]}
                      columnTypes={["single-line", "switch"]}
                      items={indexCard.categories.map(
                        (category, categoryIndex): DashboardCardItem => ({
                          key: category.categoryId,
                          columns: [
                            {
                              primaryText: category.title,
                            },
                            {
                              switchChecked: category.visible,
                              switchAlwaysClickable: true,
                              switchOnChange: checked => {
                                form.setFieldValue(
                                  `indexCards[${index}].categories[${categoryIndex}].visible`,
                                  checked,
                                );
                              },
                            },
                          ],
                        }),
                      )}
                      bottomActionsNode={
                        <Grid container spacing={16}>
                          {[
                            "colorBlock",
                            "colorCategoryBackground",
                            "colorLogoBackground",
                            // "colorTitle",
                          ].map(field => (
                            <Grid key={field} item xs={12} sm={6} md={4}>
                              <ColorPickerButton
                                title={field.slice(5)}
                                // @ts-ignore
                                color={indexCard[field]}
                                onColorChange={color => {
                                  form.setFieldValue(
                                    `indexCards[${index}].${field}`,
                                    color,
                                  );
                                }}
                              />
                            </Grid>
                          ))}
                          <Grid item xs={12}>
                            <IndexCard
                              title={indexCard.title}
                              categories={indexCard.categories
                                .filter(c => c.visible)
                                .map(c => c.title)}
                              entryLogoUrl={createResponsiveImageUrl(
                                indexCard.entryLogoUrl,
                                { w: "128", h: "128", format: "png" },
                              )}
                              colorBlock={indexCard.colorBlock}
                              colorCategoryBackground={
                                indexCard.colorCategoryBackground
                              }
                              colorLogoBackground={
                                indexCard.colorLogoBackground
                              }
                              colorTitle={indexCard.colorTitle}
                            />
                          </Grid>
                        </Grid>
                      }
                    />
                  </Grid>
                ))}

                {/* Our Videos card. */}
                <Grid item xs={12}>
                  <Card>
                    <CardHeader title="Our Videos" variant="admin" />
                    <CardContent>
                      <FieldArray name="youtubeVideos">
                        {arrayHelpers => (
                          <>
                            <Typography variant="subtitle2">
                              Entries
                              <IconButton>
                                <AddIcon
                                  onClick={() => {
                                    const newYouTubeVideo: GetIndexPageConfigYoutubeVideos = {
                                      entryId: null,
                                      title: { en: "" },
                                      youtubeUrl: "",
                                    };
                                    arrayHelpers.push(newYouTubeVideo);
                                  }}
                                />
                              </IconButton>
                            </Typography>
                            <DraggableList
                              itemElements={form.values.youtubeVideos.map(
                                (youtubeVideo, index) => (
                                  <Grid key={index} container spacing={16}>
                                    <Grid item xs={12}>
                                      <FormControl fullWidth>
                                        <InputLabel
                                          shrink
                                          htmlFor={`youtubeVideo-${index}`}
                                        >
                                          Entry
                                        </InputLabel>
                                        <Select
                                          value={youtubeVideo.entryId || ""}
                                          onChange={e => {
                                            const value: string | null =
                                              e.target.value || null;
                                            form.setFieldValue(
                                              `youtubeVideos[${index}].entryId`,
                                              value,
                                            );
                                          }}
                                          input={
                                            <Input
                                              id={`youtubeVideo-${index}`}
                                            />
                                          }
                                          displayEmpty
                                        >
                                          <MenuItem value="">
                                            <em>Unassigned</em>
                                          </MenuItem>
                                          {entries.map(entry => (
                                            <MenuItem
                                              key={entry.id}
                                              value={entry.id}
                                            >
                                              {entry.name}
                                            </MenuItem>
                                          ))}
                                        </Select>
                                      </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <FormikMuiTextFieldArrayItem
                                        arrayName="youtubeVideos"
                                        arrayIndex={index}
                                        arrayItemSubpath=".youtubeUrl"
                                        label="Insert YouTube Url"
                                        form={form}
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                      <FormikMuiTextFieldArrayItem
                                        arrayName="youtubeVideos"
                                        arrayIndex={index}
                                        arrayItemSubpath=".title.en"
                                        label="Title (English)"
                                        form={form}
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                      <FormikMuiTextFieldArrayItem
                                        arrayName="youtubeVideos"
                                        arrayIndex={index}
                                        arrayItemSubpath=".title.hi"
                                        label="Title (Hindi)"
                                        form={form}
                                      />
                                    </Grid>
                                  </Grid>
                                ),
                              )}
                              onRemoveButtonClick={index =>
                                arrayHelpers.remove(index)
                              }
                              onSortEnd={({ oldIndex, newIndex }) =>
                                arrayHelpers.move(oldIndex, newIndex)
                              }
                            />
                          </>
                        )}
                      </FieldArray>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </AdminLayoutDashboardContainer>
          )}
        </Formik>
      )),
  );
}

type ColorPickerButtonProps = {
  title: string;
  color: string;
  onColorChange: (color: string) => void;
};

function ColorPickerButton(props: ColorPickerButtonProps) {
  const { title, color: initialColor, onColorChange } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [color, setColor] = useState(initialColor);

  useEffect(
    () => {
      setColor(initialColor);
    },
    [initialColor],
  );

  return (
    <>
      <Button fullWidth onClick={handleClick}>
        {title}&nbsp;
        <ColorPickerPreview color={color} />
      </Button>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <ChromePicker color={color} onChange={handleColorChange} />
      </Popover>
    </>
  );

  function handleClick(event: MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
    if (initialColor !== color) onColorChange(color);
  }

  function handleColorChange(newColor: ColorResult) {
    setColor(newColor.hex);
  }
}

const ColorPickerPreview = styled(
  (props: { className?: string; color: string }) => (
    <span
      className={props.className}
      style={{ backgroundColor: props.color }}
    />
  ),
)`
  display: block;
  width: 14px;
  height: 14px;
  border: 1px solid #000;
`;

function Logger(props: { form: FormikProps<FormValues> }) {
  const { form } = props;
  if (form.isValid || !form.dirty || form.isValidating) return null;

  // tslint:disable-next-line:no-console
  console.clear();

  logObject("isValid", form.isValid);
  logObject("Error:", form.error);
  logObject("Errors:", form.errors);
  logObject("Values:", form.values);
  return null;

  function logObject(label: string, obj: any) {
    /* tslint:disable-next-line:no-console */
    console.log(label, obj);
  }
}
