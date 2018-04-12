// @ts-check
import { configure } from "@storybook/react";

const req = require.context("..", true, /.stories\.tsx$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
