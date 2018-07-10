import React, { SFC } from "react";
import styled, { withProps } from "styled";
import { IEntry } from "../../models/IEntry";

import Typography from "@material-ui/core/Typography";

import { BlockImage } from "components/BlockImage";
import { Button } from "components/Button";
import { CheckmarkableCircle } from "./CheckmarkableCircle";

export type EntrySelectItemProps = {
  /**
   * An available Entry to subscribe to.
   */
  entry: IEntry;

  /**
   * Whether item is selected.
   */
  selected: boolean;

  /**
   * Called when item is clicked.
   */
  onClick: () => void;
};

/**
 * Entry (military branch) selection item.
 */
export const EntrySelectItem: SFC<EntrySelectItemProps> = props => {
  const { entry, selected, onClick } = props;

  return (
    <StyledButton selected={selected} onClick={onClick}>
      <StyledBlockImage src={entry.logoUrlByWidth["48"]} />

      <TextWrapper>
        {/* TODO: Use localization utility to select current language. */}
        <Label>{entry.title.en}</Label>

        {entry.subtitle && (
          <AdditionalDescriptionText>
            {/* TODO: Use localization utility to select current language. */}
            {entry.subtitle.en}
          </AdditionalDescriptionText>
        )}
      </TextWrapper>

      <CheckmarkableCircle color="secondary" checked={selected} />
    </StyledButton>
  );
};

const StyledButton = withProps<{ selected: boolean }>()(styled(Button))`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: ${props => props.theme.spacing.unit}px !important;
  padding-right: ${props => props.theme.spacing.unit * 2}px !important;
  background-color: #fff !important;

  &:hover {
    background-color: #f9f9f9;
  }

  ${props =>
    props.selected
      ? `
          border: 1px solid ${props.theme.palette.secondary.main};
        `
      : ""}
`;

const StyledBlockImage = styled(BlockImage)`
  width: 48px;
  height: 48px;
  margin-right: ${({ theme }) => theme.spacing.unit}px;
`;

const textWrapperSizeAdjustment =
  48 /* entry logo width */ +
  8 /* entry logo right margin */ +
  24 /* selection circle width */;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${textWrapperSizeAdjustment}px);
`;

const Label = styled(Typography).attrs({
  variant: "body1",
})`
  flex: 1;
  font-size: 16px;
  text-align: left;
`;

const AdditionalDescriptionText = Label.extend`
  font-weight: 500;
  font-size: 14px;
  color: #4db7f1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
