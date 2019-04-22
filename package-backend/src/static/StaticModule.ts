import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { FirebaseAdminModule } from "../firebase-admin";
import { StaticMiddleware } from "./StaticMiddleware";

@Module({
  imports: [FirebaseAdminModule],
})
export class StaticModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    StaticMiddleware.apply(consumer);
  }
}
