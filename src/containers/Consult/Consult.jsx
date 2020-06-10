import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

import Button from "@components/Button";
import Card from "@components/Card";
import InsideContainer from "@components/InsideContainer";
import { actions } from "@store/Consult";
import { calculatePrice } from "@commons/utils";
import { InputRedux } from "@components/Form";
import { Title, Text } from "@components/Texts";

import { ButtonContainer } from "./styles";

const Consult = () => {
  // const { email } = useSelector((state) => state.userStore);
  const { consults, isLoading } = useSelector((state) => state.consultStore);
  const dispatch = useDispatch();
  const [toBePurchased, setToBePurchased] = useState(0);
  const [price, setPrice] = useState(0);

  const updateToBePurchased = (e) => {
    setToBePurchased(Number(e.target.value));
  };

  const checkPrice = () => {
    setPrice(calculatePrice(consults, toBePurchased));
  };

  const dispatchAmmountToBePurchased = () => {
    if (!isLoading) {
      dispatch(actions.sendPriceAmmount(price, toBePurchased));
      Router.push("/checkout");
    }
  };

  return (
    <InsideContainer>
      <Card>
        <Title>Consultas</Title>
        <Text>{`Consultas realizadas previamente: ${consults} `}</Text>

        <InputRedux
          type="number"
          label={"Quantidade de Consultas"}
          value={toBePurchased}
          input={{ onChange: updateToBePurchased }}
        />
        <Text>{`Preco: ${price.toFixed(2)} reais`}</Text>
        <ButtonContainer>
          <Button onClick={() => checkPrice()}>Calcular</Button>
          <Button
            onClick={() => dispatchAmmountToBePurchased()}
            disabled={!price || isLoading}
          >
            Comprar
          </Button>
        </ButtonContainer>
      </Card>
    </InsideContainer>
  );
};

export default Consult;
