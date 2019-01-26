import { Test, TestingModule } from "@nestjs/testing";
import { ConfigService } from "./config.service";
import { ConfigProviders } from "./config.providers";

const expectedConfig = { test: "test" };

describe("ConfigService", () => {
  let service: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigService,
        {
          provide: ConfigProviders.Combined,
          useValue: expectedConfig,
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
});
