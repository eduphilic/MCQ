import {
  DynamicModule,
  Inject,
  MiddlewareConsumer,
  Module,
  NestModule,
} from "@nestjs/common";
import { HOSTING_MODULE_CONFIG_PROVIDER } from "./HOSTING_MODULE_CONFIG_PROVIDER";
import { HostingMiddleware } from "./HostingMiddleware";
import { HostingModuleConfig } from "./HostingModuleConfig";

@Module({})
export class HostingModule implements NestModule {
  static forRoot(config: HostingModuleConfig): DynamicModule {
    return {
      module: HostingModule,
      providers: [
        {
          provide: HOSTING_MODULE_CONFIG_PROVIDER,
          useValue: config,
        },
      ],
    };
  }

  constructor(
    @Inject(HOSTING_MODULE_CONFIG_PROVIDER) private config: HostingModuleConfig,
  ) {}

  configure(consumer: MiddlewareConsumer) {
    /* tslint:disable-next-line:no-console */
    console.log("# configure");
    HostingMiddleware.apply(consumer, this.config);
  }
}
