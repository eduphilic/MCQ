import { FormikProps } from "formik";
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
import { TextFieldProps } from "@material-ui/core/TextField";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

/** Used to help generate unique element id's. */
let instanceCounter = 0;

export interface FormikFileUploadFieldProps<Values extends object>
  extends Pick<
      TextFieldProps,
      "label" | "fullWidth" | "margin" | "placeholder"
    > {
  name: keyof Values;

  formikApi: FormikProps<Values>;

  /**
   * Value to pass to the native input's "accept" attribute. It is used to
   * control the file types allowed for upload.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept
   */
  acceptedFileTypes?: string;
}

/**
 * Provides a file upload text field. It connects to a Formik instance using the
 * provided `formikApi` prop.
 */
export class FormikFileUploadField<Values extends object> extends Component<
  FormikFileUploadFieldProps<Values>
> {
  private fileInput = createRef<HTMLInputElement>();

  private handleChange: EventHandler<ChangeEvent<HTMLInputElement>> = event => {
    const { files } = event.target;
    if (!files || files.length === 0) return;

    const { name, formikApi: api } = this.props;
    const { setFieldValue } = api;

    setFieldValue(name, files[0]);
  };

  private handleClick: EventHandler<MouseEvent<HTMLDivElement>> = event => {
    // Prevent control from gaining focus.
    event.preventDefault();

    if (this.fileInput.current) this.fileInput.current.click();
  };

  render() {
    const {
      name,
      formikApi: api,
      acceptedFileTypes,
      label,
      fullWidth = true,
      margin,
      placeholder,
      ...rest
    } = this.props;

    instanceCounter += 1;
    const inputId = `formik-file-upload-field-${name}-${instanceCounter}`;
    const valueFileOrNull = (api.values as { [P: string]: File | null })[name];
    const filename = valueFileOrNull ? valueFileOrNull.name : placeholder || "";

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
