import React from "react";
import Router from "next/router";

import Card from "@components/Card";
import Button from "@components/Button";
import {
  HomeContainer,
  PromotionText,
  PromotionTitle,
  ButtonContainer,
} from "./styles";

const Home = () => (
  <HomeContainer>
    <Card>
      <PromotionTitle>Promocao de Consultas</PromotionTitle>
      <PromotionText>
        Desconto nas primeiras 1000 consultas: 0.09 centavos cada
      </PromotionText>
      <PromotionText>
        Desconto nas 1000 consultas seguintes: 0.16 centavos cada
      </PromotionText>
      <ButtonContainer>
        <Button onClick={() => Router.push("/consult")}>Venha Conferir</Button>
      </ButtonContainer>
    </Card>
  </HomeContainer>
);

export default Home;
