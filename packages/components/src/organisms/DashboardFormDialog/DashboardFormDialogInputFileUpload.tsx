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
export interface DashboardFormDialogInputFileUploadProps
  extends DashboardFormDialogFormInputCommonProps {}

export class DashboardFormDialogInputFileUpload extends Component<
  DashboardFormDialogInputFileUploadProps
> {
  private fileInput = createRef<HTMLInputElement>();

  // @ts-ignore
  private handleChange: EventHandler<ChangeEvent<HTMLInputElement>> = event => {
    /* tslint:disable-next-line:no-console */
    console.log("event", event);
    // event.target.files
  };

  private handleClick: EventHandler<MouseEvent<HTMLDivElement>> = () => {
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
      ...rest
    } = this.props;
    const inputId = `dialog-file-upload-${name}`;

    return (
      <>
        <NativeInputHidden
          // TODO: Once Styled Components accepts createRef, remove "as any".
          innerRef={this.fileInput as any}
          accept={acceptedFileTypes}
          type="file"
        />

        <FormControl
          margin={margin}
          fullWidth={fullWidth}
          onClick={this.handleClick}
        >
          <InputLabel htmlFor={inputId}>{label}</InputLabel>

          <InputReadOnlyClickable
            id={inputId}
            type="text"
            {...rest}
            endAdornment={
              <InputAdornment position="end">
                {/* TODO: Preserve button style but not have it as a button.*/}
                <IconButton>
                  <InsertDriveFile />
                </IconButton>
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
