import React, { SFC } from "react";
import { Prompt } from "react-router-dom";
import { UserAppDrawerTheme } from "theme";

import withWidth, {
  isWidthDown,
  WithWidthProps,
} from "@material-ui/core/withWidth";

import { DashboardTemplate } from "components/DashboardTemplate";
import {
  ExamTemplateMobile,
  ExamTemplateMobileProps,
} from "components/ExamTemplateMobile";

import { ExamNavigationStorePlaceholderConsumer } from "../../ExamNavigationStorePlaceholder";
import { ExamAppBar } from "../ExamAppBar";
import { ExamBottomNavFrame } from "../ExamBottomNavFrame";
import { ExamDrawerContents } from "../ExamDrawerContents";

// tslint:disable-next-line:no-empty-interface
export interface ExamTemplateProps
  extends WithWidthProps,
    ExamTemplateMobileProps {}

const ExamTemplate: SFC<ExamTemplateProps> = props => {
  const { children, width, staticView, paneKeyNodeMap } = props;

  const drawerContentsNode = <ExamDrawerContents />;
  const showMobileTemplate = isWidthDown("sm", width);

  return (
    <ExamNavigationStorePlaceholderConsumer>
      {store => {
        const examAppBarProps: ExamTemplateMobileProps = {
          showStartExamButton: store.showOverviewPage,
          onStartExamButtonClick: store.startExam,
          paneKeyNodeMap,
        };

        const pageContentsWrapperComponent =
          store.showOverviewPage || store.showSubmissionSummaryPage
            ? undefined
            : ExamBottomNavFrame;

        return (
          <>
            <Prompt message="You have an exam in progress, are you sure you want to leave?" />

            {!showMobileTemplate ? (
              <DashboardTemplate
                appBarNode={<ExamAppBar {...examAppBarProps} />}
                drawerContentsNode={drawerContentsNode}
                drawerThemeElement={<UserAppDrawerTheme />}
                pageContentsWrapperComponent={pageContentsWrapperComponent}
                backgroundColor={"#fff"}
              >
                {children}
              </DashboardTemplate>
            ) : (
              <ExamTemplateMobile
                staticView={staticView}
                {...examAppBarProps}
              />
            )}
          </>
        );
      }}
    </ExamNavigationStorePlaceholderConsumer>
  );
};

const ExamTemplateWithWidth = withWidth()(ExamTemplate);
export { ExamTemplateWithWidth as ExamTemplate };
