import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled from "styled";
import { Button } from "../../atoms/Button";
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
}

export const EntrySelectItem: SFC<EntrySelectItemProps> = props => {
  const { icon: entry, label } = props;

  return (
    <Wrapper>
      <Logo entry={entry} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled(Button)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: ${props => props.theme.spacing.unit}px !important;
`;

const Logo = styled(EntryLogo)`
  width: 48px;
  height: 48px;
  margin-right: ${props => props.theme.spacing.unit}px;
`;

const Label = styled(Typography).attrs({
  variant: "body1",
})`
  font-size: 14px;
`;
