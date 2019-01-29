import { Test } from "@nestjs/testing";
import {
  CookieSessionMiddleware,
  MAX_FIREBASE_SESSION_MILLISECONDS,
  MIN_FIREBASE_SESSION_MILLISECONDS,
} from "./cookie-session.middleware";
import { ConfigService, ConfigModule } from "../config";

const getConfigMock = jest.fn(() => ({
  session: { expire_milliseconds: MAX_FIREBASE_SESSION_MILLISECONDS },
}));

describe("CookieSessionMiddleware", () => {
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

  async function createModule() {
    const module = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [CookieSessionMiddleware],
    })
      .overrideProvider(ConfigService)
      .useValue({ getConfig: getConfigMock })
      .compile();
    return module;
  }

  async function createMiddleware() {
    const module = await createModule();
    return module.get<CookieSessionMiddleware>(CookieSessionMiddleware);
  }
});
