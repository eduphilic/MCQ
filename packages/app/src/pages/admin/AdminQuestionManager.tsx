import React, { SFC } from "react";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import { DashboardSecondaryToolbar } from "components/molecules/DashboardSecondaryToolbar";
import { TypographyButton } from "components/molecules/TypographyButton";

export const AdminQuestionManager: SFC<{}> = () => {
  //

  return (
    <AdminDashboardTemplateContainer titleText="Question Manager">
      {/* Toolbar */}
      <DashboardSecondaryToolbar>
        <DashboardSecondaryToolbar.Spacer />

        <TypographyButton color="primary" variant="flat">
          Add Questions
        </TypographyButton>
        <TypographyButton color="orange" variant="flat">
          Import Questions
        </TypographyButton>
        <TypographyButton
          color="orange"
          variant="flat"
          typographyVariant="body"
        >
          Challenged Questions
        </TypographyButton>
      </DashboardSecondaryToolbar>

      {/* */}
    </AdminDashboardTemplateContainer>
  );
};
