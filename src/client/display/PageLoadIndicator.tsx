import { LinearProgress, Theme } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import Router from "next/router";
import React, { useEffect, useReducer } from "react";
import { fromEventPattern, merge } from "rxjs";
import { mapTo } from "rxjs/operators";

let lastEvent: EventName = "routeChangeComplete";

export function PageLoadIndicator() {
  const [isLoading, setIsLoading] = useReducer(
    (_state, nextIsLoading: boolean) => nextIsLoading,
    lastEvent === "routeChangeStart",
  );

  useEffect(() => {
    const subscription = observeRouteChanges().subscribe({
      next: eventName => {
        lastEvent = eventName;
        setIsLoading(eventName === "routeChangeStart");
      },
    });

    return subscription.unsubscribe.bind(subscription);
  }, []);

  return (
    <Wrapper
      style={{
        display: isLoading ? "block" : "none",
      }}
    >
      <LinearProgress />
    </Wrapper>
  );
}

const Wrapper = styled("div")<{ theme: Theme }>(({ theme }) => ({
  position: "fixed",
  width: "100%",
  height: 2,
  top: 0,
  left: 0,
  zIndex: theme.zIndex.tooltip,
}));

function observeRouteChanges() {
  return merge(
    fromRouterEvent("routeChangeStart"),
    fromRouterEvent("routeChangeComplete"),
    fromRouterEvent("routeChangeError"),
  );
}

function fromRouterEvent(eventName: EventName) {
  return fromEventPattern(
    handler => Router.events.on(eventName, handler),
    handler => Router.events.off(eventName, handler),
  ).pipe(mapTo(eventName));
}

type ArgumentTypes<F extends (...args: any[]) => any> = F extends (
  ...args: infer A
) => any
  ? A
  : never;

type EventName = ArgumentTypes<(typeof Router)["events"]["on"]>[0];
