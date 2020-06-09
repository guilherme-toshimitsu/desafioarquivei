import CONSTANTS from "./constants";
import Api from "@api";

const doLogin = (values) => (dispatch) => {
  dispatch({ type: CONSTANTS.LOGIN_REQUEST });
  Api.auth
    .login(values)
    .then((data) => {
      if (data.token) {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("email", values.username);
      }
      dispatch({
        type: CONSTANTS.LOGIN_REQUEST_SUCCESS,
        token: data.token,
        email: values.username,
      });
    })
    .catch((err) => {
      dispatch({
        type: CONSTANTS.LOGIN_REQUEST_FAIL,
        err: err,
      });
      alert("Login Invalido");
    });
};

const validateToken = () => (dispatch) => {
  // function of token validation is mocked right now
  let token = sessionStorage.getItem("token");
  let username = sessionStorage.getItem("email");
  if (!token || !username) {
    dispatch({ type: CONSTANTS.LOGOUT_REQUEST });
    return false;
  } else {
    if (token.includes("valid")) {
      dispatch({
        type: CONSTANTS.LOGIN_REQUEST_SUCCESS,
        token,
        email: username,
      });
      return true;
    } else {
      dispatch({ type: CONSTANTS.LOGOUT_REQUEST });
      return false;
    }
  }
};

const logout = () => (dispatch) => {
  sessionStorage.setItem("token", null);
  sessionStorage.setItem("email", null);
  dispatch({ type: CONSTANTS.LOGOUT_REQUEST });
};

export default { doLogin, validateToken, logout };
