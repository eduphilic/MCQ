import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { createStore } from "./createStore";

let clicks = 0;

storiesOf("Components", module).add(
  "ContextStore",
  withInfo()(() => {
    const store = createStore(
      { title: "Page Title" },
      {
        setTitle: () => () => {
          clicks += 1;

          return {
            title: `${clicks}`,
          };
        },
      },
      "PageTitle",
    );

    return (
      <>
        <store.Provider>
          <store.Consumer>
            {({ title, setTitle }) => <p onClick={setTitle}>{title}</p>}
          </store.Consumer>
        </store.Provider>
      </>
    );
  }),
);
