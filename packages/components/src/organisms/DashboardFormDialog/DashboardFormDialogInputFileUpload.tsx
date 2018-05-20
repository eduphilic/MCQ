import React, {
  ChangeEvent,
  Component,
  createRef,
  EventHandler,
  MouseEvent,
} from "react";
import styled from "styled";

import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

import { DashboardFormDialogFormInputCommonProps } from "./DashboardFormDialogFormInputCommonProps";

// tslint:disable-next-line:no-empty-interface
export interface DashboardFormDialogInputFileUploadProps<Values extends object>
  extends DashboardFormDialogFormInputCommonProps<Values> {}

export class DashboardFormDialogInputFileUpload<
  Values extends object
> extends Component<DashboardFormDialogInputFileUploadProps<Values>> {
  private fileInput = createRef<HTMLInputElement>();

  private handleChange: EventHandler<ChangeEvent<HTMLInputElement>> = event => {
    const { files } = event.target;
    if (!files || files.length === 0) return;

    const { setFieldValue, name } = this.props;

    if (!setFieldValue) {
      throw new Error(
        "DashboardFormDialogInputFileUpload requires setFieldValue.",
      );
    }
    if (!name) {
      throw new Error("DashboardFormDialogInputFileUpload requires name.");
    }

    setFieldValue(name, files[0]);
  };

  private handleClick: EventHandler<MouseEvent<HTMLDivElement>> = event => {
    // Prevent control from gaining focus.
    event.preventDefault();

    if (this.fileInput.current) this.fileInput.current.click();
  };

  render() {
    const {
      acceptedFileTypes,
      name,
      label,
      margin,
      fullWidth,
      placeholder,
      value,

      // Prevent DOM errors from unused additional props.
      setFieldValue,

      ...rest
    } = this.props;

    const inputId = `dialog-file-upload-${name}`;
    const valueAsFileOrNull = (value as any) as File | null;
    const filename = valueAsFileOrNull ? valueAsFileOrNull.name : "";

    return (
      <>
        <NativeInputHidden
          // TODO: Once Styled Components accepts createRef, remove "as any".
          innerRef={this.fileInput as any}
          accept={acceptedFileTypes}
          type="file"
          onChange={this.handleChange}
        />

        <FormControl
          margin={margin}
          fullWidth={fullWidth}
          // Using mousedown event to prevent focus from being transferred to
          // control. This prevents the unwanted animation where the text label
          // moves up.
          onMouseDown={this.handleClick}
        >
          <InputLabel htmlFor={inputId}>{label}</InputLabel>

          <InputReadOnlyClickable
            id={inputId}
            type="text"
            value={filename}
            {...rest}
            endAdornment={
              <InputAdornment position="end">
                <IconButtonNoHoverStyled>
                  <InsertDriveFile />
                </IconButtonNoHoverStyled>
              </InputAdornment>
            }
          />
        </FormControl>
      </>
    );
  }
}

const NativeInputHidden = styled.input`
  display: none;
`;

const InputReadOnlyClickable = styled(Input).attrs({
  classes: {
    input: "input",
  },
  inputProps: {
    readOnly: true,
  },
})`
  .input {
    cursor: pointer;
  }
`;

const IconButtonNoHoverStyled = styled(IconButton)`
  &:hover {
    background-color: transparent;
  }
`;
