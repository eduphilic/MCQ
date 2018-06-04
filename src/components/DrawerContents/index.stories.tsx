import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AdminAppDrawerTheme } from "theme";

import { drawerWidth } from "components/ResponsiveDrawerFrame";
import { DrawerContents } from ".";

storiesOf("Components", module).add(
  "DrawerContents",
  withInfo()(() => {
    //

    return (
      <Router>
        <AdminAppDrawerTheme>
          <div style={{ width: drawerWidth, backgroundColor: "#424242" }}>
            <DrawerContents
              links={[
                ["adminLinkDashboard", "/admin/dashboard"],
                ["adminLinkEntryManager", "/admin/entry-manager"],
                ["adminLinkTestManager", "/admin/test-manager"],
                ["adminLinkIndexManager", "/admin/index-manager"],
                ["adminLinkPlanManager", "/admin/plan-manager"],
                ["adminLinkQuestionManager", "/admin/question-manager"],
                ["adminLinkUserManager", "/admin/user-manager"],
                ["adminLinkRevenueManager", "/admin/revenue-manager"],
              ]}
            />
          </div>
        </AdminAppDrawerTheme>
      </Router>
    );
  }),
);
