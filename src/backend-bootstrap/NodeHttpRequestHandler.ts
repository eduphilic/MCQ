import { IncomingMessage, ServerResponse } from "http";

export type NodeHttpRequestHandler = (
  req: IncomingMessage,
  res: ServerResponse,
) => void;
