import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { NextRendererModule } from "./next-renderer";

@Module({
  imports: [
    NextRendererModule,
    GraphQLModule.forRoot({
      typeDefs: `type Query { cats: Boolean }`,
    }),
  ],
})
export class ApplicationModule {}
