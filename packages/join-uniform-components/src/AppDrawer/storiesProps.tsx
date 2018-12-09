import React, { cloneElement, Fragment, ReactElement } from "react";
import { AppDrawerProps } from "./AppDrawer";
import logoImage from "./storiesPlaceholderLogo.png";

export const storiesProps: AppDrawerProps = {
  theme: "admin",
  logoSrc: logoImage,
  links: [
    { href: "/", title: "Dashboard" },
    { href: "/entry-manager", title: "Entry Manager" },
  ],
  LinkComponent: DummyLinkComponent,
};

function DummyLinkComponent(props: {
  children?: ReactElement<{ className?: string }>;
  href: string;
}) {
  const { href } = props;
  let { children } = props;

  if (children) {
    children = cloneElement(children!, {
      className: `${children.props.className || ""}${href === "/" ? " active" : ""}` // prettier-ignore
    });
  }

  return <Fragment>{children}</Fragment>;
}
