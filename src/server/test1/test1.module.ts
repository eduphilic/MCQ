import { Module } from "@nestjs/common";
import { Test1Resolver } from "./test1.resolver";
import { GraphQLSchemaModule } from "../graphql-schema";

@Module({
  imports: [GraphQLSchemaModule],
  providers: [Test1Resolver],
})
export class Test1Module {}
