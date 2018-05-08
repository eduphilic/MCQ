import React, { SFC } from "react";

import Add from "@material-ui/icons/Add";

import { ResponsiveToolbarTypographyButton } from "components/molecules/ResponsiveToolbarTypographyButton";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminEntryManager: SFC<{}> = () => {
  const appBarActionButtons = [
    <ResponsiveToolbarTypographyButton
      iconNode={<Add />}
      tooltipTitle="Add New Entry"
      color="orange"
    >
      Entry
    </ResponsiveToolbarTypographyButton>,
  ];

  return (
    <AdminDashboardTemplateContainer
      titleText="Entry Manager"
      actionButtonElements={appBarActionButtons}
    >
      <div>Placeholder</div>
    </AdminDashboardTemplateContainer>
  );
};
