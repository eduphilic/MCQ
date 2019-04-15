import { ReactElement, ReactNode } from "react";
import { AppDrawerProps } from "./AppDrawer";
import logoImage from "./storiesPlaceholderLogo.png";

export const storiesProps: AppDrawerProps = {
  theme: "admin",
  logoSrc: logoImage,
  links: [
    { href: "/", title: "Dashboard" },
    { href: "/entry-manager", title: "Entry Manager" },
    { href: "/entry-manager/new", title: "New", hiddenSubPage: true },
  ],
  LinkComponent: DummyLinkComponent,
};

function DummyLinkComponent(props: {
  children: (active: boolean) => ReactNode;
  href: string;
}) {
  const { children, href } = props;

  return children(href === "/") as ReactElement<any>;
}
