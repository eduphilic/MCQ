import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { navigationLinksUser } from "common/structures/navigationLinksUser";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { UserTemplate } from ".";

storiesOf("Components", module).add(
  "UserTemplate",
  withInfo({ inline: false, propTablesExclude: [BrowserRouter] })(() => {
    const PageComponent = navigationLinksUser[0].component;

    return (
      <div style={{ height: "100vh" }}>
        <BrowserRouter>
          <UserTemplate links={navigationLinksUser}>
            <PageComponent />
          </UserTemplate>
        </BrowserRouter>
      </div>
    );
  }),
);
