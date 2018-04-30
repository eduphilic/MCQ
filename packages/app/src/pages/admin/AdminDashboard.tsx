import { AdminPanelUsersSummary } from "components/organisms/AdminPanelUsersSummary";
import { createPlaceholderAdminPanelUsersSummaryProps } from "components/organisms/AdminPanelUsersSummary/createPlaceholderAdminPanelUsersSummaryProps";
import React, { SFC } from "react";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminDashboard: SFC<{}> = () => {
  const usersSummaryProps = createPlaceholderAdminPanelUsersSummaryProps();

  return (
    <AdminDashboardTemplateContainer>
      <AdminPanelUsersSummary {...usersSummaryProps} />
    </AdminDashboardTemplateContainer>
  );
};
