import { storiesOf } from "@storybook/react";
import { navigationLinksUser } from "common/structures/navigationLinksUser";
import createBrowserHistory from "history/createBrowserHistory";
import React from "react";
import { Router } from "react-router-dom";

import { DashboardTemplateMobile } from ".";
import { generateTemplateProps } from "../UserTemplate/generateTemplateProps";

const stories = storiesOf("Components", module);

stories.add("DashboardTemplateMobile", () => {
  const { appBarNode } = generateTemplateProps({ showHamburgerButton: false });
  const history = createBrowserHistory();
  history.push("/dashboard");

  return (
    <Router history={history}>
      <DashboardTemplateMobile
        appBarNode={appBarNode}
        links={navigationLinksUser}
      />
    </Router>
  );
});
