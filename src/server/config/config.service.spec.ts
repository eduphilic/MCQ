import { Test, TestingModule } from "@nestjs/testing";
import * as yup from "yup";
import { ConfigProviders } from "./config.providers";
import { ConfigService } from "./config.service";

const expectedConfig = { test: "test" };
const configSchema = yup.object({ test: yup.string().required() });

describe("ConfigService", () => {
  let module: TestingModule;
  let service: ConfigService;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        ConfigService,
        {
          provide: ConfigProviders.Combined,
          useValue: expectedConfig,
        },
        {
          provide: ConfigProviders.Schema,
          useValue: configSchema,
        },
      ],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return value from provider", () => {
    expect(service.getConfig()).toEqual(expectedConfig);
  });

  it("should validate the schema", async () => {
    const spy = jest.spyOn(configSchema, "validateSync");
    await module.init();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
