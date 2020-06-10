import { objectReducer } from "@commons/utils";

import actions from "./actions";

const reducer = objectReducer(actions);

const initialState = {
  consults: 0,
  isLoading: false,
  price: 0,
  consultsToBePurchased: 0,
  user: {},
};

export default (state = initialState, action) => reducer(state, action);
