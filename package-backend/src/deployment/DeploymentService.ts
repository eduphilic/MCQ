import { Injectable } from "@nestjs/common";
import Zip, { IZipEntry } from "adm-zip";
import * as admin from "firebase-admin";
import mimeTypes from "mime-types";
import { posix as path } from "path";
import { DeployDto } from "./DeployDto";
import { MulterFile } from "./MulterFile";
import { ZipEntryReadStream } from "./ZipEntryReadStream";

@Injectable()
export class DeploymentService {
  async deploy(deployDto: DeployDto) {
    const appZips = (Object.entries as (
      obj: object,
    ) => [keyof DeployDto, MulterFile[]][])(deployDto).map(app => ({
      appName: app[0],
      zipFile: app[1][0],
    }));

    const bucket = admin.storage().bucket();

    for (const { appName, zipFile } of appZips) {
      await bucket.deleteFiles({ prefix: appName });

      const zip = new Zip(zipFile.buffer);
      const entries = zip.getEntries().filter(e => !e.isDirectory);
      const parsedPaths = getNormalizedPaths(entries);

      let i = 0;
      for (const zipEntry of entries) {
        const filename = path.join(
          appName,
          parsedPaths[i].dir,
          parsedPaths[i].base,
        );
        const file = bucket.file(filename);
        const fileWriteStream = file.createWriteStream({
          contentType: mimeTypes.lookup(filename) || "application/octet-stream",
          // TODO: Storage using gzip on cloud storage is not enabled because
          // the static file middleware needs the uncompressed file size which
          // is not reported in the meta data during retrieval. Also, gzip
          // compressed files don't support range header. It also seems that
          // responses from Firebase Hosting already gzip automatically.
          // gzip: true,
        });
        const zipReadStream = new ZipEntryReadStream(zipEntry);

        zipReadStream.pipe(fileWriteStream);
        i += 1;
      }
    }
  }
}

function getNormalizedPaths(entries: IZipEntry[]) {
  const parsedPaths = entries
    .filter(e => !e.isDirectory)
    .map(e => path.parse(path.normalize(e.entryName)))
    .map(e => ({ ...e, root: "" }));

  if (parsedPaths.length === 0) return parsedPaths;
  if (parsedPaths.find(p => p.dir === "")) return parsedPaths;

  // Set baseDir to first directory.
  const baseDir = parsedPaths[0].dir.split(path.sep)[0];

  return parsedPaths
    .filter(p => p.dir.split(path.sep)[0] === baseDir)
    .map(p => ({
      ...p,
      dir: p.dir
        .split(path.sep)
        .slice(1)
        .join(path.sep),
    }));
}
