import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { drawerWidth } from "components/ResponsiveDrawerFrame";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AdminAppDrawerTheme } from "theme";
import { AdminDrawerContents } from ".";

storiesOf("Components", module).add(
  "AdminDrawerContents",
  withInfo()(() => {
    //

    return (
      <Router>
        <AdminAppDrawerTheme>
          <div style={{ width: drawerWidth, backgroundColor: "#424242" }}>
            <AdminDrawerContents />
          </div>
        </AdminAppDrawerTheme>
      </Router>
    );
  }),
);
