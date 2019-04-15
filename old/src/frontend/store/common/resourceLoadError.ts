/**
 * Resource load error types.
 */
export enum ResourceLoadErrorType {
  None = "[resource-load-error] None",
  NotFound = "[resource-load-error] Not Found",
  Unauthenticated = "[resource-load-error] Unauthenticated",
  Unknown = "[resource-load-error] Unknown",
}

/**
 * Resource load error.
 */
export type ResourceLoadError = {
  type: ResourceLoadErrorType;
  payload: {
    message: string;
  };
};

/**
 * Creates a `ResourceLoadError`.
 *
 * @param type Resource load error type.
 * @param message Resource load error message.
 */
export function resourceLoadError(
  type: ResourceLoadErrorType,
  message?: string,
): ResourceLoadError {
  return { type, payload: { message: message || "" } };
}
