import { DynamicModule } from "@nestjs/common";
import { DatabaseModule } from "../database";
import { createResourceProviders } from "./createResourceProviders";
import { ResourceOptions } from "./ResourceOptions";

/**
 * Provides a controller for a static public resource or a dynamic user state
 * resource.
 */
export class ResourceModule {
  static forRoot<Resource>(options: ResourceOptions): DynamicModule {
    const [providers, ResourceController] = createResourceProviders<Resource>(
      options,
    );

    return {
      imports: [DatabaseModule],
      module: ResourceModule,
      providers,
      controllers: [ResourceController],
    };
  }
}
