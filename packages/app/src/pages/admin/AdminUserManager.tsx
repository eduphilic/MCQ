import React, { SFC } from "react";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import { SideSheetButtonMenu } from "components/molecules/SideSheetButtonMenu";
import { SideSheetFieldGroup } from "components/molecules/SideSheetFieldGroup";

export const AdminUserManager: SFC<{}> = () => {
  //

  return (
    <AdminDashboardTemplateContainer
      titleText="User Manager"
      sideSheetContents={
        <>
          <SideSheetFieldGroup fieldGroupTitle="Users">
            <SideSheetButtonMenu
              options={[
                "All Users",
                "Active Users",
                "Inactive Users",
                "Deleted Users",
              ]}
            />
          </SideSheetFieldGroup>

          <SideSheetFieldGroup fieldGroupTitle="Entries">
            <SideSheetButtonMenu options={["All Entries"]} />
          </SideSheetFieldGroup>

          <SideSheetFieldGroup fieldGroupTitle="Plans">
            <SideSheetButtonMenu
              options={[
                "All Plans",
                "Trial Pack",
                "5 Paper Plan",
                "10 Paper Plan",
                "15 Paper Plan",
                "20 Paper Plan",
              ]}
            />
          </SideSheetFieldGroup>
        </>
      }
    >
      <div>Placeholder</div>
    </AdminDashboardTemplateContainer>
  );
};
