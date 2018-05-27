import { Formik } from "formik";
import React, { SFC } from "react";
import { withRouter } from "react-router-dom";

import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Flag from "@material-ui/icons/Flag";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

import { FormikFileUploadBase } from "components/molecules/FormikFileUploadBase";
import { ResponsiveToolbarTypographyButton } from "components/molecules/ResponsiveToolbarTypographyButton";
import { SideSheetButtonMenu } from "components/molecules/SideSheetButtonMenu";
import { SideSheetFieldGroup } from "components/molecules/SideSheetFieldGroup";
import { DashboardCard } from "components/organisms/DashboardCard";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminQuestionManager: SFC<{}> = () => {
  // tslint:disable-next-line:no-empty
  const noop = () => {};

  const initialValues = {
    questionsFile: null as File | null,
  };
  type Values = typeof initialValues;
  class TypedFormik extends Formik<{}, Values> {}

  return (
    <TypedFormik initialValues={initialValues} onSubmit={noop}>
      {api => (
        <AdminDashboardTemplateContainer
          titleText="Question Manager"
          actionButtonElements={[
            <FormikFileUploadBase
              key="import-question"
              formikApi={api}
              name="questionsFile"
            >
              {fileUploadApi => (
                <ResponsiveToolbarTypographyButton
                  color="orange"
                  iconNode={<InsertDriveFile />}
                  tooltipTitle="Import Questions"
                  onClick={fileUploadApi.onMouseDown}
                >
                  Import Questions
                </ResponsiveToolbarTypographyButton>
              )}
            </FormikFileUploadBase>,
          ]}
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

              <SideSheetFieldGroup fieldGroupTitle="Level">
                <SideSheetButtonMenu options={["Easy", "Medium", "Hard"]} />
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
            columnLabels={["Question"]}
            columnTypes={["dual-line"]}
            onItemEditClick={noop}
            onRequestDeleteClick={noop}
            additionalActionNode={<ReportedQuestionsButton />}
            items={Array.from({ length: 20 }, (_item, index) => ({
              key: index.toString(),
              columns: [
                {
                  primaryText: `${index + 1}. Question Label...`,
                  secondaryText: "Date uploaded...",
                },
              ],
            }))}
          />
        </AdminDashboardTemplateContainer>
      )}
    </TypedFormik>
  );
};

const ReportedQuestionsButton = withRouter(props => (
  <Tooltip title="Reported Questions">
    <IconButton
      onClick={() => props.history.push("/admin/question-manager/reported")}
    >
      <Badge badgeContent="3" color="error">
        <Flag />
      </Badge>
    </IconButton>
  </Tooltip>
));
