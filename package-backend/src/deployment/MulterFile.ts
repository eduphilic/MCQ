import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

export type MulterFile = Parameters<
  NonNullable<MulterOptions["fileFilter"]>
>["1"];
