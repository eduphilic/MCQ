export { createProvider } from "./createProvider";
export { RootState } from "./rootState";
import * as models from "./models";

import * as adminActions from "./admin/actions";
import * as appActions from "./app/actions";

export const actions = {
  app: appActions,
  admin: adminActions,
};

export { models };
