import { onlyNumbers } from "../validations";

describe("validations", () => {
  it("OnlyNumbers", () => {
    expect(onlyNumbers("9")).toEqual(undefined);
    expect(onlyNumbers("a")).toEqual("Only Numbers");
  });
});
