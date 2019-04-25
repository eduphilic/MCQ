import {
  Inject,
  MiddlewareConsumer,
  NestMiddleware,
  RequestMethod,
} from "@nestjs/common";
import { Handler, NextFunction, Request, Response } from "express";
import path from "path";
import serveStatic from "serve-static";
import { HOSTING_MODULE_CONFIG_PROVIDER } from "./HOSTING_MODULE_CONFIG_PROVIDER";
import { HostingModuleConfig } from "./HostingModuleConfig";

export class HostingMiddleware implements NestMiddleware {
  static apply(consumer: MiddlewareConsumer, config: HostingModuleConfig) {
    let mountPath = config.mountPath.slice(1);
    mountPath = mountPath.length > 0 ? `${mountPath}*` : "*";

    consumer
      .apply(HostingMiddleware)
      .forRoutes(
        { method: RequestMethod.GET, path: mountPath },
        { method: RequestMethod.HEAD, path: mountPath },
      );
  }

  private config: Required<HostingModuleConfig>;
  private handler: Handler;
  private trimRegex: RegExp;

  constructor(
    @Inject(HOSTING_MODULE_CONFIG_PROVIDER) config: HostingModuleConfig,
  ) {
    this.config = {
      ...config,
      spa: config.spa === true,
    };

    const assetsPath = path.resolve(
      __dirname,
      "../..",
      config.app.replace(/^package-/, ""),
    );

    this.handler = serveStatic(assetsPath, {
      // Disable default cache implementation. The headers are set manually.
      cacheControl: false,
      // In the event a file or directory which was prefixed with a `.` was
      // uploaded, prevent access to it. These files are usually sensitive.
      dotfiles: "ignore",
      extensions: config.spa ? undefined : ["html"],
      redirect: false,
      setHeaders: (res, resPath) => {
        // Cache HTML files for 1 hour because they do not have hashes in their
        // filenames. Cache other assets for longer as there will be a hash
        // somewhere in their file paths.
        if (process.env.NODE_ENV === "development") return;
        const maxAge = resPath.endsWith(".html") ? 3600 : 31536000;
        const sMaxAge = maxAge;
        res.setHeader(
          "Cache-Control",
          `private, max-age=${maxAge}, s-maxage=${sMaxAge}`,
        );
      },
    });

    this.trimRegex = new RegExp(`^${config.mountPath}`);
  }

  use(req: Request, res: Response, next: NextFunction) {
    // Remove mount prefix.
    req.url = req.url.replace(this.trimRegex, "");

    // If at the mount root, add the index file so that urls without training
    // slashes work.
    if (req.url.length === 0) req.url = "/index.html";

    // Redirect all paths without a file extension to the root index to support
    // single page applications.
    if (this.config.spa && path.posix.extname(req.url) === "") {
      req.url = "/index.html";
    }

    this.handler(req, res, next);
  }
}
