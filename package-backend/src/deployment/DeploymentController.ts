import {
  Controller,
  Post,
  UnprocessableEntityException,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import assert from "assert";
import { DeployableAppsEnum } from "./DeployableAppsEnum";
import { DeployDto } from "./DeployDto";
import { DeploymentApiKeyGuard } from "./DeploymentApiKeyGuard";
import { DeploymentService } from "./DeploymentService";

const deployFileFields: {
  maxCount: 1;
  name: DeployableAppsEnum;
}[] = [
  {
    maxCount: 1,
    name: DeployableAppsEnum.PackageLanding,
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
