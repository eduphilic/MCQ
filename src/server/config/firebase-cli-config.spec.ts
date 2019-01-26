import { Test, TestingModule } from "@nestjs/testing";
import childProcessOriginal from "child_process";
import { FirebaseCliConfig } from "./firebase-cli-config";

jest.mock("child_process");

const childProcess: jest.Mocked<
  typeof childProcessOriginal
> = childProcessOriginal as any;

type MockConfig = { test: "123" };

describe("FirebaseCliConfig", () => {
  let module: TestingModule;
  let provider: FirebaseCliConfig<MockConfig>;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [FirebaseCliConfig],
    }).compile();

    provider = module.get<FirebaseCliConfig<MockConfig>>(FirebaseCliConfig);
  });

  it("should be defined", () => {
    expect(provider).toBeDefined();
  });

  it("should return environment variables from Firebase command line", async () => {
    const expected: MockConfig = { test: "123" };

    childProcess.execSync.mockImplementationOnce(
      () => `Extraneous beginning text.
${JSON.stringify(expected, null, 2) /* Expects JSON to be formatted. */}
Extraneous ending text.`,
    );

    await module.init();

    expect(provider.getConfig()).toEqual(expected);
  });
});
