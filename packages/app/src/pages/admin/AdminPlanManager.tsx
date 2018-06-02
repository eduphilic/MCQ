import React, { SFC } from "react";

import Add from "@material-ui/icons/Add";

import { ResponsiveToolbarTypographyButton } from "components/molecules/ResponsiveToolbarTypographyButton";
import { DashboardCard } from "components/organisms/DashboardCard";
import {
  DashboardFormDialog,
  DashboardFormDialogFieldConfigs,
} from "components/organisms/DashboardFormDialog";
import { PageTitleSetter } from "../../components/PageTitleSetter/PageTitleSetter";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminPlanManager: SFC<{}> = () => {
  const noop = () => {}; // tslint:disable-line

  const dialogFields = {
    planName: "",
    numTests: 5,
    planValidityDays: 5,
  };

  const fieldConfigs: DashboardFormDialogFieldConfigs<typeof dialogFields> = {
    planName: {
      inputLabel: "Plan Name",
      inputType: "text",
      placeholder: "Enter plan name here...",
    },
    numTests: {
      inputLabel: "Number of test papers",
      inputType: "number",
    },
    planValidityDays: {
      inputLabel: "Plan Validity",
      inputType: "number",
      placeholder: "Enter in number of days",
    },
  };

  const appBarActionButtons = [
    <DashboardFormDialog
      title="Create a New Plan"
      fieldConfigs={fieldConfigs}
      initialValues={dialogFields}
      onSubmit={noop}
    >
      <ResponsiveToolbarTypographyButton
        iconNode={<Add />}
        tooltipTitle="Add New Plan"
        color="orange"
      >
        Plan
      </ResponsiveToolbarTypographyButton>
    </DashboardFormDialog>,
  ];

  return (
    <AdminDashboardTemplateContainer actionButtonElements={appBarActionButtons}>
      <PageTitleSetter title="Plan Manager" />

      {["Plans"].map(title => (
        <DashboardCard
          key={title}
          title={title}
          columnLabels={["Plan", "Availability"]}
          columnTypes={["single-line", "switch"]}
          onItemEditClick={noop}
          onRequestDeleteClick={noop}
          items={[
            {
              key: "0",
              columns: [
                { primaryText: "5 Exam Plan" },
                {
                  switchChecked: false,
                  switchTooltipTitle: "Toggle Availability",
                },
              ],
            },
            {
              key: "1",
              columns: [
                { primaryText: "10 Exam Plan" },
                {
                  switchChecked: true,
                  switchTooltipTitle: "Toggle Availability",
                },
              ],
            },
            {
              key: "2",
              columns: [
                { primaryText: "15 Exam Plan" },
                {
                  switchChecked: false,
                  switchTooltipTitle: "Toggle Availability",
                },
              ],
            },
          ]}
        />
      ))}
    </AdminDashboardTemplateContainer>
  );
};
