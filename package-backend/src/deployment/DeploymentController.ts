import {
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  UnprocessableEntityException,
} from "@nestjs/common";
import { DeploymentApiKeyGuard } from "./DeploymentApiKeyGuard";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { DeployableAppsEnum } from "./DeployableAppsEnum";
import { DeployDto } from "./DeployDto";
import assert from "assert";
import { DeploymentService } from "./DeploymentService";

const deployFileFields: {
  name: DeployableAppsEnum;
  maxCount: 1;
}[] = [
  {
    name: DeployableAppsEnum.PackageLanding,
    maxCount: 1,
  },
];

assert(
  new Set(deployFileFields.map(f => f.name)).size === deployFileFields.length &&
    Object.keys(DeployableAppsEnum).length === deployFileFields.length,
  "Expected all deployable apps to be listed in the file fields array.",
);

@Controller("api/deploy")
@UseGuards(DeploymentApiKeyGuard)
export class DeploymentController {
  constructor(private deploymentService: DeploymentService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor(deployFileFields))
  async deploy(@UploadedFiles() deployDto: DeployDto | undefined) {
    if (!deployDto) throw new UnprocessableEntityException();
    return this.deploymentService.deploy(deployDto);
  }
}
