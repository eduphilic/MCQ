import { addDecorator, configure } from "@storybook/react";
import { StrictMode } from "react";
import { BaselineStylesProvider } from "../display";

// Integrate the Material UI and Styled Components libraries, set the default
// theme, apply the baseline CSS styles, and enable React's strict mode.
addDecorator(story => (
  <StrictMode>
    <BaselineStylesProvider>{story()}</BaselineStylesProvider>
  </StrictMode>
));

// Locate all Storybook stories.
const req = require.context("..", true, /\.stories\.tsx$/);

// Load Storybook stories.
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Bootstrap Storybook.
configure(loadStories, module);
