import { action } from "@storybook/addon-actions";
import { number, selectV2 } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import Paper from "material-ui/Paper";

import { DashboardEntryCard } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import {
  DashboardEntryCardToolbar,
  DashboardEntryCardToolbarProps,
} from "./DashboardEntryCardToolbar";

const stories = storiesOf("Organisms", module);

stories.addDecorator(story => (
  <ContentCenterWrapper style={{ marginTop: 24 }}>
    <Paper>{story()}</Paper>
  </ContentCenterWrapper>
));

stories.add("DashboardEntryCard", () => {
  //

  return <DashboardEntryCard>Placeholder</DashboardEntryCard>;
});

stories.add("DashboardEntryCard - Toolbar", () => (
  <DashboardEntryCardToolbar
    entryTitle="Army"
    mode={
      selectV2(
        "Toolbar Mode",
        ["display", "edit", "deletion"],
        "display",
      ) as DashboardEntryCardToolbarProps["mode"]
    }
    selectedCount={number("Toolbar Selected Count", 0, {
      max: 10,
      min: 0,
      range: false,
      step: 1,
    })}
    onEnterDeletionModeClick={action("onEnterDeletionModeClick")}
    onEnterEditModeClick={action("onEnterEditModeClick")}
    onDeleteSelectedClick={action("onDeleteSelectedClick")}
    onExitModeClick={action("onExitModeClick")}
  />
));
