import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { LandingForm } from ".";

storiesOf("Molecules", module).add(
  "LandingForm",
  withInfo()(() => (
    <div style={{ padding: 16, backgroundColor: "#eee" }}>
      <div style={{ width: 330 }}>
        <LandingForm
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
        />
      </div>
    </div>
  )),
);
