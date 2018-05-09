import React, { SFC } from "react";

import Add from "@material-ui/icons/Add";

import { ResponsiveToolbarTypographyButton } from "components/molecules/ResponsiveToolbarTypographyButton";
import { DashboardCard } from "components/organisms/DashboardCard";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminPlanManager: SFC<{}> = () => {
  const appBarActionButtons = [
    <ResponsiveToolbarTypographyButton
      iconNode={<Add />}
      tooltipTitle="Add New Plan"
      color="orange"
    >
      Plan
    </ResponsiveToolbarTypographyButton>,
  ];

  const noop = () => {}; // tslint:disable-line

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
