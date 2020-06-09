import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import { calculatePrice } from "@commons/utils";
import { actions } from "@store/Consult";

import Card from "@components/Card";
import Button from "@components/Button";
import { InputRedux } from "@components/Form";

import {
  ConsultContainer,
  ButtonContainer,
  ConsultTitle,
  ConsultText,
} from "./styles";

const Consult = () => {
  // const { email } = useSelector((state) => state.userStore);
  const { consults } = useSelector((state) => state.consultStore);
  const dispatch = useDispatch();
  const [toBePurchased, setToBePurchased] = useState(0);
  const [price, setPrice] = useState(0);

  const updateToBePurchased = (e) => {
    setToBePurchased(Number(e.target.value));
  };

  const checkPrice = () => {
    console.log("aquiiii");
    setPrice(calculatePrice(consults, toBePurchased));
  };

  const dispatchAmmountToBePurchased = () => {
    dispatch(actions.sendPriceAmmount(price, toBePurchased));
    Router.push("/checkout");
  };

  return (
    <ConsultContainer>
      <Card>
        <ConsultTitle>Consultas</ConsultTitle>
        <ConsultText>{`Consultas realizadas previamente: ${consults} `}</ConsultText>

        <InputRedux
          type="number"
          label={"Quantidade de Consultas"}
          value={toBePurchased}
          input={{ onChange: updateToBePurchased }}
        />
        <ConsultText>{`Preco: ${price} reais`}</ConsultText>
        <ButtonContainer>
          <Button onClick={() => checkPrice()}>Calcular</Button>
          <Button
            onClick={() => dispatchAmmountToBePurchased()}
            disabled={!price}
          >
            Comprar
          </Button>
        </ButtonContainer>
      </Card>
    </ConsultContainer>
  );
};

export default Consult;
