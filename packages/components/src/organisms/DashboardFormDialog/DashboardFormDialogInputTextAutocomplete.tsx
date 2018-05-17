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
      value,
      ...rest
    } = this.props;

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
          // getRootProps,
        }) => {
          const { ref, ...inputProps } = getInputProps({
            ...rest,
            value: value as string,
          });

          return (
            // <Container {...getRootProps({ refKey: "innerRef" })}>
            <div ref={this.containerRef}>
              <TextField
                error={error}
                fullWidth={fullWidth}
                margin={margin}
                label={label}
                InputProps={{ inputRef: ref, ...inputProps }}
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
            // </Container>
          );
        }}
      </Downshift>
    );
  }
}

// const PopoverZ;

// const Container = styled.div`
//   position: relative;
// `;

// const PaperAbsolutePositioning = styled(Paper).attrs({ square: true })`
//   position: absolute;
//   margin-top: ${({ theme }) => theme.spacing.unit}px;
//   z-index: 1;
// `;

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
