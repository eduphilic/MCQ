import { DBIndexCard } from "./DBIndexCard";

export const indexCardDefaults: Omit<DBIndexCard, "id" | "categories"> = {
  colorBlock: "#e2f0d9",
  colorCategoryBackground: "#c5e0b4",
  colorLogoBackground: "#c5e0b4",
  colorTitle: "#404040",
};
