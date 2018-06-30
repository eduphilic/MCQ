import { Actions, LocalizationAction } from "./actions";

interface State {
  localizationLanguage: "en" | "hi";
}

const initialState: State = {
  localizationLanguage: "en",
};

export const reducer = (
  state: State = initialState,
  action: Actions,
): State => {
  switch (action.type) {
    case LocalizationAction.SetLocalizationLanguage: {
      const { payload: localizationLanguage } = action;

      return { ...state, localizationLanguage };
    }

    default: {
      return state;
    }
  }
};
