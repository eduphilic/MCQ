import { LoadingSpinner } from "@join-uniform/components";
import React, {
  Attributes,
  ComponentType,
  ReactElement,
  ReactNode,
} from "react";
import { OperationVariables, QueryProps, QueryResult } from "react-apollo";

export type LoadedQueryResult<
  TData = any,
  TVariables = OperationVariables
> = Omit<QueryResult<TData, TVariables>, "data"> & {
  data: NonNullable<QueryResult<TData, TVariables>["data"]>;
};

export type WithQueryLoadingSpinnerChildren<
  TData = any,
  TVariables = OperationVariables
> = (result: LoadedQueryResult<TData, TVariables>) => ReactNode;

export type WithQueryLoadingSpinnerOptions<
  TData = any,
  TVariables = OperationVariables
> = Omit<QueryProps<TData, TVariables>, "children" | "query"> & Attributes;

export function withQueryLoadingSpinner<
  TData = any,
  TVariables = OperationVariables
>(
  QueryComponent: ComponentType<Partial<QueryProps<TData, TVariables>>>,
  children: WithQueryLoadingSpinnerChildren<TData, TVariables>,
): ReactElement<any>;

export function withQueryLoadingSpinner<
  TData = any,
  TVariables = OperationVariables
>(
  QueryComponent: ComponentType<Partial<QueryProps<TData, TVariables>>>,
  options: WithQueryLoadingSpinnerOptions<TData, TVariables>,
  children: WithQueryLoadingSpinnerChildren<TData, TVariables>,
): ReactElement<any>;

export function withQueryLoadingSpinner<
  TData = any,
  TVariables = OperationVariables
>(
  QueryComponent: ComponentType<Partial<QueryProps<TData, TVariables>>>,
  optionsOrChildren:
    | WithQueryLoadingSpinnerChildren<TData, TVariables>
    | WithQueryLoadingSpinnerOptions<TData, TVariables>,
  maybeChildren?: WithQueryLoadingSpinnerChildren<TData, TVariables>,
) {
  const children = (maybeChildren ||
    optionsOrChildren) as WithQueryLoadingSpinnerChildren<TData, TVariables>;
  const options: WithQueryLoadingSpinnerOptions<
    TData,
    TVariables
  > = maybeChildren
    ? (optionsOrChildren as WithQueryLoadingSpinnerOptions<TData, TVariables>)
    : {};

  return (
    <QueryComponent {...options}>
      {result => {
        if (result.loading || result.error) return <LoadingSpinner />;

        return children(result as LoadedQueryResult<TData, TVariables>);
      }}
    </QueryComponent>
  );
}
