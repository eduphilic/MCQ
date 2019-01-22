import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./app.module";
import { INestExpressApplication, INestApplication } from "@nestjs/common";

let app: INestApplication & INestExpressApplication;

async function bootstrap() {
  app = await NestFactory.create(ApplicationModule);
  await app.listen(3000);
}
bootstrap();

if (module.hot) {
  module.hot.accept("./app.module", function() {
    app.close().then(bootstrap);
  });
}
