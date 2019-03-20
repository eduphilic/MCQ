import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import express from "express";
import { IncomingMessage, ServerResponse } from "http";
import { ConnectableObservable, from, of } from "rxjs";
import { publishLast, switchMap, switchMapTo, tap } from "rxjs/operators";
import { ApplicationModule } from "./app.module";

const expressServer$ = of(express()).pipe(
  switchMap(expressServer => {
    return from(
      NestFactory.create(ApplicationModule, new ExpressAdapter(expressServer)),
    ).pipe(
      tap(nestApp => nestApp.setGlobalPrefix("/api")),
      switchMap(nestApp => from(nestApp.init())),
      switchMapTo(of(expressServer)),
    );
  }),
  publishLast(),
) as ConnectableObservable<ReturnType<typeof express>>;

let wasInitialized = false;

export function handleApiRequest(req: IncomingMessage, res: ServerResponse) {
  if (!wasInitialized) {
    wasInitialized = true;
    expressServer$.connect();
  }

  expressServer$.subscribe({
    next: expressServer => {
      expressServer(req, res);
    },
    error: error => {
      throw error;
    },
  });
}
