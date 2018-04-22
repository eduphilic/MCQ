import { createPlaceholderAdminAppBarProps } from "components/organisms/AdminAppBar/createPlaceholderAdminAppBarProps";
import { AdminPanelUsersSummary } from "components/organisms/AdminPanelUsersSummary";
import { createPlaceholderAdminPanelUsersSummaryProps } from "components/organisms/AdminPanelUsersSummary/createPlaceholderAdminPanelUsersSummaryProps";
import { AdminDashboardTemplate } from "components/templates/AdminDashboardTemplate";
import React, { SFC } from "react";

export const AdminDashboard: SFC<{}> = () => {
  const templateProps = {
    adminAppBarProps: createPlaceholderAdminAppBarProps(),
  };

  const usersSummaryProps = createPlaceholderAdminPanelUsersSummaryProps();

  return (
    <AdminDashboardTemplate {...templateProps}>
      <AdminPanelUsersSummary {...usersSummaryProps} />
    </AdminDashboardTemplate>
  );
};
