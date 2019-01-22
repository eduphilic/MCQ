import { INestExpressApplication, INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./app.module";

let app: INestApplication & INestExpressApplication;

async function bootstrap() {
  app = await NestFactory.create(ApplicationModule);
  await app.listen(3000);
}
// tslint:disable-next-line:no-floating-promises
bootstrap();

if (module.hot) {
  module.hot.accept("./app.module", () => {
    // tslint:disable-next-line:no-floating-promises
    app.close().then(bootstrap);
  });
}
