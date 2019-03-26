import { Controller, Provider } from "@nestjs/common";
import { DatabaseService } from "../database";
import { RESOURCE_OPTIONS_PROVIDER } from "./RESOURCE_OPTIONS_PROVIDER";
import { ResourceControllerBase } from "./ResourceControllerBase";
import { ResourceOptions } from "./ResourceOptions";
import { ResourceService } from "./ResourceService";

/**
 * Create the module providers dynamically using the provided `options`.
 */
export function createResourceProviders<Resource>(options: ResourceOptions) {
  @Controller(options.resourceName)
  class ResourceController extends ResourceControllerBase<Resource> {}

  const providers: Provider[] = [
    {
      provide: RESOURCE_OPTIONS_PROVIDER,
      useValue: options,
    },
    {
      provide: ResourceService,
      useClass: ResourceService,
      inject: [DatabaseService, "ResourceOptions"],
    },
    {
      provide: ResourceController,
      useClass: ResourceController,
      inject: [ResourceService, "ResourceOptions"],
    },
  ];

  return [providers, ResourceController] as const;
}
