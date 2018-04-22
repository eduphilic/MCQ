import { AdminDashboardPageTitle } from "components/atoms/AdminDashboardPageTitle";
import { createPlaceholderAdminAppBarProps } from "components/organisms/AdminAppBar/createPlaceholderAdminAppBarProps";
import { AdminPanelUsersSummary } from "components/organisms/AdminPanelUsersSummary";
import { createPlaceholderAdminPanelUsersSummaryProps } from "components/organisms/AdminPanelUsersSummary/createPlaceholderAdminPanelUsersSummaryProps";
import { AdminDashboardTemplate } from "components/templates/AdminDashboardTemplate";
import Grid from "material-ui/Grid";
// import Typography from "material-ui/Typography";
import React, { SFC } from "react";

export const AdminDashboard: SFC<{}> = () => {
  const templateProps = {
    adminAppBarProps: createPlaceholderAdminAppBarProps(),
  };

  const usersSummaryProps = createPlaceholderAdminPanelUsersSummaryProps();

  return (
    <AdminDashboardTemplate {...templateProps}>
      <>
        <AdminDashboardPageTitle>
          Hello Admin, Welcome to your Dashboard.
        </AdminDashboardPageTitle>

        <Grid container spacing={24}>
          <Grid item sm={8} xs={12}>
            <AdminPanelUsersSummary {...usersSummaryProps} />
          </Grid>

          <Grid item sm={4} xs={12}>
            <div>right half</div>
          </Grid>
        </Grid>
      </>
    </AdminDashboardTemplate>
  );
};
