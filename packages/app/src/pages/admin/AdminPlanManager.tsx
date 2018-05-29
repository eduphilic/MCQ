import React, { SFC } from "react";

import Add from "@material-ui/icons/Add";

import { ResponsiveToolbarTypographyButton } from "components/molecules/ResponsiveToolbarTypographyButton";
import { DashboardCard } from "components/organisms/DashboardCard";
import {
  DashboardFormDialog,
  FieldConfigs,
} from "components/organisms/DashboardFormDialog";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminPlanManager: SFC<{}> = () => {
  const noop = () => {}; // tslint:disable-line

  const dialogFields = {
    planName: "",
    isFree: "false",
    numTests: 5,
    planValidityDays: 5,
  };

  const fieldConfigs: FieldConfigs<typeof dialogFields> = {
    planName: {
      inputLabel: "Plan Name",
      inputType: "text",
      placeholder: "Enter plan name here...",
    },
    isFree: {
      inputLabel: "Make this plan free (TODO: Make Checkmark)",
      inputType: "text",
    },
    numTests: {
      inputLabel: "Number of test papers (TODO: Make Number Range)",
      inputType: "text",
    },
    planValidityDays: {
      inputLabel: "Plan Validity (TODO: Make Number Range)",
      inputType: "text",
      placeholder: "Enter in number of days",
    },
  };

  const appBarActionButtons = [
    <DashboardFormDialog
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
    <AdminDashboardTemplateContainer
      titleText="Plan Manager"
      actionButtonElements={appBarActionButtons}
    >
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
