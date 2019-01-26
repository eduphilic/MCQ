import childProcessOriginal from "child_process";
import * as functionsOriginal from "firebase-functions";
import {
  createEnvironmentConfigProvider,
  createCliConfigProvider,
  createConfigProvider,
} from "./config.providers";

jest.mock("firebase-functions");
jest.mock("child_process");

const functions: jest.Mocked<typeof functionsOriginal> = functionsOriginal as any; // prettier-ignore
const childProcess: jest.Mocked<typeof childProcessOriginal> = childProcessOriginal as any; // prettier-ignore
const expected = { test: "123" };

describe("ConfigProviders", () => {
  beforeEach(() => {
    functions.config.mockRestore();
    functions.config.mockImplementation();
    childProcess.execSync.mockRestore();
    childProcess.execSync.mockImplementation();
  });

  describe("Environment", () => {
    it("should return null in test environment", async () => {
      functions.config.mockReturnValueOnce({});
      const provider = await createProvider();

      expect(provider).toBeNull();
    });

    it("should return config in cloud environment", async () => {
      functions.config.mockReturnValueOnce(expected);
      const provider = await createProvider();

      expect(provider).toEqual(expected);
    });

    async function createProvider() {
      return createEnvironmentConfigProvider<typeof expected>().useFactory();
    }
  });

  describe("Cli", () => {
    it("should be defined", async () => {
      const provider = await createProvider();
      expect(provider).toBeDefined();
    });

    it("should return environment variables from Firebase command line", async () => {
      childProcess.execSync.mockReturnValueOnce(`Extraneous beginning text.
${JSON.stringify(expected, null, 2) /* Expects JSON to be formatted. */}
  Extraneous ending text.`);

      const provider = await createProvider();

      expect(provider()).toEqual(expected);
    });

    async function createProvider() {
      return createCliConfigProvider<typeof expected>().useFactory();
    }
  });

  describe("Combined", () => {
    let configFromEnvironment: typeof expected | null;
    const cliConfigProvider: jest.Mock<() => typeof expected> = jest.fn();

    beforeEach(() => {
      configFromEnvironment = null;
      cliConfigProvider.mockRestore();
      cliConfigProvider.mockImplementation();
    });

    it("should return value from firebase config", async () => {
      configFromEnvironment = expected;
      const provider = await createProvider();

      expect(provider).toEqual(expected);
    });

    it("should return value from command line when in testing environment", async () => {
      cliConfigProvider.mockReturnValueOnce(expected);
      const provider = await createProvider();

      expect(provider).toEqual(expected);
    });

    async function createProvider() {
      return createConfigProvider<typeof expected>().useFactory(
        configFromEnvironment,
        cliConfigProvider,
      );
    }
  });
});
