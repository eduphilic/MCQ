import { Formik } from "formik";
import React, { Component, ReactNode, SFC } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";

import { Typography } from "components/atoms/Typography";
import { FormikTextFieldTypeAhead } from "components/molecules/FormikTextFieldTypeAhead";

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
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}>
        {left}
      </Grid>
      <Grid item xs={12} sm={6}>
        {right}
      </Grid>
    </Grid>
  );
};
