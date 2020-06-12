import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Card from "@components/Card";
import InsideContainer from "@components/InsideContainer";
import PaymentForm from "./components/PaymentForm";
import { actions } from "@store/Consult";
import { Text, Title } from "@components/Texts";
import Loading from "@components/Loading";

const Checkout = () => {
  const { consultsToBePurchased, price, isLoading, user } = useSelector(
    (state) => state.consultStore
  );

  const dispatch = useDispatch();

  return (
    <InsideContainer>
      <Card>
        {price ? (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <Text data-testid={"true-loaded"}>
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
          </>
        ) : (
          <>
            <Title>Compra invalida</Title>
            <Link href="/consult">Ir para Consultas</Link>
          </>
        )}
      </Card>
    </InsideContainer>
  );
};

export default Checkout;
