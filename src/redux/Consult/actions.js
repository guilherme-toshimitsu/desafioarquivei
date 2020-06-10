import CONSTANTS from "./constants";

export default {
  [CONSTANTS.CONSULT_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [CONSTANTS.CONSULT_REQUEST_SUCCESS]: (state, args) => ({
    ...state,
    ...args,
    isLoading: false,
  }),
  [CONSTANTS.CONSULT_REQUEST_FAIL]: (state) => ({
    ...state,
    isLoading: false,
    consults: 0,
  }),
  [CONSTANTS.CALCULATE_PRICE]: (state, args) => ({
    ...state,
    isLoading: false,
    ...args,
  }),
  [CONSTANTS.CONSULT_LOAD]: (state, args) => ({
    ...state,
    isLoading: false,
    ...args,
  }),
  [CONSTANTS.CONSULT_PURCHASE]: (state, args) => ({
    ...state,
    isLoading: true,
  }),
  [CONSTANTS.CONSULT_PURCHASE_SUCCESS]: (state, args) => ({
    ...state,
    isLoading: false,
    consults: state.consults + state.consultsToBePurchased,
    user: { ...args },
    consultsToBePurchased: 0,
    price: 0,
  }),
  [CONSTANTS.CONSULT_PURCHASE_FAIL]: (state, args) => ({
    ...state,
    isLoading: false,
    consultsToBePurchased: 0,
    price: 0,
  }),
  [CONSTANTS.START_LOADING]: (state, args) => ({
    ...state,
    isLoading: true,
  }),
};
