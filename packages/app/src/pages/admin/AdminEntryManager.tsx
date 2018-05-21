import React, { SFC } from "react";

import Add from "@material-ui/icons/Add";

import { ResponsiveToolbarTypographyButton } from "components/molecules/ResponsiveToolbarTypographyButton";
import { DashboardCard } from "components/organisms/DashboardCard";
import {
  DashboardFormDialog,
  FieldConfigs,
} from "components/organisms/DashboardFormDialog";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminEntryManager: SFC<{}> = () => {
  const noop = () => {}; // tslint:disable-line

  const dialogFields = {
    entryType: "Army",
    categoryType: "",
    education: "",
    pricePerPaper: 10,
    logo: null as File | null,
  };

  const fieldConfigs: FieldConfigs<typeof dialogFields> = {
    entryType: {
      inputLabel: "Entry Type",
      inputType: "text-autocomplete",
      placeholder: "Enter Entry name here...",
      suggestions: ["AirForce", "Army", "Navy"],
    },
    categoryType: {
      inputLabel: "Category Type",
      inputType: "text-autocomplete",
      placeholder: "Enter category name here...",
      suggestions: ["Soldier GD", "Soldier Tradesman", "Soldier GD"],
    },
    education: {
      inputLabel: "Education",
      inputType: "text-autocomplete",
      placeholder: "Select Education",
      suggestions: ["8th", "10th", "12th"],
    },
    pricePerPaper: {
      inputLabel: "Price per paper",
      inputType: "text",
      placeholder: "Enter price",
    },
    logo: {
      inputLabel: "Upload Logo",
      inputType: "file-upload",
      placeholder: "Select logo path here...",
    },
  };

  const appBarActionButtons = [
    <DashboardFormDialog
      fieldConfigs={fieldConfigs}
      initialValues={dialogFields}
      onSubmit={noop}
    >
      <ResponsiveToolbarTypographyButton
        iconNode={<Add />}
        tooltipTitle="Add New Entry"
        color="orange"
      >
        Entry
      </ResponsiveToolbarTypographyButton>
    </DashboardFormDialog>,
  ];

  return (
    <AdminDashboardTemplateContainer
      titleText="Entry Manager"
      actionButtonElements={appBarActionButtons}
    >
      {["AirForce", "Army", "Navy"].map(title => (
        <DashboardCard
          key={title}
          title={`${title} Entry`}
          columnLabels={[
            "Category",
            "Icons",
            "Cost Per Paper (Rs)",
            "Activated",
          ]}
          columnTypes={["dual-line", "image", "single-line", "switch"]}
          editCaptionText="Click to Edit Entry"
          onItemEditClick={item => alert(`Open edit dialog for item: ${item}`)}
          onRequestDeleteClick={items =>
            alert(`Open verification dialog for items: ${items}`)
          }
          items={[
            {
              key: "0",
              columns: [
                { primaryText: "Soldier GD", secondaryText: "10th" },
                {
                  imgUrl: process.env.PUBLIC_URL + "/images/entry/airforce.svg",
                },
                { primaryText: "10" },
                {
                  switchChecked: false,
                  switchTooltipTitle: "Toggle Activation",
                },
              ],
            },
            {
              key: "1",
              columns: [
                { primaryText: "Soldier Tradesman", secondaryText: "10th" },
                { imgUrl: process.env.PUBLIC_URL + "/images/entry/army.svg" },
                { primaryText: "10" },
                {
                  switchChecked: true,
                  switchTooltipTitle: "Toggle Activation",
                },
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
                { primaryText: "10" },
                {
                  switchChecked: true,
                  switchTooltipTitle: "Toggle Activation",
                },
              ],
            },
            {
              key: "3",
              columns: [
                { primaryText: "Soldier GD", secondaryText: "12th" },
                { imgUrl: process.env.PUBLIC_URL + "/images/entry/bsf.svg" },
                { primaryText: "10" },
                {
                  switchChecked: false,
                  switchTooltipTitle: "Toggle Activation",
                },
              ],
            },
          ]}
        />
      ))}
    </AdminDashboardTemplateContainer>
  );
};
