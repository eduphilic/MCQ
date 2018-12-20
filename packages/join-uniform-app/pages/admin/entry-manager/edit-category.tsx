import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  LoadingSpinner,
  PendingChangesButton,
  Typography,
} from "@join-uniform/components";
import {
  GetCategoryComponent,
  UpdateCategoryComponent,
} from "@join-uniform/graphql";
import { Formik } from "formik";
import { NextSFC } from "next";
import Router from "next/router";
import React from "react";
import * as yup from "yup";
import { AdminLayoutDashboardContainer } from "~/containers";
import { FormikMuiTextField } from "~/lib/admin";

type Props = {
  categoryId?: string;
};

type FormValues = {
  name: string;
  education: string;
  pricePerPaperRs: number;
};

const pageTitle = "Edit Category";

const AdminEntryManagerEditCategoryPage: NextSFC<Props> = props => {
  const { categoryId } = props;

  if (!categoryId || categoryId.length < 1) {
    return renderNotFoundNode();
  }

  return (
    <UpdateCategoryComponent>
      {updateCategory => (
        <GetCategoryComponent variables={{ id: categoryId }}>
          {getCategoryResult => {
            if (getCategoryResult.loading || getCategoryResult.error) {
              return <LoadingSpinner />;
            }

            const category = getCategoryResult.data!.category;
            if (!category) return renderNotFoundNode();

            return (
              <Formik<FormValues>
                initialValues={{
                  name: category.name,
                  education: category.education,
                  pricePerPaperRs: category.pricePerPaperRs,
                }}
                onSubmit={async values => {
                  await updateCategory({
                    variables: {
                      categoryId: category.id,
                      update: values,
                    },
                  });
                  await getCategoryResult.refetch();
                  await Router.push("/admin/entry-manager");
                }}
                validationSchema={yup.object<FormValues>({
                  name: yup.string().required(),
                  education: yup.string().required(),
                  pricePerPaperRs: yup
                    .number()
                    .integer()
                    .min(1)
                    .required(),
                })}
              >
                {form => (
                  <AdminLayoutDashboardContainer
                    title={pageTitle}
                    appBarButtons={[
                      <PendingChangesButton
                        hasDiscardableChanges={form.dirty}
                        hasPublishableChanges={form.isValid}
                        onDiscardButtonClick={() => form.resetForm()}
                        onPublishButtonClick={() => form.submitForm()}
                      />,
                    ]}
                  >
                    <Grid container contentCenter spacing={16}>
                      <Grid item xs={12}>
                        <Card>
                          <CardHeader title="Category" variant="admin" />
                          <CardContent>
                            <FormikMuiTextField
                              name="name"
                              label="Name"
                              form={form}
                            />
                            <FormikMuiTextField
                              name="education"
                              label="Education"
                              form={form}
                            />
                            <FormikMuiTextField
                              name="pricePerPaperRs"
                              label="Price Per Paper (Rs)"
                              type="number"
                              form={form}
                            />
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </AdminLayoutDashboardContainer>
                )}
              </Formik>
            );
          }}
        </GetCategoryComponent>
      )}
    </UpdateCategoryComponent>
  );

  function renderNotFoundNode() {
    return (
      <AdminLayoutDashboardContainer title={pageTitle}>
        <Grid container contentCenter spacing={16}>
          <Grid item xs={12}>
            <Typography>Specified Category does not exist.</Typography>
          </Grid>
        </Grid>
      </AdminLayoutDashboardContainer>
    );
  }
};

AdminEntryManagerEditCategoryPage.getInitialProps = async ctx => {
  const categoryIdQuery = ctx.query.categoryId;

  return {
    categoryId: Array.isArray(categoryIdQuery)
      ? categoryIdQuery[0]
      : categoryIdQuery,
  };
};

export default AdminEntryManagerEditCategoryPage;

export const test = <AdminEntryManagerEditCategoryPage />;
