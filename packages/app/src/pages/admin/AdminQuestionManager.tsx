import React, { SFC } from "react";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import { Button } from "components/atoms/Button";
import { Typography } from "components/atoms/Typography";
import { DashboardSecondaryToolbar } from "components/molecules/DashboardSecondaryToolbar";

export const AdminQuestionManager: SFC<{}> = () => {
  //

  return (
    <AdminDashboardTemplateContainer titleText="Question Manager">
      {/* Toolbar */}
      <DashboardSecondaryToolbar>
        <DashboardSecondaryToolbar.Spacer />

        <Button color="primary" variant="flat">
          <Typography variant="buttonBold">Add Questions</Typography>
        </Button>
        <Button color="orange" variant="flat">
          <Typography variant="buttonBold">Import Questions</Typography>
        </Button>
        <Button color="orange" variant="flat">
          <Typography>Challenged Questions</Typography>
        </Button>
      </DashboardSecondaryToolbar>

      {/* */}
    </AdminDashboardTemplateContainer>
  );
};
