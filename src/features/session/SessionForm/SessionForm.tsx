// import { strings } from "features/localization";
import { CardActions, CardContent, CardHeader } from "@material-ui/core";
// import { Button } from "componentsV0/Button";
import { Formik } from "formik";
import gql from "graphql-tag";
import React, { cloneElement, ReactElement, SFC } from "react";
import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { QueryWithLoading } from "../../../components/QueryWithLoading";
import { styled } from "../../../styled";
import { l } from "../../localization";
// import { IUser } from "../../models/IUser";
import { FormHeader } from "./FormHeader";
import { FormType } from "./FormType";
import { getLocalizedTextFieldProps } from "./getLocalizedTextFieldProps";
import { getValidationSchema } from "./getValidationSchema";
import { PasswordResetLink } from "./PasswordResetLink";
import { SessionFormConfig } from "./SessionFormConfig";
import { TermsConditionsCheckbox } from "./TermsConditionsCheckbox";
import { TextField, TextFieldProps } from "./TextField";
import { TextFieldValues } from "./TextFieldValues";
import { Values } from "./Values";

const GET_SESSION_FORM_CONFIG = gql`
  query GetSessionFormConfig {
    sessionFormConfig {
      formTitleUserSignIn
      formTitleUserSignUp
      formTitleAdminSignIn
      fullNameFieldPlaceholder
      phoneNumberFieldPlaceholder
      passwordFieldPlaceholder
      passwordVerifyFieldPlaceholder
      emailAddressFieldPlaceholder
      submitButtonLabel
      termsConditionsCheckboxLabel
    }
  }
`;

type Response = {
  sessionFormConfig: SessionFormConfig;
};

// type OwnProps = {
//   type: FormType;
// };
// export type SessionFormProps = OwnProps;

// type DispatchProps = {
//   onUserSigninSubmit: (phoneNumber: string, password: string) => any;
//   onUserSignupSubmit: (
//     fullName: string,
//     phoneNumber: string,
//     password: string,
//     emailAddress: string,
//   ) => any;
//   onAdminSigninSubmit: (phoneNumber: string, password: string) => any;
// };

// type StateProps = {
//   isSubmitting: boolean;
// };

// type Props = OwnProps & DispatchProps & StateProps & RouteComponentProps<{}>;
type Props = { type: FormType };

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
    // onUserSigninSubmit,
    // onUserSignupSubmit,
    // onAdminSigninSubmit,
  } = props;

  alert(`Session form submission: ${JSON.stringify(values, null, 2)}`);

  switch (type) {
    case "user-sign-in": {
      // onUserSigninSubmit(values.phoneNumber, values.password);
      return;
    }

    case "user-sign-up": {
      // onUserSignupSubmit(
      //   values.fullName,
      //   values.phoneNumber,
      //   values.password,
      //   values.emailAddress,
      // );
      return;
    }

    case "admin-sign-in": {
      // onAdminSigninSubmit(values.phoneNumber, values.password);
      return;
    }
  }
};

export const SessionForm: SFC<Props> = props => {
  const { type /*, isSubmitting */ } = props;
  const isSubmitting = false; // TODO: Wire this up.
  // const [] = useFunctionAsChild<Query<Response>>(Query, {
  //   query: GET_SESSION_FORM_CONFIG,
  // });

  const validationSchema = () => getValidationSchema(type);

  return (
    <QueryWithLoading<Response> query={GET_SESSION_FORM_CONFIG}>
      {({ data }) => {
        let formTitle: string;
        switch (type) {
          case "user-sign-in": {
            formTitle = l(data!.sessionFormConfig.formTitleUserSignIn);
            break;
          }
          case "user-sign-up": {
            formTitle = l(data!.sessionFormConfig.formTitleUserSignUp);
            break;
          }
          case "admin-sign-in": {
            formTitle = l(data!.sessionFormConfig.formTitleAdminSignIn);
            break;
          }
        }

        const textFieldProps = getLocalizedTextFieldProps(
          type,
          data!.sessionFormConfig,
        );

        const textFields = (Object.keys(
          initialValues,
        ) as (keyof TextFieldValues)[])
          .map(name => {
            if (name === "emailAddress" && type !== "user-sign-up") return null;
            if (name === "fullName" && type !== "user-sign-up") return null;
            if (name === "passwordVerify" && type !== "user-sign-up") {
              return null;
            }
            if (name === ("termsAgreed" as any)) return null;

            return {
              name,
              element: (
                <TextField key={name} name={name} {...textFieldProps[name]} />
              ),
            };
          })
          .filter(f => f !== null) as TextFields;

        return (
          <Formik<typeof initialValues>
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
                <Card>
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
                      {l(data!.sessionFormConfig.submitButtonLabel)}
                    </Button>

                    <SecondaryActionWrapper>
                      {type === "user-sign-in" && (
                        <PasswordResetLink
                          disabled={isSubmitting}
                          label={l(
                            data!.sessionFormConfig.passwordResetLinkLabel,
                          )}
                        />
                      )}

                      {type === "user-sign-up" && (
                        <TermsConditionsCheckbox
                          name="termsAgreed"
                          label={l(
                            data!.sessionFormConfig
                              .termsConditionsCheckboxLabel,
                          )}
                          checked={values.termsAgreed}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          error={!!touched.termsAgreed && !!errors.termsAgreed}
                        />
                      )}
                    </SecondaryActionWrapper>
                  </CardActionsMarginBottom>
                </Card>
              </form>
            )}
          </Formik>
        );
      }}
    </QueryWithLoading>
  );
};

// const dummyUser: IUser = {
//   id: "abc",
//   displayName: "John Doe",
//   email: "john@doe.com",
//   fullName: "John Doe",
//   isAdmin: false,
//   phoneNumber: "123",
// };

// const SessionFormContainer = connect<
//   StateProps,
//   DispatchProps,
//   OwnProps,
//   State
// >(
//   ({ session }) => ({ isSubmitting: session.isSubmitting }),
//   {
//     onUserSigninSubmit: (phoneNumber: string) =>
//       actions.loginSuccess({ ...dummyUser, phoneNumber }),
//     onUserSignupSubmit: (
//       fullName: string,
//       phoneNumber: string,
//       emailAddress: string,
//     ) =>
//       actions.signupSuccess({
//         ...dummyUser,
//         fullName,
//         phoneNumber,
//         email: emailAddress,
//       }),
//     onAdminSigninSubmit: (phoneNumber: string) =>
//       actions.loginSuccess({
//         ...dummyUser,
//         phoneNumber,
//       }),
//   },
// )(SessionForm);

// const SessionFormContainerWithRouter = withRouter(SessionFormContainer);
// export { SessionFormContainerWithRouter as SessionForm };

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
