import { css, styled } from "@join-uniform/theme";
import Divider from "@material-ui/core/Divider";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon, {
  ListItemIconProps,
} from "@material-ui/core/ListItemIcon";
import ListItemText, {
  ListItemTextProps,
} from "@material-ui/core/ListItemText";
import React, { FC } from "react";
import { LogoText } from "../LogoText";
import { AppDrawerLinkProps } from "./AppDrawerLinkProps";

type LogoListItemProps = Omit<AppDrawerLinkProps, "title"> & {
  /** Logo image url. Requires a 48px by 48px image. */
  src: string;
};

export function LogoListItem(props: LogoListItemProps) {
  const { src, href, LinkComponent } = props;

  return (
    <>
      <LinkComponent href={href}>
        <Wrapper button>
          <LogoListItemIcon>
            <LogoListItemIconImage src={src} />
          </LogoListItemIcon>
          <LogoListItemText disableTypography>
            <LogoText />
          </LogoListItemText>
        </Wrapper>
      </LinkComponent>

      <Divider />
    </>
  );
}

const listItemHeight = generateToolbarHeightBasedCss(0);
const logoWidth = generateToolbarHeightBasedCss(20, "width");
const logoHeight = generateToolbarHeightBasedCss(20);

const Wrapper = styled(ListItem as FC<ListItemProps>)`
  ${listItemHeight};
  padding: 0px;
  padding-left: 16px;
`;

const LogoListItemIcon = styled(ListItemIcon as FC<ListItemIconProps>)`
  ${logoWidth};
  ${logoHeight};
  margin-right: 12px;
`;

const LogoListItemIconImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const LogoListItemText = styled(ListItemText as FC<ListItemTextProps>)`
  padding-left: 0;
  padding-right: 0;
`;

function generateToolbarHeightBasedCss(
  reduction: number,
  field = "height" as "width" | "height",
) {
  return css`
    ${field}: ${56 - reduction}px;

    ${({ theme }) => theme.breakpoints.up("xs")} and (orientation: landscape) {
      ${field}: ${48 - reduction}px;
    }

    ${({ theme }) => theme.breakpoints.up("sm")} {
      ${field}: ${64 - reduction}px;
    }
  `;
}
