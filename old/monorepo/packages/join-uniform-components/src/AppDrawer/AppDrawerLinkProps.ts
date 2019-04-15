import { ComponentType, ReactNode } from "react";

export type AppDrawerLinkProps = {
  /** Url  */
  href: string;

  /** Link title. */
  title: string;

  /**
   * Whether or not the page is a hidden sub-page of a main page. If so, the
   * link is only rendered while the currently navigated url matches the link
   * url.
   */
  hiddenSubPage?: boolean;

  /**
   * Component to wrap list item in to handle routing.
   *
   * The component should add a "active" class to its parent child when the page
   * matches the current viewed url.
   */
  LinkComponent: ComponentType<{
    children: (active: boolean) => ReactNode;
    href: string;
  }>;
};
