import { Test, TestingModule } from "@nestjs/testing";
import * as functionsOriginal from "firebase-functions";
import { FirebaseConfig } from "./firebase-config";

type MockConfig = { test: string };

jest.mock("firebase-functions");

const functions: jest.Mocked<
  typeof functionsOriginal
> = functionsOriginal as any;

describe("FirebaseConfig", () => {
  let module: TestingModule;
  let provider: FirebaseConfig<MockConfig>;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [FirebaseConfig],
    }).compile();

    provider = module.get<FirebaseConfig<MockConfig>>(FirebaseConfig);
  });

  it("should be defined", () => {
    expect(provider).toBeDefined();
  });

  it("should return null in test environment", async () => {
    functions.config.mockImplementationOnce(() => ({}));
    await module.init();

    expect(provider.getLoadedConfig()).toBeNull();
  });

  it("should return config in cloud environment", async () => {
    const expected: MockConfig = { test: "123" };

    functions.config.mockImplementationOnce(() => expected);
    await module.init();

    expect(provider.getLoadedConfig()).toEqual(expected);
  });
});
