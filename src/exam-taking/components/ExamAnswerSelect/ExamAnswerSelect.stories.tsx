import { storiesOf } from "@storybook/react";
import { createStore } from "common/utils/contextStore/createStore";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { TypographyButton } from "components/TypographyButton";
import { ExamAnswerSelect } from "./ExamAnswerSelect";

const store = createStore(
  {
    selectedAnswerIndex: null as number | null,
  },
  {
    onChangeAnswerIndex: selectedAnswerIndex => () => ({ selectedAnswerIndex }),
  },
);

storiesOf("Exam Taking", module).add("ExamAnswerSelect", () => {
  const answerLabels = ["Lat", "Vimana", "Gopura", "Shikhara"];

  return (
    <store.Provider>
      <store.Consumer>
        {({ selectedAnswerIndex, onChangeAnswerIndex }) => (
          <StorybookContentCenterWrapper maxWidthPercent={50}>
            <ExamAnswerSelect
              answerLabels={answerLabels}
              selectedAnswerIndex={selectedAnswerIndex}
              onChangeAnswerIndex={onChangeAnswerIndex}
            />

            <TypographyButton
              style={{ marginTop: 16 }}
              onClick={() => onChangeAnswerIndex(null)}
            >
              Clear
            </TypographyButton>
          </StorybookContentCenterWrapper>
        )}
      </store.Consumer>
    </store.Provider>
  );
});
