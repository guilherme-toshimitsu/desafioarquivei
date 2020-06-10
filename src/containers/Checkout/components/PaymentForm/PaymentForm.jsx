import React from "react";
import { reduxForm, Field } from "redux-form";

import Button from "@components/Button";
import InsideContainer from "@components/InsideContainer";
import { CNPJmask, DateMask, CVVmask } from "@commons/masks";
import { InputRedux } from "@components/Form";
import { Title, Text } from "@components/Texts";
import { stringNotEmpty, onlyNumbers, validDate } from "@commons/validations";

import { ButtonContainer } from "../../styles";

const CheckoutForm = ({ handleSubmit, valid }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Title> Informacoes de Cartao</Title>
      <Field
        name="CNPJ"
        label="CNPJ"
        type="text"
        component={InputRedux}
        validate={[stringNotEmpty, onlyNumbers]}
        {...CNPJmask}
      />

      <Field
        name="name"
        type="text"
        component={InputRedux}
        label={"Owner"}
        validate={[stringNotEmpty]}
      />
      <Field
        name="cardnumber"
        type="text"
        component={InputRedux}
        label={"Card Number"}
        validate={[stringNotEmpty, onlyNumbers]}
      />

      <Field
        name="cvv"
        type="text"
        component={InputRedux}
        label={"CVV"}
        {...CVVmask}
        validate={[stringNotEmpty, onlyNumbers]}
      />

      <Field
        name="cardexpiration"
        type="text"
        component={InputRedux}
        label={"Card Expiration Date"}
        {...DateMask}
        validate={[stringNotEmpty, onlyNumbers, validDate]}
      />
      <ButtonContainer>
        <Button disabled={!valid} type="submit">
          Comprar
        </Button>
      </ButtonContainer>
    </form>
  );
};

export default reduxForm({ form: "payment-form" })(CheckoutForm);
