import { navigationLinksAll } from "common/structures/navigationLinksAll";
import { strings } from "localization";

const defaultOptions = {
  withoutProductName: false,
};

export const getPageTitleFromLocation = (
  location: string,
  options: Partial<typeof defaultOptions> = defaultOptions,
): string => {
  const page = navigationLinksAll.find(l => l.to === location);

  let title = page ? strings[page.titleLocalizationKey] : "";
  title = `${title}${title.length > 0 ? " - " : ""}JoinUniform`;

  if (options.withoutProductName) title = title.replace(/- JoinUniform$/, "");

  return title;
};
