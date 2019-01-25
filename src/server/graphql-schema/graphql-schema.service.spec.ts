import { Test, TestingModule } from "@nestjs/testing";
import { GraphQLSchemaService } from "./graphql-schema.service";

describe("GraphQLSchemaService", () => {
  let service: GraphQLSchemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQLSchemaService],
    }).compile();

    service = module.get<GraphQLSchemaService>(GraphQLSchemaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
