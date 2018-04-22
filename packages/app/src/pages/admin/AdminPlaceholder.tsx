import { AdminDashboardPageTitle } from "components/atoms/AdminDashboardPageTitle";
import { createPlaceholderAdminAppBarProps } from "components/organisms/AdminAppBar/createPlaceholderAdminAppBarProps";
import { AdminDashboardTemplate } from "components/templates/AdminDashboardTemplate";
import React, { SFC } from "react";

export const AdminPlaceholder: SFC<{}> = () => {
  const adminAppBarProps = createPlaceholderAdminAppBarProps();

  return (
    <AdminDashboardTemplate adminAppBarProps={adminAppBarProps}>
      <AdminDashboardPageTitle>Placeholder Page</AdminDashboardPageTitle>
    </AdminDashboardTemplate>
  );
};
