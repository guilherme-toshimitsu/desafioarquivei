import actions from "../actions";
import CONSTANTS from "../constants";

describe("reducer Actions", () => {
  it("LOGIN_REQUEST", () => {
    const login = actions[CONSTANTS.LOGIN_REQUEST];
    const value = login();
    expect(value).toHaveProperty("isLoading", true);
  });

  it("LOGIN_REQUEST SUCCESS", () => {
    const loginSuccess = actions[CONSTANTS.LOGIN_REQUEST_SUCCESS];
    const value = loginSuccess({}, {});
    expect(value).toHaveProperty("isLoading", false);
    expect(value).toHaveProperty("auth", true);
  });

  it("LOGIN_REQUEST FAIL", () => {
    const loginFail = actions[CONSTANTS.LOGIN_REQUEST_FAIL];
    const value = loginFail({ test: "test" }, {});
    expect(value).toHaveProperty("isLoading", false);
    expect(value).toHaveProperty("auth", false);
  });

  it("LOGOUT", () => {
    const purchaseFailure = actions[CONSTANTS.LOGOUT_REQUEST];
    const value = purchaseFailure({ auth: true }, {});
    expect(value).toHaveProperty("isLoading", false);
    expect(value).toHaveProperty("auth", false);
  });
});
