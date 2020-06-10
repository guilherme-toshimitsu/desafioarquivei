import React from "react";
import Router from "next/router";

import Card from "@components/Card";
import Button from "@components/Button";
import InsideContainer from "@components/InsideContainer";
import { Text, Title } from "@components/Texts";

import { ButtonContainer } from "./styles";

const Home = () => (
  <InsideContainer>
    <Card>
      <Title>Promocao de Consultas</Title>
      <Text>Desconto nas primeiras 1000 consultas: 0.09 centavos cada</Text>
      <Text>Desconto nas 1000 consultas seguintes: 0.16 centavos cada</Text>
      <ButtonContainer>
        <Button onClick={() => Router.push("/consult")}>Venha Conferir</Button>
      </ButtonContainer>
    </Card>
  </InsideContainer>
);

export default Home;
