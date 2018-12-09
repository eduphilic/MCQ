import { storiesOf } from "@storybook/react";
import React from "react";
import { AppDrawer } from "./AppDrawer";
import {
  AppDrawerContextProvider,
  useAppDrawerContext,
} from "./AppDrawerContext";

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

stories.add("default", () => (
  <AppDrawer
    theme="admin"
    logoSrc="https://res.cloudinary.com/https-www-joinuniform-com/image/upload/w_48,h_48/v1543925170/logo/joinUniform.png"
  />
));

function ToggleButton() {
  const { toggle } = useAppDrawerContext();

  return <button onClick={toggle}>Toggle (mobile)</button>;
}
