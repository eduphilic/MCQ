import Downshift from "downshift";
import React, { Component, createRef } from "react";
// import styled from "styled";

import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";

import { DashboardFormDialogFormInputCommonProps } from "./DashboardFormDialogFormInputCommonProps";

// tslint:disable-next-line:no-empty-interface
export interface DashboardFormDialogInputTextAutocompleteProps
  extends DashboardFormDialogFormInputCommonProps {}

export class DashboardFormDialogInputTextAutocomplete extends Component<
  DashboardFormDialogInputTextAutocompleteProps
> {
  private containerRef = createRef<HTMLDivElement>();

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
        // We need to implement an adapter around Downshift's onChange event
        // because it only sends the changed value and not the source event.
        // We use Formik above this component which expects to receive a React
        // event.
        onChange={newValue => {
          try {
            onChange!({
              // tslint:disable-next-line:no-empty
              persist: () => {},
              target: { value: newValue, inputType: "text", name },
            } as any);
          } catch (e) {
            // tslint:disable-next-line:no-console
            console.warn(
              `Warning submitting change to upper Formik component: ${e}`,
            );
          }
        }}
        // We modify Downshift's reducer so that text that isn't in the
        // suggestion list is also accepted. This allows the user to type new
        // items in the auto complete box.
        stateReducer={(state, changes) => {
          switch (changes.type) {
            case Downshift.stateChangeTypes.mouseUp:
              return {
                ...state,
                ...changes,
                inputValue: state.inputValue!,
                selectedItem: state.inputValue,
              };
            default:
              return changes;
          }
        }}
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
            <div ref={this.containerRef}>
              <TextField
                error={error}
                fullWidth={fullWidth}
                margin={margin}
                label={label}
                // Downshift needs to ref to the DOM input element. It is
                // currently wrapped by Material UI in a composite component.
                // ref: https://github.com/paypal/downshift#getrootprops
                InputProps={{
                  inputRef: ref,
                  ...inputProps,
                }}
                {...rest}
              />
              {getSuggestions(suggestions, inputValue!).length > 0 && (
                <Popover
                  open={isOpen}
                  anchorEl={ref || undefined}
                  disableAutoFocus
                  disableEnforceFocus
                  disableRestoreFocus
                  disableBackdropClick
                  hideBackdrop
                  BackdropProps={{ open: false }}
                >
                  <Paper square>
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
