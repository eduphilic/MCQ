import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type AppDrawerContextValue = {
  open: boolean;
  toggle: () => void;
};

const AppDrawerContext = createContext<AppDrawerContextValue>({
  open: false,
  toggle: () => {
    throw new Error(
      "App drawer context consumer used outside context provider.",
    );
  },
});

export function AppDrawerContextProvider(props: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => {
    setOpen(state => !state);
  }, []);
  const value: AppDrawerContextValue = useMemo(
    () => ({
      open,
      toggle,
    }),
    [open],
  );
  const { children } = props;

  return (
    <AppDrawerContext.Provider value={value}>
      {children}
    </AppDrawerContext.Provider>
  );
}

export function useAppDrawerContext() {
  return useContext(AppDrawerContext);
}
