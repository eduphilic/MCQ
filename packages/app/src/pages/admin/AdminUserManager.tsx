import React, { SFC } from "react";
import styled from "styled";

import Badge from "@material-ui/core/Badge";
import Accessibility from "@material-ui/icons/Accessibility";
import Add from "@material-ui/icons/Add";
import Email from "@material-ui/icons/Email";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

// tslint:disable-next-line:import-name
import profileImage from "./admin-user-manager-placeholder-profile-image.png";

import {
  DashboardCard,
  DashboardCardColumnType,
  DashboardCardItem,
} from "components/DashboardCard";
import { ResponsiveToolbarTypographyButton } from "components/ResponsiveToolbarTypographyButton";
import { SideSheetButtonMenu } from "components/SideSheetButtonMenu";
import { SideSheetFieldGroup } from "components/SideSheetFieldGroup";
import { SideSheetSearchField } from "components/SideSheetSearchField";
import { PageTitleSetter } from "../../components/PageTitleSetter/PageTitleSetter";

export const AdminUserManager: SFC<{}> = () => {
  // tslint:disable-next-line:no-empty
  const noop = () => {};

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
            isNewUser: index < 5,
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
      sideSheetContents={
        <>
          <PageTitleSetter title="User Manager" />

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
      actionButtonElements={[
        <ResponsiveToolbarTypographyButton
          key="add"
          color="orange"
          iconNode={<Add />}
          tooltipTitle="Invite New Users"
        >
          Invite New Users
        </ResponsiveToolbarTypographyButton>,
        <BadgeLeftPositioned key="new" color="error" badgeContent="12">
          <ResponsiveToolbarTypographyButton
            color="blue"
            iconNode={<Accessibility />}
            tooltipTitle="New Registrations"
          >
            New Registrations
          </ResponsiveToolbarTypographyButton>
        </BadgeLeftPositioned>,
      ]}
    >
      <DashboardCard
        title="Users"
        additionalActionNode={
          <ResponsiveToolbarTypographyButton
            style={{ color: "#757575" }}
            dense
            iconNode={<Email />}
            tooltipTitle="Enter Email Selection Mode"
          />
        }
        items={cardItems}
        columnLabels={cardColumnLabels}
        columnTypes={cardColumnTypes}
        // onItemEditClick={noop}
        onRequestDeleteClick={noop}
      />
    </AdminDashboardTemplateContainer>
  );
};

const BadgeLeftPositioned = styled(Badge).attrs({
  classes: { badge: "badge" },
})`
  .badge {
    top: -10px;
    right: -2px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .badge {
      right: 10px;
    }
  }
`;
