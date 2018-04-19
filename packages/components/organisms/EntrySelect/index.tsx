import React, { Component } from "react";
import styled from "styled";
import { Entry } from "../../atoms/EntryLogo";
import {
  EntrySelectItem,
  EntrySelectItemProps,
} from "../../molecules/EntrySelectItem";

export interface EntrySelectProps {
  /**
   * Item icons and labels. Icon key will be used in the callback as part of the
   * results list.
   */
  entries: { icon: Entry; label: string }[];

  /**
   * Minimum number of selection required. Handler will be called with a boolean
   * indicated whether this requirement has been meet.
   */
  minSelectedCount: number;

  /**
   * Maximum number of items which can be selected at once.
   */
  maxSelectedCount: number;

  /**
   * Called with a boolean indicated whether the minimum number of items have
   * been selected and with the icon keys of the selected items.
   */
  onSelectionChange: (
    hasRequiredSelectionCount: boolean,
    selections: EntrySelectItemProps["icon"][],
  ) => void;
}

export interface EntrySelectState {
  selected: boolean[];
}

/**
 * Entry select provides a list of military services which can be selected. It
 * supports selecting more than one item and requiring a minimum number of
 * selections.
 */
export class EntrySelect extends Component<EntrySelectProps, EntrySelectState> {
  constructor(props: EntrySelectProps) {
    super(props);

    const { entries } = props;
    const selected: boolean[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < entries.length; i += 1) selected.push(false);

    this.state = { selected };
  }

  handleItemClick = (index: number) => {
    const selected = [...this.state.selected];
    const {
      maxSelectedCount,
      minSelectedCount,
      onSelectionChange,
      entries,
    } = this.props;

    // Don't select item if we are at the maximum number of selections.
    const isSelected = selected[index];
    let totalSelected = selected.reduce((acc, s) => acc + (s ? 1 : 0), 0);
    if (!isSelected && totalSelected === maxSelectedCount) return;

    // Update selections.
    selected[index] = !selected[index];
    this.setState({ selected });

    // Call the handler with the new selection list and whether or not the
    // minimum number of selections are selected.
    totalSelected += isSelected ? -1 : 1;
    const hasRequiredSelectionCount = totalSelected >= minSelectedCount;
    const selections = entries.filter((_e, i) => selected[i]).map(e => e.icon);
    onSelectionChange(hasRequiredSelectionCount, selections);
  };

  render() {
    const { entries } = this.props;
    const { selected } = this.state;

    const selectItems = entries.map((entry, index) => (
      <EntrySelectItemWrapper key={index}>
        <EntrySelectItem
          {...entry}
          selected={selected[index]}
          onClick={() => this.handleItemClick(index)}
        />
      </EntrySelectItemWrapper>
    ));

    return <Wrapper>{selectItems}</Wrapper>;
  }
}

// Exported as default only because it seems to be needed for docgen information
// to be properly generated for Storybook.
export default EntrySelect;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const EntrySelectItemWrapper = styled.div`
  ${props => {
    const margin = props.theme.spacing.unit;

    // On mobile, arrange as one item per line. On tablet or wider, two.
    return `
      width: calc(100% - ${margin * 2}px);
      margin: ${margin}px;

      ${props.theme.breakpoints.up("md")} {
        width: calc(50% - ${margin * 2}px);
      }
    `;
  }};
`;
