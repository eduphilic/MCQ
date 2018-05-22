import React, { cloneElement, ReactElement, SFC } from "react";
import { withRouter } from "react-router-dom";

import Add from "@material-ui/icons/Add";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";

import {
  DashboardCard,
  DashboardCardItemColumn,
} from "components/organisms/DashboardCard";
// import {
//   DashboardFormDialog,
//   FieldConfigs,
// } from "components/organisms/DashboardFormDialog";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminTestManager: SFC<{}> = () => {
  // const noop = () => {}; // tslint:disable-line

  // const dialogInitialValues = {
  //   entryType: "AirForce",
  // };

  // const dialogFieldConfigs: FieldConfigs<typeof dialogInitialValues> = {
  //   entryType: {
  //     inputType: "text-autocomplete",
  //     inputLabel: "Select entry",
  //     placeholder: "Select Entry here...",
  //     suggestions: ["AirForce", "Assam Rifles"],
  //   },
  // };

  // const dialog = (
  //   <DashboardFormDialog
  //     initialValues={dialogInitialValues}
  //     fieldConfigs={dialogFieldConfigs}
  //     onSubmit={noop}
  //   />
  // );

  // const dialogNoTest = (

  // )

  return (
    <AdminDashboardTemplateContainer titleText="Test Manager">
      {["AirForce", "Army", "Navy"].map(title => (
        <DashboardCard
          key={title}
          title={`${title} Entry`}
          columnLabels={["Category", "Availability", "Actions"]}
          columnTypes={["dual-line", "switch", "button"]}
          onItemEditClick={item => alert(`Open edit page for item: ${item}`)}
          items={[
            {
              key: "0",
              columns: [
                { primaryText: "Soldier GD", secondaryText: "10th" },
                {
                  switchChecked: false,
                  switchTooltipTitle: "Toggle Test Availability",
                },
                {
                  primaryText: "Template",
                  buttonIconNode: <Add />,
                  buttonTooltipTitle: "Add New Template",
                },
              ],
            },
            {
              key: "1",
              columns: [
                { primaryText: "Soldier Tradesman", secondaryText: "10th" },
                {
                  switchChecked: true,
                  switchTooltipTitle: "Toggle Test Availability",
                },
                {
                  primaryText: "View",
                  buttonIconNode: <RemoveRedEye />,
                  buttonTooltipTitle: "Preview Template",
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
                  switchChecked: true,
                  switchTooltipTitle: "Toggle Test Availability",
                },
                {
                  primaryText: "View",
                  buttonIconNode: <RemoveRedEye />,
                  buttonTooltipTitle: "Preview Template",
                },
              ],
            },
            {
              key: "3",
              columns: [
                { primaryText: "Soldier GD", secondaryText: "12th" },
                {
                  switchChecked: false,
                  switchTooltipTitle: "Toggle Test Availability",
                },
                {
                  primaryText: "View",
                  buttonIconNode: <RemoveRedEye />,
                  buttonTooltipTitle: "Preview Template",
                },
              ],
            },
          ].map((i, index) => {
            const itemColumn: DashboardCardItemColumn = i.columns[2];

            // Redirect to new template page for Add Template Button
            const AddTemplateRedirectButton = withRouter(props => {
              const wrappedChildren = cloneElement(
                props.children as ReactElement<any>,
                {
                  onClick: () => props.history.push("/admin/dashboard/new"),
                },
              );

              return <>{wrappedChildren}</>;
            });

            if (itemColumn.primaryText === "View") {
              itemColumn.onClick = () =>
                alert(`Open preview page for item: ${index}`);
            } else {
              itemColumn.wrapper = <AddTemplateRedirectButton />;
            }

            return i;
          })}
        />
      ))}
    </AdminDashboardTemplateContainer>
  );
};
