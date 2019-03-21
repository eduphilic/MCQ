import { createGenerateClassName } from "@material-ui/styles";
import { GenerateId, SheetsRegistry } from "jss";

export type PageContext = {
  sheetsManager: Map<unknown, unknown>;
  sheetsRegistry: SheetsRegistry;
  generateClassName: GenerateId;
};

function createPageContext() {
  return {
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  };
}

let pageContext: PageContext | null = null;

export function getPageContext() {
  if (!process.browser) return createPageContext();

  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}
