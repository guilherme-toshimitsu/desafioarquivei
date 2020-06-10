import actions from "../actions";
import CONSTANTS from "../constants";

describe("reducer Actions", () => {
  it("CALCULATE PRICE", () => {
    const calculatePrice = actions[CONSTANTS.CALCULATE_PRICE];
    const value = calculatePrice({ price: 240 }, {});
    expect(value).toHaveProperty("price", 240);
  });

  it("CONSULT PURCHASE", () => {
    const purchaseInitiate = actions[CONSTANTS.CONSULT_PURCHASE];
    const value = purchaseInitiate({}, {});
    expect(value).toHaveProperty("isLoading", true);
  });

  it("CONSULT PURCHASE SUCCESS", () => {
    const purchaseSuccess = actions[CONSTANTS.CONSULT_PURCHASE_SUCCESS];
    const value = purchaseSuccess({ test: "test" }, {});
    expect(value).toHaveProperty("isLoading", false);
    expect(value).toHaveProperty("consultsToBePurchased", 0);
  });

  it("CONSULT PURCHASE FAIL", () => {
    const purchaseFailure = actions[CONSTANTS.CONSULT_PURCHASE_FAIL];
    const value = purchaseFailure({}, {});
    expect(value).toHaveProperty("isLoading", false);
    expect(value).toHaveProperty("consultsToBePurchased", 0);
  });

  it("START LOADING", () => {
    const loading = actions[CONSTANTS.START_LOADING];
    const value = loading({}, {});
    expect(value).toHaveProperty("isLoading", true);
  });
});
