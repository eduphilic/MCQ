export interface AppState {
  authenticationToken: string | null;
}

export const initialAppState: AppState = {
  authenticationToken: null,
};
