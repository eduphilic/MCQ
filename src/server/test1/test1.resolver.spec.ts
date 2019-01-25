import { Test, TestingModule } from "@nestjs/testing";
import { Test1Resolver } from "./test1.resolver";
import { GraphQLSchemaModule } from "../graphql-schema";

describe("Test1Resolver", () => {
  let resolver: Test1Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GraphQLSchemaModule],
      providers: [Test1Resolver],
    }).compile();

    resolver = module.get<Test1Resolver>(Test1Resolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
