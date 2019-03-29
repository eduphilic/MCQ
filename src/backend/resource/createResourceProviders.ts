import { Controller, Provider, UseGuards } from "@nestjs/common";
import { RESOURCE_OPTIONS_PROVIDER } from "./RESOURCE_OPTIONS_PROVIDER";
import { ResourceControllerBase } from "./ResourceControllerBase";
import { ResourceGuard } from "./ResourceGuard";
import { ResourceOptions } from "./ResourceOptions";
import { ResourceService } from "./ResourceService";

/**
 * Create the module providers dynamically using the provided `options`.
 */
export function createResourceProviders<Resource>(options: ResourceOptions) {
  @Controller(options.resourceName)
  @UseGuards(ResourceGuard(options.isUserResource))
  class ResourceController extends ResourceControllerBase<Resource> {}

  const providers: Provider[] = [
    {
      provide: RESOURCE_OPTIONS_PROVIDER,
      useValue: options,
    },
    {
      provide: ResourceService,
      useClass: ResourceService,
    },
  ];

  return [providers, ResourceController] as const;
}
