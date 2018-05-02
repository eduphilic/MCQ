import { AdminActions } from "./admin/actions";
import { AppActions } from "./app/actions";

export type RootActions = AppActions | AdminActions;
