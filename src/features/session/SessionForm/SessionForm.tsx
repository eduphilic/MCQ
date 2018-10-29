import { CardActions, CardContent, CardHeader } from "@material-ui/core";
import { Formik } from "formik";
import gql from "graphql-tag";
import React, { cloneElement, ReactElement, SFC } from "react";
import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { QueryWithLoading } from "../../../components/QueryWithLoading";
import { SessionLoginRequestResult } from "../../../models";
import { styled } from "../../../styled";
import { useSnackbars } from "../../display";
import { l } from "../../localization";
import { FormHeader } from "./FormHeader";
import { FormType } from "./FormType";
import { getLocalizedTextFieldProps } from "./getLocalizedTextFieldProps";
import { getValidationSchema } from "./getValidationSchema";
import { LoginMutation, LoginMutationFn } from "./LoginMutation";
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

const handleFormSubmit = async (
  formType: FormType,
  values: Values,
  setSubmitting: (isSubmitting: boolean) => any,
  loginMutation: LoginMutationFn,
) => {
  let wasSuccessful: boolean = false;
  try {
    switch (formType) {
      case "user-sign-up": {
        break;
      }

      case "user-sign-in":
      case "admin-sign-in": {
        const result = await loginMutation({
          variables: {
            phoneNumber: values.phoneNumber,
            password: values.password,
          },
        });
        wasSuccessful =
          !!result &&
          result.data!.userLogin === SessionLoginRequestResult.VALID;
        /* tslint:disable-next-line:no-console */
        console.log({ result });
        break;
      }
    }
  } catch (e) {
    //
  }
  setSubmitting(false);
  return wasSuccessful;
};

const handleRedirect = (formType: FormType, wasSuccessful: boolean) => {
  if (!wasSuccessful) return;
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://www.joinuniform.com";
  const pageUrl =
    formType === "admin-sign-in" ? "/admin/dashboard" : "/dashboard";
  document.location!.assign(`${baseUrl}${pageUrl}`);
};

export const SessionForm: SFC<Props> = props => {
  const addSnackbarMessage = useSnackbars();
  const { type } = props;

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
          <LoginMutation>
            {loginMutationFn => (
              <Formik<typeof initialValues>
                initialValues={initialValues}
                onSubmit={async (
                  values,
                  { setSubmitting, setFieldValue, setTouched },
                ) => {
                  const wasSuccessful = await handleFormSubmit(
                    type,
                    values,
                    setSubmitting,
                    loginMutationFn,
                  );
                  setFieldValue("password", "");
                  setFieldValue("passwordVerify", "");
                  setTouched({ password: false, passwordVerify: false });
                  handleRedirect(type, wasSuccessful);
                  if (type !== "user-sign-up" && !wasSuccessful) {
                    addSnackbarMessage("Invalid account or password.");
                  }
                }}
                validationSchema={validationSchema}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Card>
                      <CardHeader
                        title={<FormHeader>{formTitle}</FormHeader>}
                      />

                      <CardContent>
                        {textFields.map(({ name, element }) =>
                          cloneElement(element, {
                            value: values[name],
                            error: touched[name] && !!errors[name],
                            label: errors[name],
                            onChange: handleChange,
                            onBlur: handleBlur,
                            disabled: isSubmitting,
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
                              error={
                                !!touched.termsAgreed && !!errors.termsAgreed
                              }
                            />
                          )}
                        </SecondaryActionWrapper>
                      </CardActionsMarginBottom>
                    </Card>
                  </form>
                )}
              </Formik>
            )}
          </LoginMutation>
        );
      }}
    </QueryWithLoading>
  );
};

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
