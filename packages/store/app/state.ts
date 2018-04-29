import { User } from "../models";

export interface AppState {
  authenticationToken: string | null;
  authenticationError: string | null;
  user: User | null;
}

export const initialAppState: AppState = {
  authenticationToken: null,
  authenticationError: null,
  user: null,
};
