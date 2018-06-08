import { storiesOf } from "@storybook/react";
import createBrowserHistory from "history/createBrowserHistory";
import React from "react";
import { Router } from "react-router-dom";

import { DashboardTemplateMobile, DashboardTemplateMobileProps } from ".";
import { generateTemplateProps } from "../UserTemplate/generateTemplateProps";

const stories = storiesOf("Components", module);

const history = createBrowserHistory();
history.push("/dashboard");

stories.add("DashboardTemplateMobile", () => {
  const navigationLinkComponentMap: DashboardTemplateMobileProps["navigationLinkComponentMap"] = {
    "/dashboard": () => <div>Page Contents 1</div>,
    "/exam-pack": () => <div>Page Contents 2</div>,
    "/membership": () => <div>Page Contents 3</div>,
    "/settings": () => <div>Page Contents 4</div>,
  };

  const { appBarNode, navigationLinks } = generateTemplateProps({
    showHamburgerButton: false,
  });

  return (
    <Router history={history}>
      <DashboardTemplateMobile
        appBarNode={appBarNode}
        navigationLinks={navigationLinks}
        navigationLinkComponentMap={navigationLinkComponentMap}
      />
    </Router>
  );
});
