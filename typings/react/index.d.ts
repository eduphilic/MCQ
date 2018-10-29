import "react";

declare module "react" {
    //
    // Hooks
    // ----------------------------------------------------------------------

    export function useState<T>(initialState: T | (() => T)): [T, (nextState: T | ((prevState: T) => T)) => void];
    export function useEffect(create: () => (void | (() => void)), inputs?: ReadonlyArray<unknown>): void;
    export function useContext<T>(foo: React.Context<T>): T;
    export function useReducer<S, A>(reducer: (state: S, action: A) => S, initialState: S): [S, (action: A) => void];
    export function useCallback<F extends (...args: never[]) => unknown>(callback: F, inputs?: ReadonlyArray<unknown>): F;
    export function useMemo<T>(create: () => T, inputs?: ReadonlyArray<unknown>): T;
    export function useRef<T extends unknown>(initialValue?: T): { current: T };
    export function useImperativeMethods<T>(ref: React.Ref<T>, createInstance: () => T, inputs?: ReadonlyArray<unknown>): void;
    export const useMutationEffect: typeof useEffect;
    export const useLayoutEffect: typeof useEffect;
}
