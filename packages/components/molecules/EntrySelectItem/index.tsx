import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled, { withProps } from "styled";
import { Button } from "../../atoms/Button";
import { CheckmarkableCircle } from "../../atoms/CheckmarkableCircle";
import { EntryLogo, EntryLogoProps } from "../../atoms/EntryLogo";

export interface EntrySelectItemProps {
  /**
   * Entry (military branch) icon to use.
   */
  icon: EntryLogoProps["entry"];

  /**
   * Label contents.
   */
  label: string;

  /**
   * Whether item is selected.
   */
  selected: boolean;

  /**
   * Called when item is clicked.
   */
  onClick: () => void;
}

/**
 * Entry (military branch) selection item.
 */
export const EntrySelectItem: SFC<EntrySelectItemProps> = props => {
  const { icon: entry, label, selected, onClick } = props;

  return (
    <StyledButton selected={selected} onClick={onClick}>
      <Logo entry={entry} />
      <Label>{label}</Label>
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

  ${props =>
    props.selected
      ? `
          border: 1px solid ${props.theme.palette.secondary.main};
        `
      : ""}
`;

const Logo = styled(EntryLogo)`
  width: 48px;
  height: 48px;
  margin-right: ${props => props.theme.spacing.unit}px;
`;

const Label = styled(Typography).attrs({
  variant: "body1",
})`
  flex: 1;
  font-size: 16px;
  text-align: left;
`;
