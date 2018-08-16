import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { formik } from "components/storybook/StorybookFormikAddon";
import { TypographyButton } from "components/TypographyButton";
import { ExamAnswerSelect } from "./ExamAnswerSelect";

const initialValues = { selectedAnswerIndex: null as number | null };
type Values = typeof initialValues;

storiesOf("Exam Taking", module)
  .addParameters({ formik: { initialValues } })
  .add("ExamAnswerSelect", () => {
    const answerLabels = ["Lat", "Vimana", "Gopura", "Shikhara"];

    const formikBag = formik<Values>();
    const selectedAnswerIndex = formikBag.values.selectedAnswerIndex;
    const onChangeAnswerIndex = (answerIndex: number | null) =>
      formikBag.setFieldValue("selectedAnswerIndex", answerIndex);

    return (
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
    );
  });
