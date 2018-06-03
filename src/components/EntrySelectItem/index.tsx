import React, { SFC } from "react";
import styled, { withProps } from "styled";

import Typography from "@material-ui/core/Typography";

import { Button } from "components/Button";
import { CheckmarkableCircle } from "components/CheckmarkableCircle";
import { EntryLogo, EntryLogoProps } from "components/EntryLogo";

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
   * Education requirement or entry explanation. Shown under label.
   */
  additionalDescriptionText?: string;

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
  const {
    icon: entry,
    label,
    additionalDescriptionText,
    selected,
    onClick,
  } = props;

  return (
    <StyledButton selected={selected} onClick={onClick}>
      <Logo entry={entry} />
      <TextWrapper>
        <Label>{label}</Label>
        {additionalDescriptionText && (
          <AdditionalDescriptionText>
            {additionalDescriptionText}
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
  background-color: #fff;

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

const Logo = styled(EntryLogo)`
  width: 48px;
  height: 48px;
  margin-right: ${props => props.theme.spacing.unit}px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
`;
