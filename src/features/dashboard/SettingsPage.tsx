import { Formik } from "formik";
import React, { Fragment, SFC } from "react";
import styled from "styled";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import withWidth, { isWidthUp, WithWidth } from "@material-ui/core/withWidth";

import { DashboardColumnContainer } from "componentsV0/DashboardColumnContainer";
import { FormikTextField } from "componentsV0/FormikTextField";
import { Typography } from "componentsV0/Typography";
import {
  TypographyButton,
  TypographyButtonProps,
} from "componentsV0/TypographyButton";

const initialBasicInformationValues = {
  firstName: "Anupam",
  lastName: "Pareek",
  dateOfBirth: "12/07/1995",
  phoneNumber: "8956456978",
  email: "apareek@gmail.com",
};

const initialPasswordValues = {
  currentPassword: "********",
  newPassword: "********",
  newPasswordConfirm: "********",
};

const SettingsPage: SFC<WithWidth> = props => {
  const { width } = props;

  const isTabletOrAbove = isWidthUp("md", width);
  const interlaceFields = isTabletOrAbove;
  const FormWrapper = isTabletOrAbove ? Card : Fragment;

  return (
    <>
      <Formik<typeof initialBasicInformationValues>
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
      </Formik>

      {!isTabletOrAbove && <Divider />}

      <Formik<typeof initialPasswordValues>
        initialValues={initialPasswordValues}
        onSubmit={() => alert("Form submission")}
      >
        {api => (
          <FormWrapper>
            <CardHeader
              title={<Typography variant="cardTitle">Password</Typography>}
            />
            <CardContent>
              <DashboardColumnContainer interlaced={interlaceFields}>
                {[
                  <FormikTextField
                    key="currentPassword"
                    formikApi={api}
                    name="currentPassword"
                    label="Current Password"
                    type="password"
                  />,
                  <FormSpacer key="spacer" />,
                  <FormikTextField
                    key="newPassword"
                    formikApi={api}
                    name="newPassword"
                    label="New Password"
                    type="password"
                  />,
                  <FormikTextField
                    key="newPasswordConfirm"
                    formikApi={api}
                    name="newPasswordConfirm"
                    label="Confirm New Password"
                    type="password"
                  />,
                  isTabletOrAbove && <FormSpacer key="spacer2" />,
                  <FormButton key="updatePassword">Update Password</FormButton>,
                ]}
              </DashboardColumnContainer>
            </CardContent>
          </FormWrapper>
        )}
      </Formik>
    </>
  );
};

const SettingsPageWithWidth = withWidth()(SettingsPage);
export { SettingsPageWithWidth as SettingsPage };

const FormButton = styled<TypographyButtonProps>(({ className, ...rest }) => (
  <div className={className}>
    <TypographyButton
      className="form-button"
      color="primary"
      filled
      {...rest}
    />
  </div>
))`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  margin-bottom: 12px;

  .form-button {
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .form-button {
      width: initial;
      min-width: 150px;
    }
  }
`;

const FormSpacer = styled.div`
  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 48px;
  }
`;
