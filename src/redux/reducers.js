import consultStore from "./Consult";
import userStore from "./User";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export const Reducers = combineReducers({
  userStore,
  consultStore,
  form: formReducer,
});
