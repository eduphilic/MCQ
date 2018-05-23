import { Formik } from "formik";
import React, { Component, ReactNode, SFC } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";

import { Typography } from "components/atoms/Typography";
import { DashboardSecondaryToolbar } from "components/molecules/DashboardSecondaryToolbar";
import { FormikCheckbox } from "components/molecules/FormikCheckbox";
import { FormikTextField } from "components/molecules/FormikTextField";
import { FormikTextFieldTypeAhead } from "components/molecules/FormikTextFieldTypeAhead";
import { TypographyButton } from "components/molecules/TypographyButton";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

// tslint:disable-next-line:no-empty-interface
export interface AdminTestManagerNewTemplateProps {}

export class AdminTestManagerNewTemplate extends Component<
  AdminTestManagerNewTemplateProps
> {
  render() {
    const initialValues = {
      entry: "AirForce",
      category: "Soldier GD",

      paperName: "",

      questionsTotal: 100,
      durationMinutes: 30,

      marksTotal: 100,
      marksRequiredToPass: "" as number | string,

      marksCorrectAnswer: 3,
      marksDeductedWrongAnswer: "" as number | string,

      partsCount: 1,
      partsAllRequiredOneSitting: false,
    };

    type Values = typeof initialValues;

    // tslint:disable-next-line:max-classes-per-file
    const FormikTyped = class extends Formik<{}, Values> {};

    return (
      <FormikTyped
        initialValues={initialValues}
        onSubmit={() => alert("Form submission")}
      >
        {api => {
          return (
            <AdminDashboardTemplateContainer titleText="Test Manager > Add New Template">
              <DashboardSecondaryToolbar>
                <DashboardSecondaryToolbar.Header>
                  <Typography variant="cardTitle">
                    Create a new Test Type
                  </Typography>
                </DashboardSecondaryToolbar.Header>
                <DashboardSecondaryToolbar.Spacer />
                <TypographyButton color="red" variant="flat">
                  Cancel
                </TypographyButton>
                <TypographyButton color="blue" variant="flat">
                  Preview Test
                </TypographyButton>
                <TypographyButton color="primary" variant="flat">
                  Save
                </TypographyButton>
              </DashboardSecondaryToolbar>

              <Card>
                <CardHeader
                  title={
                    <Typography variant="cardTitle">
                      Basic Information
                    </Typography>
                  }
                />
                <CardContent>
                  <TwoColumnRow
                    left={
                      <FormikTextFieldTypeAhead
                        formikApi={api}
                        name="entry"
                        label="Select entry"
                        placeholder="Select Entry here..."
                        suggestions={["AirForce", "Army", "Navy"]}
                      />
                    }
                    right={
                      <FormikTextFieldTypeAhead
                        formikApi={api}
                        name="category"
                        label="Select category"
                        placeholder="Select category"
                        suggestions={["Soldier GD", "Soldier Tradesman"]}
                      />
                    }
                  />

                  <TwoColumnRow
                    left={
                      <FormikTextField
                        formikApi={api}
                        name="paperName"
                        label="Paper Name"
                        placeholder="Enter paper name here..."
                      />
                    }
                  />
                </CardContent>

                <CardHeader
                  title={
                    <Typography variant="cardTitle">
                      Marks Distribution
                    </Typography>
                  }
                />
                <CardContent>
                  <TwoColumnRow
                    left={
                      <FormikTextField
                        formikApi={api}
                        name="questionsTotal"
                        type="number"
                        label="Total Questions"
                        placeholder="Enter total number of questions here..."
                      />
                    }
                    right={
                      <FormikTextField
                        formikApi={api}
                        name="durationMinutes"
                        type="number"
                        label="Time (minutes)"
                        placeholder="Enter duration here..."
                      />
                    }
                  />
                  <TwoColumnRow
                    left={
                      <FormikTextField
                        formikApi={api}
                        name="marksTotal"
                        type="number"
                        label="Total Marks"
                      />
                    }
                    right={
                      <FormikTextField
                        formikApi={api}
                        name="marksRequiredToPass"
                        type="number"
                        label="Passing marks"
                        placeholder="Enter marks here"
                      />
                    }
                  />
                  <TwoColumnRow
                    left={
                      <FormikTextField
                        formikApi={api}
                        name="marksCorrectAnswer"
                        type="number"
                        label="Marks for each correct answer"
                      />
                    }
                    right={
                      <FormikTextField
                        formikApi={api}
                        name="marksDeductedWrongAnswer"
                        type="number"
                        label="Marks deducted for each wrong answer"
                        placeholder="Enter marks here"
                      />
                    }
                  />
                  <TwoColumnRow
                    left={
                      <FormikTextField
                        formikApi={api}
                        name="partsCount"
                        type="number"
                        label="Number of Parts in this test"
                        placeholder="Number of parts here..."
                      />
                    }
                    right={
                      <FormikCheckbox
                        formikApi={api}
                        name="partsAllRequiredOneSitting"
                        label="Candidate to attempt all Parts in one go"
                      />
                    }
                  />
                </CardContent>
              </Card>
            </AdminDashboardTemplateContainer>
          );
        }}
      </FormikTyped>
    );
  }
}

const TwoColumnRow: SFC<{ left: ReactNode; right?: ReactNode }> = props => {
  const { left, right } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        {left}
      </Grid>
      <Grid item xs={12} sm={6}>
        {right}
      </Grid>
    </Grid>
  );
};
