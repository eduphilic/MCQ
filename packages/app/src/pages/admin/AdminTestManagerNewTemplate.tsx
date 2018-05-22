import { Formik } from "formik";
import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import { Typography } from "components/atoms/Typography";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

// tslint:disable-next-line:no-empty-interface
export interface AdminTestManagerNewTemplateProps {}

export class AdminTestManagerNewTemplate extends Component<
  AdminTestManagerNewTemplateProps
> {
  render() {
    const initialValues = {
      entryType: "",
    };

    type Values = typeof initialValues;

    // tslint:disable-next-line:max-classes-per-file
    const FormikTyped = class extends Formik<{}, Values> {};

    return (
      <FormikTyped
        initialValues={initialValues}
        onSubmit={() => alert("Form submission")}
      >
        {_api => {
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
              </Card>
            </AdminDashboardTemplateContainer>
          );
        }}
      </FormikTyped>
    );
  }
}
