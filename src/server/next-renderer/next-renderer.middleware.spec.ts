import { NextRendererMiddleware } from "./next-renderer.middleware";

describe("NextRendererMiddleware", () => {
  it("should be defined", () => {
    expect(new NextRendererMiddleware()).toBeDefined();
  });
});
