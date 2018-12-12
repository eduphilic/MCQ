import { css } from "@join-uniform/theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import {
  PendingChangesButton,
  PendingChangesButtonProps,
} from "./PendingChangesButton";

const stories = storiesOf("PendingChangesButton", module);

// tslint:disable-next-line:no-empty
const noop = () => {};
// prettier-ignore
const noopHandlers: Pick<PendingChangesButtonProps, "onDiscardButtonClick" | "onPublishButtonClick"> = {
  onDiscardButtonClick: noop,
  onPublishButtonClick: noop,
}

stories.addDecorator(story => (
  <div
    css={css`
      padding: 8px;
    `}
  >
    {story()}
  </div>
));

stories.add("default", () => (
  <PendingChangesButton
    {...noopHandlers}
    hasDiscardableChanges
    hasPublishableChanges
  />
));

stories.add("not publishable", () => (
  <PendingChangesButton
    {...noopHandlers}
    hasDiscardableChanges
    hasPublishableChanges={false}
  />
));

stories.add("no discardable changes", () => (
  <>
    <PendingChangesButton
      {...noopHandlers}
      hasDiscardableChanges={false}
      hasPublishableChanges={false}
    />
    Should render nothing
  </>
));
