import { AdminState } from "./admin/state";
import { AppState } from "./app/state";

export interface RootState {
  app: AppState;
  admin: AdminState;
}
