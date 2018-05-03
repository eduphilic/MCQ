import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import Paper from "material-ui/Paper";
import React from "react";
import { Typography, variants } from ".";

storiesOf("Atoms", module).add(
  "Typography",
  withInfo({ propTablesExclude: [Paper as any] })(() => (
    <Paper style={{ maxWidth: 500, padding: 16, marginLeft: 16 }}>
      {variants.map(variant => (
        <div style={{ margin: "16px" }}>
          <Typography variant={variant}>
            {variant.charAt(0).toUpperCase()}
            {variant.slice(1)}
          </Typography>
        </div>
      ))}
    </Paper>
  )),
);
