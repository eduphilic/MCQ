// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import Typography from "@material-ui/core/Typography";
// import { Formik } from "formik";
import gql from "graphql-tag";
import React from "react";
// import { Mutation } from "react-apollo";
import { IndexPageConfig } from "../api";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ContentCenterWrapper } from "../components/ContentCenterWrapper";
import { QueryWithLoading } from "../components/QueryWithLoading";
import {
  AdminCardHeader,
  CloudinaryProvider,
  useCloudinary,
} from "../features/admin";
import { DashboardLayout } from "../layouts/DashboardLayout";

function AdminIndexManagerPage() {
  const cloudinary = useCloudinary();

  return (
    <DashboardLayout>
      <ContentCenterWrapper>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Button
              onClick={() => {
                /* tslint:disable-next-line:no-console */
                console.log("cloudinary: ", cloudinary);
                if (!cloudinary) return;

                cloudinary.client.openUploadWidget(
                  cloudinary.getDefaultUploadWidgetOptions(),
                );
              }}
            >
              Upload
            </Button>
          </Grid>
          <Grid item xs={12}>
            <HeroCard />
          </Grid>
        </Grid>
      </ContentCenterWrapper>
    </DashboardLayout>
  );
}

const GET_HERO_CONFIG = gql`
  query GetHeroConfig {
    indexPageConfig {
      heroPrimaryText
    }
  }
`;

type HeroConfig = {
  indexPageConfig: Pick<IndexPageConfig, "heroPrimaryText">;
};

// const UPDATE_HERO_CONFIG = g.ql`
//   mutation UpdateHeroConfig($indexPageConfig: IndexPageHeroConfigInput!) {
//     updateIndexPageHeroConfig(indexPageConfig: $indexPageConfig) {
//       heroPrimaryText
//     }
//   }
// `;

function HeroCard() {
  return (
    <Card>
      <AdminCardHeader title="Hero" />
      <QueryWithLoading<HeroConfig> query={GET_HERO_CONFIG}>
        {(/*{ data, refetch }*/) => null
        // <Mutation<{}, HeroConfig> mutation={UPDATE_HERO_CONFIG}>
        //   {(updateIndexPageHeroConfig, mutationData) =>
        //     mutationData.loading ? (
        //       "Loading"
        //     ) : (
        //       <Formik<HeroConfig>
        //         enableReinitialize
        //         initialValues={data!}
        //         onSubmit={async (values, form) => {
        //           await updateIndexPageHeroConfig({
        //             variables: {
        //               indexPageConfig: {
        //                 heroPrimaryText:
        //                   values.indexPageConfig.heroPrimaryText,
        //               },
        //             },
        //           });
        //           form.resetForm();
        //           await refetch();
        //         }}
        //       >
        //         {form => (
        //           <form onSubmit={form.handleSubmit}>
        //             <CardContent>
        //               <Typography variant="subtitle2" paragraph>
        //                 Hero Text
        //               </Typography>
        //               <Grid container spacing={16}>
        //                 <Grid item xs={12} md={6}>
        //                   <TextField
        //                     name="indexPageConfig.heroPrimaryText.en"
        //                     label="Hero Primary Text (English)"
        //                     fullWidth
        //                     onChange={form.handleChange}
        //                     onBlur={form.handleBlur}
        //                     value={
        //                       form.values.indexPageConfig.heroPrimaryText.en
        //                     }
        //                   />
        //                 </Grid>
        //               </Grid>
        //             </CardContent>
        //             <CardActions>
        //               <Button
        //                 size="small"
        //                 color="primary"
        //                 disabled={!form.touched.indexPageConfig}
        //                 onClick={() => form.resetForm(data!)}
        //               >
        //                 Reset
        //               </Button>
        //               <Button
        //                 size="small"
        //                 color="primary"
        //                 type="submit"
        //                 disabled={!form.touched.indexPageConfig}
        //               >
        //                 Submit
        //               </Button>
        //             </CardActions>
        //           </form>
        //         )}
        //       </Formik>
        //     )
        //   }
        // </Mutation>
        }
      </QueryWithLoading>
    </Card>
  );
}

export default () => (
  <CloudinaryProvider>
    <AdminIndexManagerPage />
  </CloudinaryProvider>
);
