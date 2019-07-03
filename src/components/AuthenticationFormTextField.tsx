import { TextField } from "@material-ui/core";
import { StandardTextFieldProps } from "@material-ui/core/TextField";
import styled from "styled-components";
import { AuthenticationFormTooltip } from "./AuthenticationFormTooltip";

export type AuthenticationFormTextFieldProps = OmitStrict<
  StandardTextFieldProps,
  "variant" | "fullWidth" | "InputProps" | "label"
> & {
  InputProps?: AuthenticationFormTextFieldInputProps;
  label?: string;
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

  return (
    <AuthenticationFormTooltip title={label} open={open}>
      <StyledTextField
        {...rest}
        variant="standard"
        fullWidth
        InputProps={{
          ...InputProps,
          disableUnderline: true,
        }}
      />
    </AuthenticationFormTooltip>
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
