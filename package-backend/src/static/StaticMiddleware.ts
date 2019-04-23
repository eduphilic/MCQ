import {
  Injectable,
  MiddlewareConsumer,
  NestMiddleware,
  RequestMethod,
} from "@nestjs/common";
import { Handler, NextFunction, Request, Response } from "express";
import { PathLike, ReadStream, Stats } from "fs";
import { posix as path } from "path";
import { URL } from "url";
import { DeployableAppsEnum } from "../deployment";
import { FirebaseAdminService } from "../firebase-admin";

// tslint:disable-next-line:import-name
import serveStaticModule, { ServeStaticOptions } from "serve-static";

type Bucket = ReturnType<
  ReturnType<
    ReturnType<FirebaseAdminService["getInitializedAdminModule"]>["storage"]
  >["bucket"]
>;

/**
 * File system interface accepted by `serve-static`.
 *
 * The fork of `serve-static` being used allows the use of a custom file system.
 * It only requires the `stat` and `createReadStream` methods be implemented.
 */
type ServeStaticFS = Pick<typeof import("fs"), "stat" | "createReadStream">;

const serveStatic = serveStaticModule as (
  root: string,
  options?: ServeStaticOptions & { fs?: ServeStaticFS },
) => Handler;

// TODO: Make this configurable from the module level so multiple configured
// instances can be used.
/**
 * Serves static content from Firebase Storage. It sets the cache time for html
 * pages to `1 hour` and assets to `1 year`. Assets are assumed to contain
 * hashed file paths.
 *
 * This middleware wraps a forked version of `serve-static`. The fork allows the
 * use of a custom file system implementation. This module implements a
 * file system wrapper around access to Firebase Storage.
 */
@Injectable()
export class StaticMiddleware implements NestMiddleware {
  static apply(consumer: MiddlewareConsumer) {
    consumer.apply(StaticMiddleware).forRoutes(
      {
        method: RequestMethod.GET,
        path: "*",
      },
      {
        method: RequestMethod.HEAD,
        path: "*",
      },
    );
  }

  private bucket: Bucket;
  private handler: Handler;

  constructor(firebaseAdminService: FirebaseAdminService) {
    this.bucket = firebaseAdminService
      .getInitializedAdminModule()
      .storage()
      .bucket();

    // TODO: Implement the other app paths.
    this.handler = serveStatic(`/${DeployableAppsEnum.PackageLanding}`, {
      // In the event a file or directory which was prefixed with a `.` was
      // uploaded, prevent access to it. This files are usually sensitive.
      dotfiles: "ignore",
      // The `fs.stat` implementation below automatically returns a
      // "file not found" exception when attempting to access files without a
      // file extension. Firebase Storage does not have folders. Setting this
      // will cause the middleware to retry filenames with a default extension.
      extensions: ["html"],
      // Firebase Storage does not support folders so this behavior does not
      // make sense.
      redirect: false,
      // Use file system implementation that wraps Firebase Storage api.
      // tslint:disable-next-line:object-literal-sort-keys
      fs: {
        createReadStream: this.createReadStream.bind(this),
        stat: this.stat.bind(this) as any,
      },
      // Disable the default cache header behavior it is implemented manually
      // below.
      cacheControl: false,
      setHeaders: (res, resPath) => {
        // Cache HTML files for 1 hour because they do not have hashes in their
        // filenames. Cache other assets for longer as there will be a hash
        // somewhere in their file paths.
        const maxAge = resPath.endsWith(".html") ? 3600 : 31536000;
        const sMaxAge = maxAge;
        res.setHeader(
          "Cache-Control",
          `private, max-age=${maxAge}, s-maxage=${sMaxAge}`,
        );
      },
    });
  }

  use(req: Request, res: Response, next: NextFunction) {
    const url = new URL(req.originalUrl, "http://localhost");

    // TODO: Use a setting containing a list of ignored paths or some other
    // similar behavior.
    if (url.pathname.startsWith("/api")) {
      next();
      return;
    }

    this.handler(req, res, next);
  }

  /**
   * Implementation of `fs.Stat`.
   */
  private stat(
    pathLike: PathLike,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void,
  ) {
    this.statPromise(pathLike)
      .then(stats => callback(null, stats))
      .catch(error => callback(error, null as any));
  }

  private async statPromise(pathLike: PathLike): Promise<Stats> {
    const filename = this.parsePath(pathLike);
    const file = this.bucket.file(filename);

    // Meta data of the requested file.
    let meta: {
      name: string;
      contentType: string;
      timeCreated: string;
      updated: string;
      size: string;
      md5Hash: string;
      mediaLink: string;
      contentEncoding: string;
      crc32c: string;
      etag: string;
      [P: string]: string;
    };
    // Firebase throws an error if the file does not exist.
    try {
      meta = (await file.getMetadata())[0];
    } catch {
      throw this.createErrorENOENT();
    }

    // These are the fields from `fs.Stats` that are used by these libraries:
    // - serve-static
    // - send
    // - etag
    const stats: Partial<Stats> = {
      ctime: new Date(meta.timeCreated),
      // Not really used but checked by `etag` to ensure that the passed `Stats`
      // object is a compatible object.
      ino: 1,
      isDirectory: () => false,
      mtime: new Date(meta.updated),
      size: parseInt(meta.size, 10),
    };

    return stats as Stats;
  }

  /**
   * Implementation of `fs.createReadStream`.
   */
  private createReadStream(
    pathLike: PathLike,
    options?:
      | string
      | {
          flags?: string;
          encoding?: string;
          fd?: number;
          mode?: number;
          autoClose?: boolean;
          start?: number;
          end?: number;
          highWaterMark?: number;
        },
  ): ReadStream {
    const filename = this.parsePath(pathLike);
    const file = this.bucket.file(filename);

    const readStream = file.createReadStream(
      typeof options === "object"
        ? {
            end: options.end,
            start: options.start,
          }
        : undefined,
    );

    return readStream as ReadStream;
  }

  /**
   * Strips the leading `/` from the path. It throws a "file not found"
   * exception if the requested file does not contain a resource. This is done
   * because Firebase Storage does not have folders. This triggers the
   * middleware to retry but with default file extension.
   */
  private parsePath(pathLike: PathLike) {
    const parsedPath = path.parse(pathLike.toString());
    if (!parsedPath.ext) throw this.createErrorENOENT();
    return `${parsedPath.dir}/${parsedPath.name}${parsedPath.ext}`;
  }

  /**
   * Throws an `Error` with the `ENOENT` error code set. This is the standard
   * code expected by libraries checking for "file not found" errors.
   */
  private createErrorENOENT() {
    const error = new Error() as NodeJS.ErrnoException;
    error.code = "ENOENT";
    return error;
  }
}
