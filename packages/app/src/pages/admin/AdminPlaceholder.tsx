import { AdminDashboardPageTitle } from "components/atoms/AdminDashboardPageTitle";
import { AdminAppBarProps } from "components/organisms/AdminAppBar";
import { createPlaceholderAdminAppBarProps } from "components/organisms/AdminAppBar/createPlaceholderAdminAppBarProps";
import { AdminDashboardTemplate } from "components/templates/AdminDashboardTemplate";
import React, { SFC } from "react";

export const AdminPlaceholder: SFC<{}> = () => {
  const adminAppBarProps: AdminAppBarProps = {
    ...createPlaceholderAdminAppBarProps(),
    titleText: "Placeholder",
  };

  return (
    <AdminDashboardTemplate adminAppBarProps={adminAppBarProps}>
      <AdminDashboardPageTitle>Placeholder Page</AdminDashboardPageTitle>
    </AdminDashboardTemplate>
  );
};
