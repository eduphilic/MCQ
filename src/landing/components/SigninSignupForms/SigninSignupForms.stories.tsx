import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { SigninSignupForms } from "./SigninSignupForms";

storiesOf("Landing", module).add(
  "SigninSignupForms",
  withInfo({ propTablesExclude: [BrowserRouter as any] })(() => (
    <div style={{ padding: 16, backgroundColor: "#eee" }}>
      <div style={{ width: 330 }}>
        <BrowserRouter>
          <SigninSignupForms />
        </BrowserRouter>
      </div>
    </div>
  )),
);
