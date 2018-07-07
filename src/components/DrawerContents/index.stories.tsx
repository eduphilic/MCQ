import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { navigationLinksAdmin } from "common/structures/navigationLinksAdmin";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { AdminAppDrawerTheme } from "theme";

import { drawerWidth } from "css";
import { DrawerContents } from ".";

storiesOf("Components", module).add(
  "DrawerContents",
  withInfo()(() => {
    //

    return (
      <MemoryRouter initialEntries={["/admin/dashboard"]}>
        <AdminAppDrawerTheme>
          <div style={{ width: drawerWidth, backgroundColor: "#424242" }}>
            <DrawerContents links={navigationLinksAdmin} />
          </div>
        </AdminAppDrawerTheme>
      </MemoryRouter>
    );
  }),
);
