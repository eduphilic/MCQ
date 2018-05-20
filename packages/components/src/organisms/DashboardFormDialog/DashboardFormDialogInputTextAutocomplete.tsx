import Downshift from "downshift";
import React, { ChangeEvent, Component } from "react";

import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";

import { DashboardFormDialogFormInputCommonProps } from "./DashboardFormDialogFormInputCommonProps";

// tslint:disable-next-line:no-empty-interface
export interface DashboardFormDialogInputTextAutocompleteProps<
  Values extends object
> extends DashboardFormDialogFormInputCommonProps<Values> {}

export class DashboardFormDialogInputTextAutocomplete<
  Values extends object
> extends Component<DashboardFormDialogInputTextAutocompleteProps<Values>> {
  private inputRef: HTMLInputElement | null = null;

  render() {
    const {
      suggestions,
      error,
      fullWidth,
      margin,
      label,
      onChange,
      value,
      name,

      // Prevent DOM errors from unused additional props.
      setFieldValue,
      acceptedFileTypes,

      ...rest
    } = this.props;

    if (!suggestions) {
      throw new Error(
        "No autocomplete suggestions were provided to autocomplete input type.",
      );
    }

    return (
      // Downshift is a utility that handles the logic behind autocompletion.
      <Downshift
        defaultInputValue={value as string}
        // We need to intercept input value changes and send them along to
        // Formik so that we can implement type ahead behavior. By default,
        // Downshift only accepts values from suggestions. If we manage the
        // value state in Formik we get type ahead behavior.
        // ref: https://codesandbox.io/s/82m2px40q9
        onStateChange={({ inputValue }) => {
          // Ignore all state changes except the input value change event.
          if (!inputValue) return;

          // Formik relies on a React change event. Downshift just gives us the
          // changed value. Here we implement a fake event to satisfy Formik's
          // requirements.
          // tslint:disable-next-line:no-object-literal-type-assertion
          const customInputChangeEvent = {
            // tslint:disable-next-line:no-empty
            persist: () => {},
            target: {
              name,
              value: inputValue,
            },
          } as ChangeEvent<HTMLInputElement>;

          // Hopefully we don't encounter any errors thrown doing this. Adding
          // a custom error here in case a future api change in Formik causes
          // this to stop working. This error will hopefully aid in tracking
          // down the issue.
          try {
            if (onChange) onChange(customInputChangeEvent);
          } catch (e) {
            // tslint:disable-next-line:no-console
            console.warn(
              `Warning submitting change to outer Formik component: ${e}`,
            );
            throw e;
          }
        }}
        // Refer to Formik's value per the comments on onStateChange.
        selectedItem={value}
      >
        {({
          getInputProps,
          isOpen,
          inputValue,
          getItemProps,
          highlightedIndex,
          selectedItem,
        }) => {
          const { ref, ...inputProps } = getInputProps();

          return (
            <div>
              <TextField
                error={error}
                fullWidth={fullWidth}
                margin={margin}
                label={label}
                // Downshift needs to ref to the DOM input element. It is
                // currently wrapped by Material UI in a composite component.
                // ref: https://github.com/paypal/downshift#getrootprops
                InputProps={{
                  // inputRef: ref,
                  inputRef: c => (this.inputRef = c),
                  ...inputProps,
                }}
                {...rest}
              />
              {getSuggestions(suggestions, inputValue!).length > 0 && (
                <Popover
                  open={isOpen}
                  anchorEl={this.inputRef || undefined}
                  disableAutoFocus
                  disableEnforceFocus
                  disableRestoreFocus
                  disableBackdropClick
                  hideBackdrop
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  BackdropProps={{ open: false }}
                >
                  <Paper
                    square
                    style={{
                      width: this.inputRef
                        ? this.inputRef.clientWidth
                        : undefined,
                    }}
                  >
                    {getSuggestions(suggestions, inputValue!).map(
                      (suggestion, index) =>
                        renderSuggestion(
                          suggestion,
                          index,
                          getItemProps({ item: suggestion }),
                          highlightedIndex,
                          selectedItem,
                        ),
                    )}
                  </Paper>
                </Popover>
              )}
            </div>
          );
        }}
      </Downshift>
    );
  }
}

// ref: https://material-ui-next.com/demos/autocomplete/#downshift
function getSuggestions(suggestions: string[], inputValue: string) {
  let count = 0;

  return suggestions.filter(suggestion => {
    const keep =
      (!inputValue ||
        suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

// ref: https://material-ui-next.com/demos/autocomplete/#downshift
function renderSuggestion(
  suggestion: string,
  index: number,
  itemProps: object,
  highlightedIndex: number | null,
  selectedItem: string,
) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || "").indexOf(suggestion) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion}
    </MenuItem>
  );
}
