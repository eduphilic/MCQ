import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

/**
 * Makes Busboy compatible with Firebase. Firebase parses request bodies and
 * makes the result available on the request key `rawBody`. Busboy attempts to
 * pipe from request. This middleware replaces the request `pipe` operation with
 * Busboy's method of reading from a string.
 */
@Injectable()
export class DeploymentMulterFirebaseCompatibilityMiddleware
  implements NestMiddleware {
  private nonPipedDestinationProxyHandler: ProxyHandler<any>;

  constructor() {
    this.nonPipedDestinationProxyHandler = createNonPipedDestinationProxyHandler();
  }

  use(req: Request, _res: Response, next: NextFunction) {
    req.pipe = this.pipeToBusboyFromRawBody.bind(this, req);
    next();
  }

  pipeToBusboyFromRawBody(
    req: Request,
    ...[destination, ...rest]: RequestPipeParameters
  ) {
    // If Firebase Functions has not parsed the request body, e.g. we're not
    // operating in the context of a cloud function, then pipe like normal.
    if (!req.rawBody) {
      return req.pipe(
        destination,
        ...rest,
      );
    }

    // Make Busboy read from the body parsed by Firebase.
    const busboy = destination as busboy.Busboy;
    busboy.end(req.rawBody);

    // Ensure there were no unaccounted uses of what would have normally been
    // returned from the pipe operation.
    const nonPipedDestination = {};
    const nonPipedDestinationProxy = new Proxy(
      nonPipedDestination,
      this.nonPipedDestinationProxyHandler,
    );
    return nonPipedDestinationProxy;
  }
}

function createNonPipedDestinationProxyHandler() {
  // Ensure we're handling all proxy cases by testing against the keys of
  // ProxyHandler. This enforces that all cases are accounted for in case
  // the type definition changes in the future due to feature additions to
  // Proxy.
  const proxyHandlerKeyMap: Record<keyof ProxyHandler<any>, boolean> = {
    getPrototypeOf: true,
    setPrototypeOf: true,
    isExtensible: true,
    preventExtensions: true,
    getOwnPropertyDescriptor: true,
    has: true,
    get: true,
    set: true,
    deleteProperty: true,
    defineProperty: true,
    enumerate: true,
    ownKeys: true,
    apply: true,
    construct: true,
  };
  const proxyHandlerKeys = Object.keys(proxyHandlerKeyMap);

  const proxyHandler: ProxyHandler<any> = {};
  (Object.keys as (obj: any) => (keyof ProxyHandler<any>)[])(
    proxyHandlerKeys,
  ).forEach(key => {
    proxyHandler[key] = throwNonPipedDestinationUseAttemptError;
  });

  return proxyHandler;
}

function throwNonPipedDestinationUseAttemptError(): any {
  throw new Error(
    "Attempt to use result from DeploymentMulterFirebaseCompatibilityMiddleware pipe operation.",
  );
}

type RequestPipeParameters = Parameters<Request["pipe"]>;

declare global {
  namespace Express {
    interface Request {
      /**
       * Firebase parses request bodies and places the result under this key.
       *
       * @see https://stackoverflow.com/questions/47242340/how-to-perform-an-http-file-upload-using-express-on-cloud-functions-for-firebase
       */
      rawBody: Buffer | undefined;
    }
  }
}
