import Tooltip, { TooltipProps } from "@material-ui/core/Tooltip";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { ArrowDropUp as ArrowIcon } from "@material-ui/icons";
import { Field, FieldProps, FormikErrors } from "formik";
import React, { ConsumerProps, ReactNode } from "react";
import styled from "styled-components";

export type AuthenticationFormValues = Record<string, string | boolean>;

type Props<V extends AuthenticationFormValues> = {
  children: TooltipProps["children"];
  name: keyof V;
};

export function AuthenticationFormTooltip<V extends AuthenticationFormValues>(
  props: Props<V>,
) {
  const { children, name } = props;

  return (
    <TooltipClassProvider>
      {tooltipClass => (
        <Field name={name}>
          {({ form }: FieldProps<V>) => (
            <Tooltip
              open={!!form.errors[name] && !!form.touched[name]}
              title={<Title>{form.errors[name]}</Title>}
              classes={{ tooltip: tooltipClass }}
              placement="bottom-end"
              disableFocusListener
              disableHoverListener
              disableTouchListener
              TransitionComponent={NoopTransition}
            >
              {children}
            </Tooltip>
          )}
        </Field>
      )}
    </TooltipClassProvider>
  );
}

const TooltipClassProvider = styled(
  ({ children, className }: ConsumerProps<string> & { className?: string }) => (
    <>{children(className!)}</>
  ),
)`
  margin-top: 8px;
  color: #000;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
`;

const StyledArrowIcon = styled(ArrowIcon)`
  position: absolute;
  right: -6px;
  top: -6px;
  color: #ff0000;
`;

function Title<V extends AuthenticationFormValues>(props: {
  children?: FormikErrors<V>[keyof V];
}) {
  const { children } = props;

  return (
    <>
      {children}
      <StyledArrowIcon />
    </>
  );
}

/**
 * Removes the default Tooltip `Transition` component to avoid `StrictMode`
 * warning message.
 */
function NoopTransition(props: TransitionProps & { children?: ReactNode }) {
  const { children } = props;

  return <>{children}</>;
}
