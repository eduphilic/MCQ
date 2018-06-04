import React, { Component } from "react";

import { DashboardCard } from "components/DashboardCard";
import { PageTitleSetter } from "components/PageTitleSetter/PageTitleSetter";
import { SideSheetButtonMenu } from "components/SideSheetButtonMenu";
import { SideSheetFieldGroup } from "components/SideSheetFieldGroup";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export class AdminQuestionManagerReportedQuestions extends Component {
  render() {
    return (
      <AdminDashboardTemplateContainer
        sideSheetContents={
          <SideSheetFieldGroup fieldGroupTitle="Questions">
            <SideSheetButtonMenu
              options={[
                "All Questions",
                "Reported Questions",
                "Reported Answers",
              ]}
            />
          </SideSheetFieldGroup>
        }
      >
        <PageTitleSetter title="Question Manager > Reported Questions" />

        <DashboardCard
          title="Reported Questions"
          columnLabels={["Question", "Incorrect Answer", "Incorrect Question"]}
          columnTypes={["dual-line", "single-line", "single-line"]}
          items={Array.from({ length: 20 }, (_item, index) => ({
            key: index.toString(),
            columns: [
              {
                primaryText: `${index + 1}. Question Label...`,
                secondaryText: "Date uploaded...",
              },
              {
                primaryText: "2",
              },
              {
                primaryText: "3",
              },
            ],
          }))}
        />
      </AdminDashboardTemplateContainer>
    );
  }
}
