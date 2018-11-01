import {
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import gql from "graphql-tag";
import React from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ContentCenterWrapper } from "../components/ContentCenterWrapper";
import { QueryWithLoading } from "../components/QueryWithLoading";
import { AdminCardHeader } from "../features/admin";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { LocalizedString } from "../models";

function AdminIndexManagerPage() {
  return (
    <DashboardLayout>
      <ContentCenterWrapper>
        <Grid container spacing={16}>
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
  indexPageConfig: {
    heroPrimaryText: LocalizedString;
  };
};

function HeroCard() {
  return (
    <Card>
      <AdminCardHeader title="Hero" />
      <QueryWithLoading<HeroConfig> query={GET_HERO_CONFIG}>
        {({ data }) => (
          <Formik<HeroConfig>
            initialValues={data!}
            onSubmit={() => {
              alert("submit");
            }}
          >
            {form => (
              <form onSubmit={form.handleSubmit}>
                <CardContent>
                  <Typography variant="subtitle2" paragraph>
                    Hero Text
                  </Typography>
                  <Grid container spacing={16}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        name="indexPageConfig.heroPrimaryText.en"
                        label="Hero Primary Text (English)"
                        fullWidth
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.indexPageConfig.heroPrimaryText.en}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    disabled={!form.touched.indexPageConfig}
                    onClick={() => form.resetForm(data!)}
                  >
                    Reset
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    type="submit"
                    disabled={!form.touched.indexPageConfig}
                  >
                    Submit
                  </Button>
                </CardActions>
              </form>
            )}
          </Formik>
        )}
      </QueryWithLoading>
    </Card>
  );
}

export default AdminIndexManagerPage;
