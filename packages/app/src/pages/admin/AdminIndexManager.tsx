import { Formik } from "formik";
import React, { SFC } from "react";

import { Typography } from "components/atoms/Typography";
import { DashboardSecondaryToolbar } from "components/molecules/DashboardSecondaryToolbar";
import { FormikFileUploadField } from "components/molecules/FormikFileUploadField";
import { DashboardCard } from "components/organisms/DashboardCard";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminIndexManager: SFC<{}> = () => {
  const noop = () => {}; // tslint:disable-line

  const initialValues = {
    heroBackgroundImage: null as File | null,
    entryCardBackgroundImage: null as File | null,
  };

  type Values = typeof initialValues;
  class TypedFormik extends Formik<{}, Values> {}

  return (
    <TypedFormik initialValues={initialValues} onSubmit={noop}>
      {api => (
        <AdminDashboardTemplateContainer titleText="Index Manager">
          {/* Hero Background Image Upload Field*/}
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

          {["AirForce", "Army", "Navy"].map(title => (
            <DashboardCard
              key={title}
              title={`${title} Entry`}
              columnLabels={["Category", "Trial Activation", "Card Visibility"]}
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
                    { primaryText: "Soldier Tradesman", secondaryText: "10th" },
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
          ))}
        </AdminDashboardTemplateContainer>
      )}
    </TypedFormik>
  );
};
