import { ApolloLink, Operation } from "apollo-link";
import {
  mutationCounterDecrement,
  mutationCounterIncrement,
} from "../SubmissionProgressDialog";

/**
 * Updates the count of currently inflight Apollo mutation operations. This is
 * used by the SubmissionProgressDialog component to display a dialog while
 * operations are in progress.
 */
export const mutationCounterLink = new ApolloLink((operation, forward) => {
  const isMutation = isMutationOperation(operation);

  if (isMutation) mutationCounterIncrement();

  return forward
    ? forward(operation).map(fetchResult => {
        mutationCounterDecrement();
        return fetchResult;
      })
    : null;
});

/**
 * Returns whether or not the current operation is performing a mutation.
 *
 * @param operation Apollo operation.
 */
function isMutationOperation(operation: Operation) {
  if (
    operation.query.kind === "Document" &&
    operation.query.definitions.find(
      d => d.kind === "OperationDefinition" && d.operation === "mutation",
    )
  ) {
    return true;
  }
  return false;
}
