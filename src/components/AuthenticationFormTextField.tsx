import { TextField, Tooltip } from "@material-ui/core";
import { StandardTextFieldProps } from "@material-ui/core/TextField";
import { TooltipProps } from "@material-ui/core/Tooltip";
import { ArrowDropUp as ArrowIcon } from "@material-ui/icons";
import { ConsumerProps } from "react";
import styled from "styled-components";

export type AuthenticationFormTextFieldProps = OmitStrict<
  StandardTextFieldProps,
  "variant" | "fullWidth" | "InputProps"
> & {
  InputProps?: AuthenticationFormTextFieldInputProps;
};

type AuthenticationFormTextFieldInputProps = OmitStrict<
  NonNullable<StandardTextFieldProps["InputProps"]>,
  "disableUnderline"
>;

/**
 * Material UI `TextField`, styled as a flat square input. It is set to take the
 * full width of the container and removes the default underline style. It also
 * provides an error tooltip.
 */
export function AuthenticationFormTextField(
  props: AuthenticationFormTextFieldProps,
) {
  const { error, label, InputProps, ...rest } = props;

  const open = !!error;

  const title = label ? (
    <>
      {label}
      <StyledArrowIcon />
    </>
  ) : (
    ""
  );

  return (
    <StyledTooltip
      title={title}
      open={open}
      placement="bottom-end"
      disableTouchListener
    >
      <StyledTextField
        {...rest}
        variant="standard"
        fullWidth
        InputProps={{
          ...InputProps,
          disableUnderline: true,
        }}
      />
    </StyledTooltip>
  );
}

const StyledArrowIcon = styled(ArrowIcon)`
  position: absolute;
  right: -6px;
  top: -6px;
  color: #ff0000;
`;

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

function StyledTooltip(props: TooltipProps) {
  return (
    <TooltipClassProvider>
      {tooltipClass => (
        <Tooltip {...props} classes={{ tooltip: tooltipClass }}></Tooltip>
      )}
    </TooltipClassProvider>
  );
}

const StyledTextField = styled(TextField)`
  margin: 8px 0;

  .MuiInput-input {
    width: calc(100% - 24px);
    height: inherit;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid #e0e0e0;
    background-color: #fcfcfc;
    transition: ${props =>
      props.theme.transitions.create(["border-color", "box-shadow"])};
  }

  .MuiInput-input:disabled {
    background-color: #eee;
  }

  .MuiInput-input::placeholder {
    color: #828282;
    opacity: 1;
  }

  .MuiInput-input:focus {
    border-color: #f9d017;
    box-shadow: 0 0 0 0.05rem rgba(249, 208, 23, 0.25);
  }
`;
