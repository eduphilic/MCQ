import { storiesOf } from "@storybook/react";
import React from "react";

import { AddIcon } from "@join-uniform/icons";
import { Grid } from "../Grid";
import { Paper, Toolbar } from "../muiComponents";

import { ResponsiveIconTextButton } from "./ResponsiveIconTextButton";

const stories = storiesOf("ResponsiveIconTextButton", module);

stories.add("default", () => (
  <Grid storybookContainer>
    <Grid item xs={12}>
      <Paper>
        <Toolbar>
          <div style={{ flex: 1 }} />

          <ResponsiveIconTextButton
            color="orange"
            iconNode={<AddIcon />}
            tooltipTitle="Add New Entry"
          >
            Entry
          </ResponsiveIconTextButton>
        </Toolbar>
      </Paper>
    </Grid>
  </Grid>
));
