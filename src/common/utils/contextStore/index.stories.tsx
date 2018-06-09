import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { createStore } from "./createStore";

let clicks = 0;

const stories = storiesOf("Utils", module);

const store = createStore(
  { title: "Page Title" },
  {
    setTitle: () => () => {
      clicks += 1;

      return {
        title: `Page Title - Clicked ${clicks} Times`,
      };
    },
  },
  "PageTitle",
);
const TitleSetter = store.createSetter("title");

stories.add(
  "ContextStore",
  withInfo()(() => {
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

stories.add("ContextStore - Setter", () => (
  <>
    <store.Provider>
      <TitleSetter title="Page Title From Setter" />

      <store.Consumer>{({ title }) => <p>{title}</p>}</store.Consumer>
    </store.Provider>
  </>
));
