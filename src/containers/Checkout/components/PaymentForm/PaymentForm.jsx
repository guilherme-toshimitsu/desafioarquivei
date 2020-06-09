import React from "react";

import { reduxForm, Field } from "redux-form";

import { InputRedux } from "@components/Form";
import { stringNotEmpty, onlyNumbers, validDate } from "@commons/validations";
import { CNPJmask, DateMask, CVVmask } from "@commons/masks";

const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

const CheckoutForm = ({ handleSubmit, valid }) => {
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="CNPJ"
          label="CNPJ"
          type="text"
          component={InputRedux}
          validate={[stringNotEmpty, onlyNumbers]}
          {...CNPJmask}
        />

        <Field
          name="cardnumber"
          type="text"
          component={InputRedux}
          label={"Card Number"}
          validate={[stringNotEmpty, onlyNumbers]}
        />
        <Field
          name="name"
          type="text"
          component={InputRedux}
          label={"Name"}
          validate={[stringNotEmpty]}
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
          placeholder={"Card Expiration Date"}
          {...DateMask}
          validate={[stringNotEmpty, onlyNumbers, validDate]}
        />
        <button disabled={!valid} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default reduxForm({ form: "payment-form", onSubmit })(CheckoutForm);
