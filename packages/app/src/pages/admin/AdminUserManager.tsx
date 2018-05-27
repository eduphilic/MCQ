import React, { SFC } from "react";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import { SideSheetButtonMenu } from "components/molecules/SideSheetButtonMenu";
import { SideSheetFieldGroup } from "components/molecules/SideSheetFieldGroup";
import { SideSheetSearchField } from "components/molecules/SideSheetSearchField";
import {
  DashboardCard,
  DashboardCardColumnType,
  DashboardCardItem,
} from "components/organisms/DashboardCard";

// tslint:disable-next-line:import-name
import profileImage from "./admin-user-manager-placeholder-profile-image.png";

export const AdminUserManager: SFC<{}> = () => {
  const cardItems = Array.from({ length: 30 }).map(
    (_item, index) =>
      // tslint:disable-next-line:no-object-literal-type-assertion
      ({
        key: index.toString(),
        columns: [
          {
            imgUrl: profileImage,
            primaryText: "User Name",
            secondaryText: "emailed@gmail.com",
          },
          {
            primaryText: "14 Jan 2018",
          },
          {
            primaryText: "Trial Pack",
            secondaryText: "GD, Sol Tech",
          },
          {
            primaryText: "14 Mar 18",
          },
        ],
      } as DashboardCardItem),
  );
  const cardColumnLabels = ["User", "Joined On", "Plan", "Expires"];
  const cardColumnTypes: DashboardCardColumnType[] = [
    "profile",
    "single-line",
    "dual-line",
    "single-line",
  ];

  return (
    <AdminDashboardTemplateContainer
      titleText="User Manager"
      sideSheetContents={
        <>
          <SideSheetFieldGroup fieldGroupTitle="">
            <SideSheetSearchField
              label="Search Users"
              onSubmit={query => alert(`Initiate search for query: ${query}`)}
            />
          </SideSheetFieldGroup>

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
      <DashboardCard
        items={cardItems}
        columnLabels={cardColumnLabels}
        columnTypes={cardColumnTypes}
      />
    </AdminDashboardTemplateContainer>
  );
};
