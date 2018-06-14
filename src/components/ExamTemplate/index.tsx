import React, { SFC } from "react";

import { DashboardTemplate } from "components/DashboardTemplate";

// tslint:disable-next-line:no-empty-interface
export interface ExamTemplateProps {}

export const ExamTemplate: SFC<ExamTemplateProps> = props => {
  const {} = props;

  return (
    <DashboardTemplate
      appBarNode={<div>Placeholder</div>}
      drawerContentsNode={<div>Placeholder</div>}
    >
      <div>Placeholder</div>
    </DashboardTemplate>
  );
};
