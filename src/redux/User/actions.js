import CONSTANTS from "./constants";

export default {
  [CONSTANTS.LOGIN_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [CONSTANTS.LOGIN_REQUEST_SUCCESS]: (state, args) => ({
    ...state,
    user: args,
    auth: true,
    isLoading: false,
    checked: true,
  }),
  [CONSTANTS.LOGIN_REQUEST_FAIL]: (state) => ({
    ...state,
    auth: false,
    isLoading: false,
    checked: true,
  }),
  [CONSTANTS.LOGOUT_REQUEST]: (state) => ({
    ...state,
    auth: false,
    isLoading: false,
    checked: false,
  }),
};
