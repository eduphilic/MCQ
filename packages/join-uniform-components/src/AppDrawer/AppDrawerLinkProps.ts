import { ComponentType } from "react";

export type AppDrawerLinkProps = {
  /** Url  */
  href: string;

  /** Link title. */
  title: string;

  /**
   * Component to wrap list item in to handle routing.
   *
   * The component should add a "active" class to its parent child when the page
   * matches the current viewed url.
   */
  LinkComponent: ComponentType<{ href: string }>;
};
