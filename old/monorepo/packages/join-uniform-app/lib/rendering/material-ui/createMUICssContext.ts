import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";
import { SheetsRegistry } from "jss";

export type MUICssContext = {
  sheetsManager: Map<any, any>;
  sheetsRegistry: SheetsRegistry;
  generateClassName: ReturnType<typeof createGenerateClassName>;
};

let cachedCssContext: MUICssContext | null = null;

export function createMuiCssContext() {
  // Make sure to create a new context for every server-side request so that
  // data isn't shared between connections (which would be bad).
  if (!process.browser) return createContext();

  // Reuse context on the client-side.
  if (!cachedCssContext) {
    cachedCssContext = createContext();
  }

  return cachedCssContext;

  function createContext() {
    return {
      sheetsManager: new Map(),
      sheetsRegistry: new SheetsRegistry(),
      generateClassName: createGenerateClassName(),
    };
  }
}
