import React, { SFC } from "react";
import { UserAppDrawerTheme } from "theme";

import withWidth, {
  isWidthDown,
  WithWidthProps,
} from "@material-ui/core/withWidth";

import { DashboardTemplate } from "components/DashboardTemplate";
import { ExamAppBar } from "components/ExamAppBar";
import { ExamDrawerContents } from "components/ExamDrawerContents";
import { ExamTemplateMobile } from "components/ExamTemplateMobile";

// tslint:disable-next-line:no-empty-interface
export interface ExamTemplateProps extends WithWidthProps {}

const ExamTemplate: SFC<ExamTemplateProps> = props => {
  const { children, width } = props;

  const drawerContentsNode = <ExamDrawerContents />;
  const showMobileTemplate = isWidthDown("sm", width);

  return !showMobileTemplate ? (
    <DashboardTemplate
      appBarNode={<ExamAppBar showStartExamButton />}
      drawerContentsNode={drawerContentsNode}
      drawerThemeElement={<UserAppDrawerTheme />}
    >
      {children}
    </DashboardTemplate>
  ) : (
    <ExamTemplateMobile />
  );
};

const ExamTemplateWithWidth = withWidth()(ExamTemplate);
export { ExamTemplateWithWidth as ExamTemplate };
