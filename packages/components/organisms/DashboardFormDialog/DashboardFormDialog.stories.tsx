import { storiesOf } from "@storybook/react";
import { FormikConfig } from "formik";
import React from "react";

import { DashboardFormDialog } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { TypographyButton } from "../../molecules/TypographyButton";

storiesOf("Organisms", module).add("DashboardFormDialog", () => {
  const formikConfig: FormikConfig<{}> = {
    initialValues: {},
    // tslint:disable-next-line:no-empty
    onSubmit: () => {},
  };

  return (
    <ContentCenterWrapper>
      <DashboardFormDialog formikConfig={formikConfig}>
        <TypographyButton>Open Modal</TypographyButton>
      </DashboardFormDialog>
    </ContentCenterWrapper>
  );
});
