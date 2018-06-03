import { User } from "../models";

export type AppState = typeof initialAppState;

export const initialAppState = {
  authenticationToken: null as string | null,
  authenticationError: null as string | null,
  authenticating: false,

  user: null as User | null,
};
