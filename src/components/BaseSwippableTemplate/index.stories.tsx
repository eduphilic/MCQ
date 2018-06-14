import { storiesOf } from "@storybook/react";
import { createStore } from "common/utils";
import React, { SFC } from "react";

const paneStore = createStore(
  { selectedPane: 0 },
  {
    onPaneChange: (paneIndex: number) => () => ({
      selectedPane: paneIndex,
    }),
  },
);

import { BaseSwippableTemplate } from ".";

const stories = storiesOf("Components", module);

stories.addDecorator(story => (
  <paneStore.Provider>{story()}</paneStore.Provider>
));

stories.add("BaseSwippableTemplate", () => {
  const paneKeyNodeMap = Array.from({ length: 10 }).map((_item, index) => ({
    key: `node-${index}`,
    node: <div>Needs to be in mobile device simulator. Node {index}</div>,
  }));

  return (
    <div style={{ height: "100vh" }}>
      <paneStore.Consumer>
        {store => (
          <BaseSwippableTemplate
            headerNode={<div>Header Node</div>}
            paneKeyNodeMap={paneKeyNodeMap}
            footerNode={<Buttons />}
            selectedPane={store.selectedPane}
            onPaneChange={store.onPaneChange}
          />
        )}
      </paneStore.Consumer>
    </div>
  );
});

const Buttons: SFC<{}> = () => (
  <paneStore.Consumer>
    {store => (
      <div>
        <button
          disabled={store.selectedPane === 0}
          onClick={() => store.onPaneChange(store.selectedPane - 1)}
        >
          Back
        </button>
        <button
          disabled={store.selectedPane === 9}
          onClick={() => store.onPaneChange(store.selectedPane + 1)}
        >
          Forward
        </button>
      </div>
    )}
  </paneStore.Consumer>
);
