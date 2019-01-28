// import { INestApplication } from "@nestjs/common";
import { SessionMiddleware } from "./session.middleware";

describe("SessionMiddleware", () => {
  // let app: INestApplication;

  xit("should be defined", () => {
    // @ts-ignore
    expect(new SessionMiddleware()).toBeDefined();
  });
});
