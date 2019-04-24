import {
  DynamicModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from "@nestjs/common";
import { FirebaseAdminModule } from "../firebase-admin";
import { STATIC_MIDDLEWARE_CONFIG_PROVIDER } from "./STATIC_MIDDLEWARE_CONFIG_PROVIDER";
import { StaticMiddleware, StaticMiddlewareConfig } from "./StaticMiddleware";

@Module({
  imports: [FirebaseAdminModule],
})
export class StaticModule implements NestModule {
  static forRoot(config: StaticMiddlewareConfig): DynamicModule {
    return {
      module: StaticModule,
      providers: [
        {
          provide: STATIC_MIDDLEWARE_CONFIG_PROVIDER,
          useValue: config,
        },
      ],
    };
  }

  configure(consumer: MiddlewareConsumer) {
    StaticMiddleware.apply(consumer);
  }
}
