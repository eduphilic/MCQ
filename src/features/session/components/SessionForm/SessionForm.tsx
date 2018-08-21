import { strings } from "features/localization";
import { Formik } from "formik";
import React, { cloneElement, ReactElement, SFC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { State } from "store";
import styled from "styled";
import { actions } from "../../actions";
import { IUser } from "../../models/IUser";
import { FormType } from "./FormType";
import { getLocalizedTextFieldProps } from "./getLocalizedTextFieldProps";
import { getValidationSchema } from "./getValidationSchema";
import { TextFieldValues } from "./TextFieldValues";
import { Values } from "./Values";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import { Button } from "componentsV0/Button";
import { CardMobileFlat } from "componentsV0/CardMobileFlat";
import { FormHeader } from "./FormHeader";
import { PasswordResetLink } from "./PasswordResetLink";
import { TermsConditionsCheckbox } from "./TermsConditionsCheckbox";
import { TextField, TextFieldProps } from "./TextField";

type OwnProps = {
  type: FormType;
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

const initialValues: Values = {
  fullName: "",
  phoneNumber: "",
  emailAddress: "",
  password: "",
  passwordVerify: "",
  termsAgreed: false,
};

const handleFormSubmit = (props: Props, values: Values) => {
  const {
    type,
    onUserSigninSubmit,
    onUserSignupSubmit,
    onAdminSigninSubmit,
  } = props;

  alert(`Session form submission: ${JSON.stringify(values, null, 2)}`);

  switch (type) {
    case "user-sign-in": {
      onUserSigninSubmit(values.phoneNumber, values.password);
      return;
    }

    case "user-sign-up": {
      onUserSignupSubmit(
        values.fullName,
        values.phoneNumber,
        values.password,
        values.emailAddress,
      );
      return;
    }

    case "admin-sign-in": {
      onAdminSigninSubmit(values.phoneNumber, values.password);
      return;
    }
  }
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
      if (name === "emailAddress" && type !== "user-sign-up") return null;
      if (name === "fullName" && type !== "user-sign-up") return null;
      if (name === "passwordVerify" && type !== "user-sign-up") return null;
      if (name === ("termsAgreed" as any)) return null;

      return {
        name,
        element: <TextField key={name} name={name} {...textFieldProps[name]} />,
      };
    })
    .filter(f => f !== null) as TextFields;

  const validationSchema = () => getValidationSchema(type);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => handleFormSubmit(props, values)}
      validationSchema={validationSchema}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
          <CardMobileFlat>
            <CardHeader title={<FormHeader>{formTitle}</FormHeader>} />

            <CardContent>
              {textFields.map(({ name, element }) =>
                cloneElement(element, {
                  value: values[name],
                  error: touched[name] && !!errors[name],
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
                    disabled={isSubmitting}
                    error={!!touched.termsAgreed && !!errors.termsAgreed}
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

const dummyUser: IUser = {
  id: "abc",
  displayName: "John Doe",
  email: "john@doe.com",
  fullName: "John Doe",
  isAdmin: false,
  phoneNumber: "123",
};

const SessionFormContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  ({ session }) => ({ isSubmitting: session.isSubmitting }),
  {
    onUserSigninSubmit: (phoneNumber: string) =>
      actions.loginSuccess({ ...dummyUser, phoneNumber }),
    onUserSignupSubmit: (
      fullName: string,
      phoneNumber: string,
      emailAddress: string,
    ) =>
      actions.signupSuccess({
        ...dummyUser,
        fullName,
        phoneNumber,
        email: emailAddress,
      }),
    onAdminSigninSubmit: (phoneNumber: string) =>
      actions.loginSuccess({
        ...dummyUser,
        phoneNumber,
      }),
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
