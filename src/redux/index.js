import { createStore, applyMiddleware } from "redux";
import { Reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  Reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
