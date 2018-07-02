import React, { SFC } from "react";
import { Prompt } from "react-router-dom";
import { UserAppDrawerTheme } from "theme";

import withWidth, {
  isWidthDown,
  WithWidthProps,
} from "@material-ui/core/withWidth";

import { DashboardTemplate } from "components/DashboardTemplate";

import { ExamNavigationStorePlaceholderConsumer } from "../../ExamNavigationStorePlaceholder";
import { ExamAppBar, ExamAppBarProps } from "../ExamAppBar";
import { ExamBottomNavFrame } from "../ExamBottomNavFrame";
import { ExamDrawerContents } from "../ExamDrawerContents";
import {
  ExamTemplateMobile,
  ExamTemplateMobileProps,
} from "../ExamTemplateMobile";

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
        const examAppBarProps: ExamAppBarProps = {
          showStartExamButton: store.showOverviewPage,
          onStartExamButtonClick: store.startExam,
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
                paneKeyNodeMap={paneKeyNodeMap}
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
