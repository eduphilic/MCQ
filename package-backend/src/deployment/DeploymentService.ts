import { Injectable } from "@nestjs/common";
import { DeployDto } from "./DeployDto";
import Zip, { IZipEntry } from "adm-zip";
import { MulterFile } from "./MulterFile";
import * as admin from "firebase-admin";
import { posix as path } from "path";
import { ZipEntryReadStream } from "./ZipEntryReadStream";
import mime from "mime-types";

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
          contentType: mime.lookup(filename) || "application/octet-stream",
          gzip: true,
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
