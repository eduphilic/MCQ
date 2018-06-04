import Typography from "@material-ui/core/Typography";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { createPlaceholderDashboardAppBarProps } from "components/DashboardAppBar/createPlaceholderDashboardAppBarProps";
import { AdminDashboardTemplate, AdminDashboardTemplateProps } from ".";

storiesOf("Components", module).add(
  "AdminDashboardTemplate",
  withInfo({ inline: false })(() => {
    const props: AdminDashboardTemplateProps = {
      dashboardAppBarProps: createPlaceholderDashboardAppBarProps(),
    };

    return (
      <Router>
        <AdminDashboardTemplate {...props}>
          <Typography>Example Page Contents</Typography>
        </AdminDashboardTemplate>
      </Router>
    );
  }),
);
