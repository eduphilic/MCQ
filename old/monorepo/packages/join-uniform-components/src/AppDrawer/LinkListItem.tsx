import { styled } from "@join-uniform/theme";
import ListItem from "@material-ui/core/ListItem";
import ListItemText, {
  ListItemTextProps,
} from "@material-ui/core/ListItemText";
import React, { FC } from "react";
import { AppDrawerLinkProps } from "./AppDrawerLinkProps";

export function LinkListItem(props: AppDrawerLinkProps) {
  const { LinkComponent, href, title, hiddenSubPage } = props;

  return (
    <LinkComponent href={href}>
      {active => {
        if (!active && hiddenSubPage) return <></>;

        return (
          <ListItem
            button
            component="a"
            href={href}
            selected={active}
            classes={{ selected: "selected" }}
          >
            <ListItemTextWithActiveStyle
              inset={hiddenSubPage}
              classes={{ inset: "inset" }}
            >
              {title}
            </ListItemTextWithActiveStyle>
          </ListItem>
        );
      }}
    </LinkComponent>
  );
}

const ListItemTextWithActiveStyle = styled(ListItemText as FC<
  ListItemTextProps
>)`
  span {
    color: ${({ theme }) => theme.palette.text.secondary};

    .selected & {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }

  &.inset {
    padding-left: 24px;
  }
`;
