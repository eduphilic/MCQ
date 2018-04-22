import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import Typography from "material-ui/Typography";
import React from "react";
import { AdminLoginTemplate } from ".";

storiesOf("Templates", module).add(
  "AdminLoginTemplate",
  withInfo()(() => {
    //

    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <AdminLoginTemplate
          heroNode={<Typography>Text Content</Typography>}
          loginForm={<Typography>Login Form</Typography>}
        />
      </div>
    );
  }),
);
