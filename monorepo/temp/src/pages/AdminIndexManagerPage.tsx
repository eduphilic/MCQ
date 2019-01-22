import { CardContent } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import { Formik, FormikProps, FormikValues } from "formik";
import gql from "graphql-tag";
import React from "react";
import { Query } from "../api";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ContentCenterWrapper } from "../components/ContentCenterWrapper";
import { ImagePicker } from "../components/ImagePicker";
import { QueryWithLoading } from "../components/QueryWithLoading";
import { CloudinaryProvider, useCloudinary } from "../features/admin";
import { DashboardLayout } from "../layouts/DashboardLayout";

const GET_INDEX_MANAGER_CONFIG = gql`
  query GetIndexManagerConfig {
    logoImageConfig {
      url
    }
  }
`;

type QueryValue = Pick<Query, "logoImageConfig">;

type FormValue = {
  logoImageUrl: QueryValue["logoImageConfig"]["url"];
};

function AdminIndexManagerPage() {
  const cloudinary = useCloudinary();

  return (
    <QueryWithLoading<QueryValue> query={GET_INDEX_MANAGER_CONFIG}>
      {({ data }) => (
        <Formik<FormValue>
          initialValues={{ logoImageUrl: data.logoImageConfig.url }}
          onSubmit={() => {}}
        >
          {form => (
            <DashboardLayout>
              <ContentCenterWrapper>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <Card>
                      <CardContent>
                        <ImagePicker
                          title="Logo"
                          src={form.values.logoImageUrl}
                          onSelectButtonClick={createImageSelectorHandler(
                            form,
                            "logoImageUrl",
                          )}
                          onUploadButtonClick={createImageUploadHandler(
                            "Logos",
                          )}
                        />
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12}>
                    <Card>
                      <CardActions>
                        <Button
                          disabled={!form.dirty}
                          onClick={() => form.resetForm()}
                        >
                          Reset
                        </Button>
                        <Button disabled={!form.dirty}>Submit</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </ContentCenterWrapper>
            </DashboardLayout>
          )}
        </Formik>
      )}
    </QueryWithLoading>
  );

  function createImageSelectorHandler(
    formikProps: FormikProps<FormikValues>,
    formField: keyof FormValue,
  ) {
    if (!cloudinary) return undefined;

    return async () => {
      cloudinary.client.openMediaLibrary(
        await cloudinary.getDefaultMediaLibraryWidgetOptions(),
        {
          insertHandler: data => {
            formikProps.setFieldValue(formField, data.assets[0].secure_url);
          },
        },
      );
    };
  }

  function createImageUploadHandler(folder: string) {
    if (!cloudinary) return undefined;

    return () => {
      cloudinary.client.openUploadWidget({
        ...cloudinary.getDefaultUploadWidgetOptions(),
        folder,
      });
    };
  }
}

export default () => (
  <CloudinaryProvider>
    <AdminIndexManagerPage />
  </CloudinaryProvider>
);
