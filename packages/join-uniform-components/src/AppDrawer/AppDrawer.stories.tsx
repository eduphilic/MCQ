import { storiesOf } from "@storybook/react";
import React from "react";
import { AppDrawer } from "./AppDrawer";
import {
  AppDrawerContextProvider,
  useAppDrawerContext,
} from "./AppDrawerContext";
import { storiesProps } from "./storiesProps";

const stories = storiesOf("AppDrawer", module);

stories.addDecorator(story => (
  <>
    {story()}
    <ToggleButton />
  </>
));

stories.addDecorator(story => (
  <AppDrawerContextProvider>{story()}</AppDrawerContextProvider>
));

stories.add("default", () => <AppDrawer {...storiesProps} />);

function ToggleButton() {
  const { toggle } = useAppDrawerContext();

  return <button onClick={toggle}>Toggle (mobile)</button>;
}
