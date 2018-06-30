import React, { Component, ReactElement } from "react";

import Tab from "@material-ui/core/Tab";
import Tabs, { TabsProps } from "@material-ui/core/Tabs";

import { ExamOverviewMarkings } from "components/ExamOverviewMarkings";
import { Typography } from "components/Typography";
import { ExamOverviewBluePrint } from "../../exam-taking/components/ExamOverviewBluePrint";

enum OverviewTab {
  BluePrint = "bluePrint",
  Markings = "markings",
}

const overviewTabComponentMap: Record<OverviewTab, ReactElement<any>> = {
  [OverviewTab.BluePrint]: <ExamOverviewBluePrint noCard />,
  [OverviewTab.Markings]: <ExamOverviewMarkings noCard />,
};

const overviewTabLabelMap: Record<OverviewTab, string> = {
  [OverviewTab.BluePrint]: "Blue Print",
  [OverviewTab.Markings]: "Markings",
};

// tslint:disable-next-line:no-empty-interface
export interface ExamOverviewMobileProps {}

interface ExamOverviewMobileState {
  value: OverviewTab;
}

export class ExamOverviewMobile extends Component<
  ExamOverviewMobileProps,
  ExamOverviewMobileState
> {
  state: ExamOverviewMobileState = {
    value: OverviewTab.BluePrint,
  };

  handleTabChange: TabsProps["onChange"] = (_event, value: OverviewTab) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <Tabs fullWidth value={value} onChange={this.handleTabChange}>
          {keys(overviewTabComponentMap).map(key => (
            <Tab
              key={key}
              value={key}
              label={
                <Typography style={{ textTransform: "none" }}>
                  {overviewTabLabelMap[key]}
                </Typography>
              }
            />
          ))}
        </Tabs>

        {overviewTabComponentMap[value]}
      </>
    );
  }
}

const keys = Object.keys as <T>(o: T) => (Extract<keyof T, string>)[];
