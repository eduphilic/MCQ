import React, { SFC } from "react";
import { INavigationLink } from "../../models/INavigationLink";

export type DrawerContentsProps = {
  links: INavigationLink[];
};

export const DrawerContents: SFC<DrawerContentsProps> = props => {
  const { links } = props;

  return <div>{links.toString()}</div>;
};
