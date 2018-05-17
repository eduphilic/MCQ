import Downshift from "downshift";
import React, { Component } from "react";

import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import { DashboardFormDialogFormInputCommonProps } from "./DashboardFormDialogFormInputCommonProps";

// tslint:disable-next-line:no-empty-interface
export interface DashboardFormDialogInputTextAutocompleteProps
  extends DashboardFormDialogFormInputCommonProps {}

export class DashboardFormDialogInputTextAutocomplete extends Component<
  DashboardFormDialogInputTextAutocompleteProps
> {
  render() {
    const { suggestions, ...rest } = this.props;

    if (!suggestions) {
      throw new Error(
        "No autocomplete suggestions were provided to autocomplete input type.",
      );
    }

    return (
      <Downshift>
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
                {...rest}
                InputProps={{ inputRef: ref, ...inputProps }}
              />
              {isOpen ? (
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
              ) : null}
            </div>
          );
        }}
      </Downshift>
    );
  }
}

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
