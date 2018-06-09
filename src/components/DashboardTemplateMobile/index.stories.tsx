import { storiesOf } from "@storybook/react";
import { navigationLinksUser } from "common/structures/navigationLinksUser";
import createBrowserHistory from "history/createBrowserHistory";
import React from "react";
import { Router } from "react-router-dom";

import { DashboardTemplateMobile } from ".";
import { generateTemplateProps } from "../UserTemplate/generateTemplateProps";

const stories = storiesOf("Components", module);

const history = createBrowserHistory();
history.push("/dashboard");

stories.add("DashboardTemplateMobile", () => {
  const { appBarNode } = generateTemplateProps({ showHamburgerButton: false });

  return (
    <Router history={history}>
      <DashboardTemplateMobile
        appBarNode={appBarNode}
        links={navigationLinksUser}
      />
    </Router>
  );
});
