import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthenticationForm } from "./AuthenticationForm";

storiesOf("Session", module).add(
  "AuthenticationForm",
  withInfo({
    propTablesExclude: [BrowserRouter as any],
  })(() => (
    <BrowserRouter>
      <div style={{ padding: 16, backgroundColor: "#eee" }}>
        <div style={{ width: 350 }}>
          <AuthenticationForm
            title="Login"
            fields={[
              {
                description: "Mobile number",
                name: "username",
                placeholder: "Enter Mobile number",
                type: "tel",
              },
              {
                description: "Password",
                name: "password",
                placeholder: "Enter Password",
                type: "password",
              },
            ]}
            onSubmit={action("onSubmit")}
            secondaryAction={{ href: "#", label: "Forgot Password?" }}
            disabled={boolean("Disabled", false)}
          />
        </div>
      </div>
    </BrowserRouter>
  )),
);
