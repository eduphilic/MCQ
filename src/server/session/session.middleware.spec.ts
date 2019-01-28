// import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
// import request from "supertest";
import {
  SessionMiddleware,
  MAX_FIREBASE_SESSION_MILLISECONDS,
  MIN_FIREBASE_SESSION_MILLISECONDS,
} from "./session.middleware";
import { ConfigService, ConfigModule } from "../config";

// TODO: Add test for Cache-Control header.
// TODO: Add test to verify application of session cookie middleware.

const getConfigMock = jest.fn(() => ({
  session: { expire_milliseconds: MAX_FIREBASE_SESSION_MILLISECONDS },
}));

describe("SessionMiddleware", () => {
  beforeEach(() => {
    getConfigMock.mockClear();
  });

  it("should be defined", async () => {
    const middleware = await createMiddleware();
    expect(middleware).toBeDefined();
  });

  it("should throw on out of range cookie expiration setting", async () => {
    getConfigMock.mockImplementationOnce(() => ({
      session: { expire_milliseconds: MIN_FIREBASE_SESSION_MILLISECONDS - 1 },
    }));

    await expect(createMiddleware()).rejects.toMatchObject({
      message: expect.stringContaining("milliseconds must be between"),
    });

    getConfigMock.mockImplementationOnce(() => ({
      session: { expire_milliseconds: MAX_FIREBASE_SESSION_MILLISECONDS + 1 },
    }));

    await expect(createMiddleware()).rejects.toMatchObject({
      message: expect.stringContaining("milliseconds must be between"),
    });
  });

  // describe("middleware", () => {
  //   let app: INestApplication;

  //   beforeAll(async () => {
  //     const module = await createModule();

  //     app = module.createNestApplication();
  //     await app.init();
  //   });

  //   it("should set cache header", async () => {
  //     await request(app.getHttpServer())
  //       .get("/")
  //       .expect("Cache-Control", "private");
  //   });

  //   afterAll(async () => {
  //     await app.close();
  //   });
  // });

  async function createModule() {
    const module = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [SessionMiddleware],
    })
      .overrideProvider(ConfigService)
      .useValue({ getConfig: getConfigMock })
      .compile();
    return module;
  }

  async function createMiddleware() {
    const module = await createModule();
    return module.get<SessionMiddleware>(SessionMiddleware);
  }
});
