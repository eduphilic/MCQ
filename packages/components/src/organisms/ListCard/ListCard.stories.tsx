import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ListCard } from "./ListCard";
import { ListCardHeaderOptions } from "./ListCardHeaderOptions";

storiesOf("Organisms", module).add(
  "ListCard",
  withInfo()(() => {
    //

    return (
      <ListCard>
        <ListCardHeaderOptions title="Army Entry" />
      </ListCard>
    );
  }),
);
