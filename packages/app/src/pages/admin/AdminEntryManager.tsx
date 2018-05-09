import React, { SFC } from "react";

import Add from "@material-ui/icons/Add";

import { ResponsiveToolbarTypographyButton } from "components/molecules/ResponsiveToolbarTypographyButton";
import { DashboardCard } from "components/organisms/DashboardCard";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminEntryManager: SFC<{}> = () => {
  const appBarActionButtons = [
    <ResponsiveToolbarTypographyButton
      iconNode={<Add />}
      tooltipTitle="Add New Entry"
      color="orange"
    >
      Entry
    </ResponsiveToolbarTypographyButton>,
  ];

  const noop = () => {}; // tslint:disable-line

  return (
    <AdminDashboardTemplateContainer
      titleText="Entry Manager"
      actionButtonElements={appBarActionButtons}
    >
      {["AirForce", "Army", "Navy"].map(title => (
        <DashboardCard
          key={title}
          title={`${title} Entry`}
          columnLabels={["Category", "", "Cost Per Paper", ""]}
          columnTypes={["dual-line", "image", "single-line", "switch"]}
          editCaptionText="Click to Edit Entry"
          onItemEditClick={noop}
          onRequestDeleteClick={noop}
          items={[
            {
              key: "0",
              columns: [
                { primaryText: "Soldier GD", secondaryText: "10th" },
                {
                  imgUrl: process.env.PUBLIC_URL + "/images/entry/airforce.svg",
                },
                { primaryText: "Rs 10 pp" },
                { switchChecked: false },
              ],
            },
            {
              key: "1",
              columns: [
                { primaryText: "Soldier Tradesman", secondaryText: "10th" },
                { imgUrl: process.env.PUBLIC_URL + "/images/entry/army.svg" },
                { primaryText: "Rs 10 pp" },
                { switchChecked: true },
              ],
            },
            {
              key: "2",
              columns: [
                {
                  primaryText: "Soldier Tradesman",
                  secondaryText: "8th",
                },
                {
                  imgUrl:
                    process.env.PUBLIC_URL + "/images/entry/assamrifles.svg",
                },
                { primaryText: "Rs 10 pp" },
                { switchChecked: true },
              ],
            },
            {
              key: "3",
              columns: [
                { primaryText: "Soldier GD", secondaryText: "12th" },
                { imgUrl: process.env.PUBLIC_URL + "/images/entry/bsf.svg" },
                { primaryText: "Rs 10 pp" },
                { switchChecked: false },
              ],
            },
          ]}
        />
      ))}
    </AdminDashboardTemplateContainer>
  );
};
