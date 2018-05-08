import React, { SFC } from "react";

import Add from "@material-ui/icons/Add";

import { ResponsiveToolbarTypographyButton } from "components/molecules/ResponsiveToolbarTypographyButton";
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

  return (
    <AdminDashboardTemplateContainer
      titleText="Plan Manager"
      actionButtonElements={appBarActionButtons}
    >
      <div>Placeholder</div>
    </AdminDashboardTemplateContainer>
  );
};
