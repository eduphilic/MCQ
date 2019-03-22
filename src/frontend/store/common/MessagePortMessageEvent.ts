/**
 * A web worker message with its associated port.
 */
export type MessagePortMessageEvent = {
  port: MessagePort;
  event: MessageEvent;
};
