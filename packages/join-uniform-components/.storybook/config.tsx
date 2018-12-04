import { LightTheme, ThemeBaseline } from "@join-uniform/theme";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { addDecorator, configure } from "@storybook/react";
import { create } from "jss";
import React from "react";
import JssProvider from "react-jss/lib/JssProvider";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point")!,
});

const req = require.context("../src", true, /\.stories\.tsx?$/);

addDecorator(story => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <LightTheme>
      <ThemeBaseline>{story()}</ThemeBaseline>
    </LightTheme>
  </JssProvider>
));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
