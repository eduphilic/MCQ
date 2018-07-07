import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { AppLayout } from "./AppLayout";

const stories = storiesOf("Navigation", module);

stories.addDecorator(story => (
  <MemoryRouter initialEntries={["/dashboard"]}>{story()}</MemoryRouter>
));

stories.add("AppLayout", () => {
  //

  return <AppLayout />;
});
