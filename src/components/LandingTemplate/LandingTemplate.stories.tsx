import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React, { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { PlaceholderImage } from "components/PlaceholderImage";
import { LandingTemplate } from ".";

const testCardNodes: ReactNode[] = [];
for (let i = 0; i < 3; i += 1) testCardNodes.push(<PlaceholderImage />);

storiesOf("Components", module).add(
  "LandingTemplate",
  withInfo()(() => (
    <Router>
      <LandingTemplate
        heroNode={<PlaceholderImage />}
        testCardNodes={testCardNodes}
        footerNode={<PlaceholderImage />}
      />
    </Router>
  )),
);
