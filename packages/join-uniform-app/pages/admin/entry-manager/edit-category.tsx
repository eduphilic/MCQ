import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  LoadingSpinner,
  PendingChangesButton,
} from "@join-uniform/components";
import { useFormik } from "formik";
import { NextContext } from "next";
import Router from "next/router";
import React from "react";
import { adopt } from "react-adopt";
import { MutationFn, QueryResult } from "react-apollo";
import * as yup from "yup";
import { AdminLayoutDashboardContainer } from "~/containers";
import { ErrorMessagePageContents, FormikMuiTextField } from "~/lib/admin";
import {
  EntryManagerCategoryPartsFragment,
  EntryManagerGetCategoryComponent,
  EntryManagerGetCategoryQuery,
  EntryManagerGetCategoryVariables,
  EntryManagerUpdateCategoryComponent,
  EntryManagerUpdateCategoryMutation,
  EntryManagerUpdateCategoryVariables,
} from "~/lib/client";

type FormValues = {
  name: string;
  education: string;
  pricePerPaperRs: number;
};

type RenderProps = {
  updateCategory: MutationFn<
    EntryManagerUpdateCategoryMutation,
    EntryManagerUpdateCategoryVariables
  >;
  getCategoryResult: QueryResult<
    EntryManagerGetCategoryQuery,
    EntryManagerGetCategoryVariables
  >;
};

type InitialProps = {
  categoryId?: string;
};

type Props = Omit<RenderProps, "getCategoryResult"> & {
  category: EntryManagerCategoryPartsFragment;
};

const Composed = adopt<RenderProps, { categoryId: string }>({
  updateCategory: <EntryManagerUpdateCategoryComponent />,
  getCategoryResult: props => (
    <EntryManagerGetCategoryComponent variables={{ id: props.categoryId }}>
      {props.render}
    </EntryManagerGetCategoryComponent>
  ),
});

const pageTitle = "Edit Category";

export default function PageContainer(props: InitialProps) {
  const { categoryId } = props;

  if (!categoryId) {
    return (
      <ErrorMessagePageContents
        pageTitle={pageTitle}
        errorMessage="Expected category id."
      />
    );
  }

  return (
    <Composed categoryId={categoryId}>
      {({ updateCategory, getCategoryResult }) => {
        const { loading, error, data } = getCategoryResult;

        if (loading || error || !data) {
          return <LoadingSpinner />;
        }

        if (!data.category) {
          return (
            <ErrorMessagePageContents
              pageTitle={pageTitle}
              errorMessage="The specified category was not found."
            />
          );
        }

        return (
          <Page category={data.category} updateCategory={updateCategory} />
        );
      }}
    </Composed>
  );
}

PageContainer.getInitialProps = async (ctx: NextContext) => {
  const categoryId = ctx.query.categoryId;

  return {
    categoryId: Array.isArray(categoryId) ? categoryId[0] : categoryId,
  };
};

function Page(props: Props) {
  const { category, updateCategory } = props;

  const form = useFormik<FormValues>({
    initialValues: {
      name: category.name,
      education: category.education,
      pricePerPaperRs: category.pricePerPaperRs,
    },
    onSubmit: async values => {
      await updateCategory({
        variables: {
          categoryId: category.id,
          update: values,
        },
      });
      await Router.push("/admin/entry-manager");
    },
    validationSchema: yup.object<FormValues>({
      name: yup.string().required(),
      education: yup.string().required(),
      pricePerPaperRs: yup
        .number()
        .integer()
        .min(1)
        .required(),
    }),
  });

  return (
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
              <FormikMuiTextField name="name" label="Name" form={form} />
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
  );
}
