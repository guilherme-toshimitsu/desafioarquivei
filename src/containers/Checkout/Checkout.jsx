import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "@components/Card";
import InsideContainer from "@components/InsideContainer";
import PaymentForm from "./components/PaymentForm";
import { actions } from "@store/Consult";
import { Text } from "@components/Texts";
import Loading from "@components/Loading";
import {} from "./styles";

const Checkout = () => {
  const { consultsToBePurchased, price, isLoading, user } = useSelector(
    (state) => state.consultStore
  );

  const dispatch = useDispatch();

  return (
    <InsideContainer>
      <Card>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Text>
              {`${consultsToBePurchased} consultas a serem compradas por ${price.toFixed(
                2
              )} reais`}
            </Text>
            <PaymentForm
              initialValues={{ ...user }}
              onSubmit={(data) => dispatch(actions.purchase(data))}
            />
          </>
        )}
      </Card>
    </InsideContainer>
  );
};

export default Checkout;
