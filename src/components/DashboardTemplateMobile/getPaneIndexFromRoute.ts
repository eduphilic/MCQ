import { NavigationLinks } from "common/types/NavigationLinks";
import { RouteComponentProps } from "react-router-dom";

type History = RouteComponentProps<any>["history"];

/**
 * Returns the pane index that corresponds to either the current route or the
 * route passed in to "routerPath".
 */
export const getPaneIndexFromRoute = (
  links: NavigationLinks,
  history: History,
  routerPath?: string,
) => {
  const matchPath = routerPath || history.location.pathname;

  const paneIndex = links.findIndex(l => l.to === matchPath);
  return paneIndex;
};
