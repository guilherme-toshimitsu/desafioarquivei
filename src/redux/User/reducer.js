import { objectReducer } from "@commons/utils";

import actions from "./actions";

const reducer = objectReducer(actions);

const initialState = {
  token: "",
  email: "",
  auth: false,
  checked: false,
  isLoading: false,
};

export default (state = initialState, action) => reducer(state, action);
