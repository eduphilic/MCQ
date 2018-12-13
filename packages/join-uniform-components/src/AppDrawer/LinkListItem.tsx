import { styled } from "@join-uniform/theme";
import ListItem from "@material-ui/core/ListItem";
import ListItemText, {
  ListItemTextProps,
} from "@material-ui/core/ListItemText";
import React, { FC } from "react";
import { AppDrawerLinkProps } from "./AppDrawerLinkProps";

export function LinkListItem(props: AppDrawerLinkProps) {
  const { LinkComponent, href, title } = props;

  return (
    <LinkComponent href={href}>
      <ListItem button component="a" href={href}>
        <ListItemTextWithActiveStyle>{title}</ListItemTextWithActiveStyle>
      </ListItem>
    </LinkComponent>
  );
}

const ListItemTextWithActiveStyle = styled(ListItemText as FC<
  ListItemTextProps
>)`
  span {
    color: ${({ theme }) => theme.palette.text.secondary};

    .active & {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
`;
