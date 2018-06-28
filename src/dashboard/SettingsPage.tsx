import { Formik } from "formik";
import React, { Fragment, SFC } from "react";
import styled from "styled";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import withWidth, {
  isWidthUp,
  WithWidthProps,
} from "@material-ui/core/withWidth";

import { DashboardColumnContainer } from "components/DashboardColumnContainer";
import { FormikTextField } from "components/FormikTextField";
import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";

const initialBasicInformationValues = {
  firstName: "Anupam",
  lastName: "Pareek",
  dateOfBirth: "12/07/1995",
  phoneNumber: "8956456978",
  email: "apareek@gmail.com",

  currentPassword: "********",
  newPassword: "********",
  newPasswordConfirm: "********",
};

type BasicInformationValues = typeof initialBasicInformationValues;
const FormikBasicInformation = class extends Formik<
  {},
  BasicInformationValues
> {};

const SettingsPage: SFC<WithWidthProps> = props => {
  const { width } = props;

  const isTabletOrAbove = isWidthUp("md", width);
  const interlaceFields = isTabletOrAbove;
  const FormWrapper = isTabletOrAbove ? Card : Fragment;

  return (
    <>
      <FormikBasicInformation
        initialValues={initialBasicInformationValues}
        onSubmit={() => alert("Form submission")}
      >
        {api => (
          <FormWrapper>
            <CardHeader
              title={
                <Typography variant="cardTitle">Basic Information</Typography>
              }
            />
            <CardContent>
              <DashboardColumnContainer interlaced={interlaceFields}>
                {[
                  <FormikTextField
                    key="firstName"
                    formikApi={api}
                    name="firstName"
                    label="First Name"
                  />,
                  <FormikTextField
                    key="lastName"
                    formikApi={api}
                    name="lastName"
                    label="Last Name"
                  />,
                  <FormikTextField
                    key="dateOfBirth"
                    formikApi={api}
                    name="dateOfBirth"
                    label="Date of Birth"
                  />,
                  <FormikTextField
                    key="phoneNumber"
                    formikApi={api}
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                  />,
                  <FormikTextField
                    key="email"
                    formikApi={api}
                    name="email"
                    label="Email ID"
                    type="email"
                    disabled
                  />,
                  <FormButton
                    key="submit"
                    type="submit"
                    onClick={api.submitForm}
                  >
                    Save
                  </FormButton>,
                ]}
              </DashboardColumnContainer>
            </CardContent>
          </FormWrapper>
        )}
      </FormikBasicInformation>
    </>
  );
};

const SettingsPageWithWidth = withWidth()(SettingsPage);
export { SettingsPageWithWidth as SettingsPage };

const FormButton = styled(TypographyButton)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: initial;
    min-width: 150px;
    margin-left: calc(100% - 150px);
  }
`;
