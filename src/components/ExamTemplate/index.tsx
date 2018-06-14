import React, { SFC } from "react";
import { UserAppDrawerTheme } from "theme";

import { DashboardTemplate } from "components/DashboardTemplate";
import { ExamDrawerContents } from "components/ExamDrawerContents";

// tslint:disable-next-line:no-empty-interface
export interface ExamTemplateProps {}

export const ExamTemplate: SFC<ExamTemplateProps> = props => {
  const {} = props;

  const drawerContentsNode = <ExamDrawerContents />;

  return (
    <DashboardTemplate
      appBarNode={<div>Placeholder</div>}
      drawerContentsNode={drawerContentsNode}
      drawerThemeElement={<UserAppDrawerTheme />}
    >
      <div>Placeholder</div>
    </DashboardTemplate>
  );
};
