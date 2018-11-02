import Snackbar from "@material-ui/core/Snackbar";
import React, {
  createContext,
  SFC,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { Button } from "../../components/Button";

const SnackbarsContext = createContext<AddMessageFn | undefined>(undefined);

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "ADD_MESSAGE": {
      const nextState: State = {
        ...state,
        queue: [
          ...state.queue,
          { key: new Date().getTime(), message: action.message },
        ],
      };
      return nextState.open
        ? // Immediately being dismissing the current message to start showing
          // the new one.
          { ...nextState, open: false }
        : reducer(nextState, { type: "PROCESS_QUEUE" });
    }
    case "PROCESS_QUEUE": {
      return state.queue.length > 0
        ? {
            ...state,
            queue: state.queue.slice(1),
            open: true,
            messageInfo: state.queue[0],
          }
        : state;
    }
    case "CLOSE": {
      return action.reason === "clickaway" ? state : { ...state, open: false };
    }
    case "EXIT": {
      return reducer(state, { type: "PROCESS_QUEUE" });
    }
    default:
      return state;
  }
};

export const SnackbarsProvider: SFC = ({ children }) => {
  const [state, dispatch] = useReducer<State, Actions>(reducer, {
    open: false,
    queue: [],
    messageInfo: { key: 0, message: "" },
  });
  const addMessage = useMemo(
    () => (message: string) => {
      dispatch({ type: "ADD_MESSAGE", message });
    },
    [],
  );

  return (
    <SnackbarsContext.Provider value={addMessage}>
      <>
        {children}
        <Snackbar
          key={state.messageInfo.key}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={state.open}
          autoHideDuration={6000}
          onClose={(_e, reason) => dispatch({ type: "CLOSE", reason })}
          onExited={() => dispatch({ type: "EXIT" })}
          message={state.messageInfo.message}
          action={[
            <Button
              key="close"
              color="yellow"
              size="small"
              onClick={() => dispatch({ type: "CLOSE" })}
            >
              Close
            </Button>,
          ]}
        />
      </>
    </SnackbarsContext.Provider>
  );
};

export const useSnackbars = () => {
  const snackbarsContext = useContext(SnackbarsContext);
  if (!snackbarsContext) {
    throw new Error("useSnackbars used outside of its provider.");
  }
  return snackbarsContext;
};

type AddMessageFn = (message: string) => void;

type MessageInfo = {
  key: number;
  message: string;
};

type State = {
  queue: MessageInfo[];
  open: boolean;
  messageInfo: MessageInfo;
};

type Actions =
  | {
      type: "CLOSE";
      reason?: string;
    }
  | {
      type: "EXIT";
    }
  | {
      type: "PROCESS_QUEUE";
    }
  | {
      type: "ADD_MESSAGE";
      message: string;
    };
