import { FormikProps } from "formik";
import React, {
  ChangeEvent,
  cloneElement,
  Component,
  createRef,
  EventHandler,
  MouseEvent,
  ReactElement,
} from "react";
import styled from "styled";

export interface FormikFileUploadBaseProps<Values extends object> {
  /**
   * Formik field name.
   */
  name: keyof Values;

  /**
   * Formik api passed from its render function.
   */
  formikApi: FormikProps<Values>;

  /**
   * Set as the child's value when no file is currently selected.
   */
  placeholder?: string;

  /**
   * Value to pass to the native input's "accept" attribute. It is used to
   * control the file types allowed for upload.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept
   */
  acceptedFileTypes?: string;

  /**
   * A child component to render. The onMouseDown handler is set so that this
   * component can trigger the onClick event of the internal hidden file input
   * element. onMouseDown is used so that focus behavior can be intercepted.
   */
  children: ReactElement<{ onMouseDown: () => any; value: string }>;
}

/**
 * Provides a file upload base component. It is passed a component which accepts
 * an onClick handler. It connects to a Formik instance using the provided
 * `formikApi` prop.
 */
export class FormikFileUploadBase<Values extends object> extends Component<
  FormikFileUploadBaseProps<Values>
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
    // Prevent control passed through children prop from gaining focus. This is
    // a fix for Material UI styling behavior.
    event.preventDefault();

    if (this.fileInput.current) this.fileInput.current.click();
  };

  render() {
    const {
      name,
      formikApi: api,
      acceptedFileTypes,
      placeholder,
      children,
    } = this.props;

    const valueAsFile = (api.values as { [P: string]: File | null })[name];
    const filename = valueAsFile ? valueAsFile.name : placeholder || "";

    const elementWithProps = cloneElement(children, {
      // Using mousedown event to prevent focus from being transferred to
      // control. This prevents the unwanted animation where the text label
      // moves up in Material UI.
      onMouseDown: this.handleClick,
      value: filename,
    });

    return (
      <>
        <NativeInputHidden
          // TODO: Once Styled Components accepts createRef, remove "as any".
          innerRef={this.fileInput as any}
          accept={acceptedFileTypes}
          type="file"
          onChange={this.handleChange}
        />

        {elementWithProps}
      </>
    );
  }
}

const NativeInputHidden = styled.input`
  display: none;
`;
