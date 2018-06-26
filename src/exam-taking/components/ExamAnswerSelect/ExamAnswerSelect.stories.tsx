import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { createStore } from "common/utils/contextStore/createStore";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { ExamAnswerSelect } from ".";

const store = createStore(
  {
    selectedAnswerIndex: null as number | null,
  },
  {},
);

storiesOf("Exam Taking", module).add(
  "ExamAnswerSelect",
  withInfo()(() => {
    const answerLabels = ["Lat", "Vimana", "Gopura", "Shikhara"];

    return (
      <store.Provider>
        <store.Consumer>
          {({ selectedAnswerIndex }) => (
            <StorybookContentCenterWrapper>
              <ExamAnswerSelect
                answerLabels={answerLabels}
                selectedAnswerIndex={selectedAnswerIndex}
              />
            </StorybookContentCenterWrapper>
          )}
        </store.Consumer>
      </store.Provider>
    );
  }),
);
