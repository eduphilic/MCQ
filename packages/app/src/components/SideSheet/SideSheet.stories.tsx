import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AdminDashboardTemplate } from "components/AdminDashboardTemplate";

storiesOf("Components", module).add(
  "SideSheet",
  withInfo()(() => {
    //

    return (
      <Router>
        <AdminDashboardTemplate
          adminAppBarProps={{
            // tslint:disable-next-line:no-empty
            onLogoutButtonClick: () => {},
          }}
          sideSheetContents={<div>Side Sheet Contents</div>}
        >
          <div>Placeholder</div>
        </AdminDashboardTemplate>
      </Router>
    );
  }),
);
