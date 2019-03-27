import { Get, Inject } from "@nestjs/common";
import { UserEntity, UserFromRequestDecorator } from "../user";
import { RESOURCE_OPTIONS_PROVIDER } from "./RESOURCE_OPTIONS_PROVIDER";
import { ResourceOptions } from "./ResourceOptions";
import { ResourceService } from "./ResourceService";

/**
 * Web server controller providing access to a database resource.
 */
export class ResourceControllerBase<Resource> {
  constructor(
    private resourceService: ResourceService<Resource>,
    @Inject(RESOURCE_OPTIONS_PROVIDER) private options: ResourceOptions,
  ) {}

  @Get()
  async getResource(@UserFromRequestDecorator() userEntity: UserEntity | null) {
    let userId: string | null = null;

    if (this.options.isUserResource) {
      if (userEntity) userId = userEntity.id;
    }

    return this.resourceService.getResource(userId);
  }
}
