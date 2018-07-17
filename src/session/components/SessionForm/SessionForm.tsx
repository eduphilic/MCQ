import { Formik } from "formik";
import { strings } from "localization";
import React, { cloneElement, ReactElement, SFC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { State } from "store";
import styled from "styled";
// import { actions } from "../../actions";
import { TextFieldValues } from "./TextFieldValues";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import { Button } from "components/Button";
import { CardMobileFlat } from "components/CardMobileFlat";
import { FormHeader } from "components/FormHeader";
import { TextField, TextFieldProps } from "components/TextField";
import { getLocalizedTextFieldProps } from "./getLocalizedTextFieldProps";
import { PasswordResetLink } from "./PasswordResetLink";
import { TermsConditionsCheckbox } from "./TermsConditionsCheckbox";

type OwnProps = {
  type: "user-sign-in" | "user-sign-up" | "admin-sign-in";
};
export { OwnProps as SessionFormProps };

type DispatchProps = {
  onUserSigninSubmit: (phoneNumber: string, password: string) => any;
  onUserSignupSubmit: (
    fullName: string,
    phoneNumber: string,
    password: string,
    emailAddress: string,
  ) => any;
  onAdminSigninSubmit: (phoneNumber: string, password: string) => any;
};

type StateProps = {
  isSubmitting: boolean;
};

type Props = OwnProps & DispatchProps & StateProps & RouteComponentProps<{}>;

type TextFields = {
  element: ReactElement<TextFieldProps>;
  name: keyof TextFieldValues;
}[];

type Values = TextFieldValues & {
  termsAgreed: boolean;
};

const initialValues: Values = {
  fullName: "",
  phoneNumber: "",
  password: "",
  passwordVerify: "",
  emailAddress: "",
  termsAgreed: false,
};

const handleFormSubmit = (values: Values) => {
  /* tslint:disable-next-line:no-console */
  console.log("values", values);
};

const SessionForm: SFC<Props> = props => {
  const { type, isSubmitting } = props;

  let formTitle: string;
  switch (type) {
    case "user-sign-in": {
      formTitle = strings.session_SessionForm_FormTitle_UserSignIn;
      break;
    }
    case "user-sign-up": {
      formTitle = strings.session_SessionForm_FormTitle_UserSignUp;
      break;
    }
    case "admin-sign-in": {
      formTitle = strings.session_SessionForm_FormTitle_AdminSignIn;
      break;
    }
  }

  const textFieldProps = getLocalizedTextFieldProps(type);

  const textFields = (Object.keys(initialValues) as (keyof TextFieldValues)[])
    .map(name => {
      if (name === "fullName" && type !== "user-sign-up") return null;
      if (name === "passwordVerify" && type !== "user-sign-up") return null;
      if (name === ("termsAgreed" as any)) return null;

      return {
        name,
        element: <TextField key={name} name={name} {...textFieldProps[name]} />,
      };
    })
    .filter(f => f !== null) as TextFields;

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
        <form onSubmit={handleSubmit}>
          <CardMobileFlat>
            <CardHeader title={<FormHeader>{formTitle}</FormHeader>} />

            <CardContent>
              {textFields.map(({ name, element }) =>
                cloneElement(element, {
                  value: values[name],
                  error: errors[name],
                  label: errors[name],
                  onChange: handleChange,
                  onBlur: handleBlur,
                }),
              )}
            </CardContent>

            <CardActionsMarginBottom>
              <Button type="submit" disabled={isSubmitting}>
                {strings.session_SessionForm_SubmitButtonLabel}
              </Button>

              <SecondaryActionWrapper>
                {type === "user-sign-in" && (
                  <PasswordResetLink disabled={isSubmitting} />
                )}

                {type === "user-sign-up" && (
                  <TermsConditionsCheckbox
                    name="termsAgreed"
                    checked={values.termsAgreed}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                )}
              </SecondaryActionWrapper>
            </CardActionsMarginBottom>
          </CardMobileFlat>
        </form>
      )}
    </Formik>
  );
};

const noop = () => {
  //
};

const SessionFormContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  ({ session }) => ({ isSubmitting: session.isSubmitting }),
  {
    onUserSigninSubmit: noop,
    onUserSignupSubmit: noop,
    onAdminSigninSubmit: noop,
  },
)(SessionForm);

const SessionFormContainerWithRouter = withRouter(SessionFormContainer);
export { SessionFormContainerWithRouter as SessionForm };

const CardActionsMarginBottom = styled(CardActions)`
  padding-left: ${props => props.theme.spacing.unit * 2}px;
  padding-bottom: ${props => props.theme.spacing.unit * 2}px;

  ${props => props.theme.breakpoints.up("sm")} {
    padding-left: ${props => props.theme.spacing.unit * 3}px;
  }
`;

const SecondaryActionWrapper = styled.div`
  margin-left: auto;
`;
