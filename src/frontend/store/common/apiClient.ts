import { ajax, AjaxRequest } from "rxjs/ajax";
import { Omit } from "utility-types";

type ApiClientRequest = Omit<AjaxRequest, "headers" | "url"> & {
  endpoint: string;
};

// TODO: Detect proper development and production api urls.
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "not implemented";

export function apiClient(apiRequest: ApiClientRequest, apiKey: string | null) {
  const { endpoint, ...apiRequestWithoutEndpoint } = apiRequest;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`;
  }

  const request: AjaxRequest = {
    ...apiRequestWithoutEndpoint,
    headers,
    url: `${BASE_URL}${endpoint}`,
  };

  return ajax(request);
}
