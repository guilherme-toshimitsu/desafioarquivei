import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import PaymentForm from "./components/PaymentForm";
import { actions } from "@store/Consult";

const Checkout = () => {
  const { consultsToBePurchased, price } = useSelector(
    (state) => state.consultStore
  );

  const dispatch = useDispatch();

  return (
    <div>
      {`[price] is Here : ${price}`}
      {`consultsToBePurchased is Here : ${consultsToBePurchased}`}
      <Link href="/consult">back to consult</Link>
      <br />
      <PaymentForm onSubmit={(data) => dispatch(actions.purchase(data))} />
    </div>
  );
};

export default Checkout;
