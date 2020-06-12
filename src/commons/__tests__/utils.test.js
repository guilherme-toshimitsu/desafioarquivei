import { calculatePrice } from "../utils";

describe("Calculate price", () => {
  it("calculates a price based on the promotions (1000 = 00.9 reais, 2000 = 0.16 reais)", () => {
    expect(calculatePrice(0, 1000)).toEqual(90);
    expect(calculatePrice(0, 2500)).toEqual(370);
    expect(calculatePrice(0, 10000)).toEqual(2170);
  });
});
