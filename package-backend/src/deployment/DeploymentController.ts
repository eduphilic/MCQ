import {
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
} from "@nestjs/common";
import { DeploymentApiKeyGuard } from "./DeploymentApiKeyGuard";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { DeployableAppsEnum } from "./DeployableAppsEnum";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

type UploadedDeploymentZips = { [P in DeployableAppsEnum]?: File[] };
const deployablePackageNames = Object.values(DeployableAppsEnum) as string[];

@Controller("api/deploy")
@UseGuards(DeploymentApiKeyGuard)
export class DeploymentController {
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      deployablePackageNames.map(packageName => ({
        name: packageName,
        maxCount: 1,
      })),
    ),
  )
  deploy(@UploadedFiles() files: UploadedDeploymentZips) {
    /* tslint:disable-next-line:no-console */
    console.log({ files });

    Object.entries(files).forEach(([key, value]) => {
      /* tslint:disable-next-line:no-console */
      console.log({ key, value: value && value[0].originalname });
    });
  }
}

type File = Parameters<NonNullable<MulterOptions["fileFilter"]>>["1"];
