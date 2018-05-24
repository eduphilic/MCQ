import { Formik } from "formik";
import React, { SFC } from "react";

import { DashboardCard } from "components/organisms/DashboardCard";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminIndexManager: SFC<{}> = () => {
  const noop = () => {}; // tslint:disable-line

  const initialValues = {
    cardBackground: null as File | null,
  };

  type Values = typeof initialValues;
  class TypedFormik extends Formik<{}, Values> {}

  return (
    <TypedFormik initialValues={initialValues} onSubmit={noop}>
      {_api => (
        <AdminDashboardTemplateContainer titleText="Index Manager">
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
              additionalActionNode={<div>Upload Field Placeholder</div>}
            />
          ))}
        </AdminDashboardTemplateContainer>
      )}
    </TypedFormik>
  );
};
