import React, { SFC } from "react";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import { DashboardSecondaryToolbar } from "components/molecules/DashboardSecondaryToolbar";
import { SideSheetButtonMenu } from "components/molecules/SideSheetButtonMenu";
import { SideSheetFieldGroup } from "components/molecules/SideSheetFieldGroup";
import { TypographyButton } from "components/molecules/TypographyButton";

export const AdminQuestionManager: SFC<{}> = () => {
  //

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
      {/* Toolbar */}
      <DashboardSecondaryToolbar>
        <DashboardSecondaryToolbar.Spacer />

        <TypographyButton color="primary" variant="flat">
          Add Questions
        </TypographyButton>
        <TypographyButton color="orange" variant="flat">
          Import Questions
        </TypographyButton>
        <TypographyButton
          color="orange"
          variant="flat"
          typographyVariant="body"
        >
          Challenged Questions
        </TypographyButton>
      </DashboardSecondaryToolbar>
      {/* */}
    </AdminDashboardTemplateContainer>
  );
};
