import CONSTANTS from "./constants";
import Api from "@api";
import Router from "next/router";

const sendPriceAmmount = (price, ammount) => (dispatch) => {
  dispatch({
    type: CONSTANTS.CALCULATE_PRICE,
    price,
    consultsToBePurchased: ammount,
  });
};

const purchase = (data) => (dispatch) => {
  dispatch({
    type: CONSTANTS.CONSULT_PURCHASE,
  });
  Api.checkout
    .purchaseConsults(data)
    .then((res) => {
      dispatch({
        type: CONSTANTS.CONSULT_PURCHASE_SUCCESS,
        ...data,
      });
      alert("Compra bem sucedida");
      Router.push("/");
    })
    .catch((err) => {
      dispatch({
        type: CONSTANTS.CONSULT_PURCHASE_FAIL,
      });
      alert("Error :", err);
    });
};

export default { sendPriceAmmount, purchase, Api };
