import React, { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { State } from "store";
import { createStoreNullError } from "utils";

import Tab from "@material-ui/core/Tab";
import Tabs, { TabsProps } from "@material-ui/core/Tabs";

import { Typography } from "components/Typography";
import {
  ExamOverviewBluePrint,
  ExamOverviewBluePrintProps,
} from "../ExamOverviewBluePrint";
import { ExamOverviewMarkings } from "../ExamOverviewMarkings";

enum OverviewTab {
  BluePrint = "Blue Print",
  Markings = "Markings",
}

export interface ExamOverviewMobileProps {
  subjects: ExamOverviewBluePrintProps["subjects"];
}

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
    const { subjects } = this.props;
    const { value } = this.state;

    const tabs: [OverviewTab, string, ReactNode][] = [
      [
        OverviewTab.BluePrint,
        "Blue Print",
        <ExamOverviewBluePrint noCard subjects={subjects} />,
      ],
      [OverviewTab.Markings, "Markings", <ExamOverviewMarkings noCard />],
    ];

    return (
      <>
        <Tabs fullWidth value={value} onChange={this.handleTabChange}>
          {tabs.map(([key, label]) => (
            <Tab
              key={key}
              value={key}
              label={
                <Typography style={{ textTransform: "none" }}>
                  {label}
                </Typography>
              }
            />
          ))}
        </Tabs>

        {tabs.find(t => t[0] === value)![2]}
      </>
    );
  }
}

export const ExamOverviewMobileContainer = connect((state: State) => {
  const { examMeta } = state.examTaking;
  if (!examMeta) throw createStoreNullError("examMeta");

  return { subjects: examMeta.subjects };
})(ExamOverviewMobile);
