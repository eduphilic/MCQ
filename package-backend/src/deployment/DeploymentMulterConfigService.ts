import { Injectable } from "@nestjs/common";
import { MulterOptionsFactory } from "@nestjs/platform-express";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { memoryStorage } from "multer";

@Injectable()
export class DeploymentMulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterOptions {
    return {
      storage: memoryStorage(),
      fileFilter,
    };
  }
}

function fileFilter(...[, file, callback]: FileFilterParameters) {
  // spell-checker:disable
  if (
    // Ensure file has the correct MIME type.
    file.mimetype !== "application/zip" ||
    // Ensure file has the correct file extension.
    !/\.zip$/.test(file.originalname)
  ) {
    callback(null, false);
    return;
  }
  // spell-checker:enable

  callback(null, true);
}

type FileFilterParameters = Parameters<
  NonNullable<MulterOptions["fileFilter"]>
>;
