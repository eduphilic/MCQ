import { ComponentType, ReactElement } from "react";
import { LocalizationKey } from "types";

/**
 * Represents a navigation link for use in the side drawer and bottom navigation
 * components.
 */
export interface INavigationLink {
  /** Link title's localization key. */
  titleLocalizationKey: LocalizationKey;

  /** The location to link to. */
  to: string;

  /** Page component. */
  component: ComponentType<any>;

  /** Optional icon to provide for navigation drawers and bottom navs. */
  iconElement?: ReactElement<any>;

  /** Whether the link is disabled or not. */
  disabled?: boolean;
}
