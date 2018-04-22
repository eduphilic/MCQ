import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AdminDrawer } from ".";

storiesOf("Organisms", module).add(
  "AdminDrawer",
  withInfo()(() => {
    //

    return (
      <Router>
        <AdminDrawer />
      </Router>
    );
  }),
);
