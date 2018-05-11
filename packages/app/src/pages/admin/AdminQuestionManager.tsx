import React, { SFC } from "react";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import { SideSheetButtonMenu } from "components/molecules/SideSheetButtonMenu";
import { SideSheetFieldGroup } from "components/molecules/SideSheetFieldGroup";
import { DashboardCard } from "components/organisms/DashboardCard";

export const AdminQuestionManager: SFC<{}> = () => {
  // tslint:disable-next-line:no-empty
  const noop = () => {};

  return (
    <AdminDashboardTemplateContainer
      titleText="Question Manager"
      sideSheetContents={
        <>
          <SideSheetFieldGroup fieldGroupTitle="Questions">
            <SideSheetButtonMenu
              options={[
                "All Questions",
                "Single Choice",
                "Multiple Choice",
                "Subjective",
              ]}
              // TODO: Add default value and handle onChange event.
            />
          </SideSheetFieldGroup>

          <SideSheetFieldGroup fieldGroupTitle="Entries">
            <SideSheetButtonMenu
              options={["All Entries", "AirForce", "Army", "Navy"]}
            />
          </SideSheetFieldGroup>

          <SideSheetFieldGroup fieldGroupTitle="Categories">
            <SideSheetButtonMenu
              options={[
                "All Categories",
                "Soldier GD 10th",
                "Soldier Tradesman 10th",
                "Soldier Tradesman 8th",
                "Soldier GD 12th",
              ]}
            />
          </SideSheetFieldGroup>

          <SideSheetFieldGroup fieldGroupTitle="Subjects">
            <SideSheetButtonMenu
              options={[
                "All Subjects",
                "Soldier GD 10th",
                "Soldier Tradesman 10th",
                "Soldier Tradesman 8th",
                "Soldier GD 12th",
              ]}
            />
          </SideSheetFieldGroup>
        </>
      }
    >
      <DashboardCard
        title="Questions"
        columnLabels={["Question", "Upload Date", "Question Type"]}
        columnTypes={["single-line", "single-line", "single-line"]}
        onItemEditClick={noop}
        onRequestDeleteClick={noop}
        items={Array.from({ length: 20 }, (_item, index) => ({
          key: "0",
          columns: [
            { primaryText: `${index + 1}. Question Label...` },
            { primaryText: "Today" },
            { primaryText: "Single Choice" },
          ],
        }))}
      />
    </AdminDashboardTemplateContainer>
  );
};
