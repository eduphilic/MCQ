import { Formik } from "formik";
import React, { SFC } from "react";

import Grid from "@material-ui/core/Grid";
import { DashboardCard } from "componentsV0/DashboardCard";
import { DashboardSecondaryToolbar } from "componentsV0/DashboardSecondaryToolbar";
import { FormikFileUploadField } from "componentsV0/FormikFileUploadField";
import { Typography } from "componentsV0/Typography";

import { AdminDashboardTemplateContainer } from "containers/AdminDashboardTemplateContainer";

export const AdminIndexManager: SFC<{}> = () => {
  const noop = () => {}; // tslint:disable-line

  const initialValues = {
    heroBackgroundImage: null as File | null,
    entryCardBackgroundImage: null as File | null,
  };

  return (
    <Formik<typeof initialValues> initialValues={initialValues} onSubmit={noop}>
      {api => (
        <AdminDashboardTemplateContainer>
          <Grid container spacing={16}>
            {/* Hero Background Image Upload Field*/}
            <Grid item xs={12}>
              <DashboardSecondaryToolbar>
                <DashboardSecondaryToolbar.Content>
                  <Typography variant="cardTitle">
                    Upload Hero background
                  </Typography>
                </DashboardSecondaryToolbar.Content>
                <DashboardSecondaryToolbar.Content
                  style={{ flex: 1, paddingBottom: 12 }}
                >
                  <FormikFileUploadField
                    formikApi={api}
                    name="heroBackgroundImage"
                    acceptedFileTypes="image/*"
                    placeholder="Browse"
                  />
                </DashboardSecondaryToolbar.Content>
              </DashboardSecondaryToolbar>
            </Grid>

            {["AirForce", "Army", "Navy"].map(title => (
              <Grid key={title} item xs={12}>
                <DashboardCard
                  title={`${title} Entry`}
                  columnLabels={[
                    "Category",
                    "Trial Activation",
                    "Card Visibility",
                  ]}
                  columnTypes={["dual-line", "switch", "switch"]}
                  onItemEditClick={noop}
                  items={[
                    {
                      key: "0",
                      columns: [
                        { primaryText: "Soldier GD", secondaryText: "10th" },
                        {
                          switchChecked: false,
                          switchTooltipTitle: "Toggle Trial",
                        },
                        {
                          switchChecked: false,
                          switchTooltipTitle: "Toggle Visibility",
                        },
                      ],
                    },
                    {
                      key: "1",
                      columns: [
                        {
                          primaryText: "Soldier Tradesman",
                          secondaryText: "10th",
                        },
                        {
                          switchChecked: true,
                          switchTooltipTitle: "Toggle Trial",
                        },
                        {
                          switchChecked: true,
                          switchTooltipTitle: "Toggle Visibility",
                        },
                      ],
                    },
                    {
                      key: "2",
                      columns: [
                        {
                          primaryText: "Soldier Tradesman",
                          secondaryText: "8th",
                        },
                        {
                          switchChecked: true,
                          switchTooltipTitle: "Toggle Trial",
                        },
                        {
                          switchChecked: true,
                          switchTooltipTitle: "Toggle Visibility",
                        },
                      ],
                    },
                    {
                      key: "3",
                      columns: [
                        { primaryText: "Soldier GD", secondaryText: "12th" },
                        {
                          switchChecked: true,
                          switchTooltipTitle: "Toggle Trial",
                        },
                        {
                          switchChecked: true,
                          switchTooltipTitle: "Toggle Visibility",
                        },
                      ],
                    },
                  ]}
                  additionalActionNode={
                    <FormikFileUploadField
                      formikApi={api}
                      name="entryCardBackgroundImage"
                      label="Click to upload background image"
                      iconOnly
                    />
                  }
                />
              </Grid>
            ))}
          </Grid>
        </AdminDashboardTemplateContainer>
      )}
    </Formik>
  );
};
