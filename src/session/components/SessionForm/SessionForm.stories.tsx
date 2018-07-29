import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { SessionForm, SessionFormProps } from "./SessionForm";

storiesOf("Session", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .addDecorator(story => (
    <StorybookContentCenterWrapper maxWidthPercent={40}>
      {story()}
    </StorybookContentCenterWrapper>
  ))
  .add("SessionForm", () => {
    const type = select<SessionFormProps["type"]>(
      "Type",
      ["user-sign-in", "user-sign-up", "admin-sign-in"],
      "user-sign-in",
    );

    return <SessionForm type={type} />;
  });
