import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import Typography from "material-ui/Typography";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AdminDashboardTemplate, AdminDashboardTemplateProps } from ".";
import { createPlaceholderAdminAppBarProps } from "../../organisms/AdminAppBar/createPlaceholderAdminAppBarProps";

storiesOf("Templates", module).add(
  "AdminDashboardTemplate",
  withInfo({ inline: false })(() => {
    const props: AdminDashboardTemplateProps = {
      adminAppBarProps: createPlaceholderAdminAppBarProps(),
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
