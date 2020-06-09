import React from "react";

import { reduxForm, Field } from "redux-form";

import { InputRedux } from "@components/Form";
import Button from "@components/Button";
import {
  stringNotEmpty,
  validateEmail,
  higherThanEight,
} from "@commons/validations";
import {
  FormContent,
  FormTitle,
  FormContainer,
  ButtonContainer,
} from "./styles";

const LoginForm = ({ handleSubmit, valid }) => {
  return (
    <FormContent>
      <FormTitle>Login</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <Field
            name="username"
            type="text"
            label="Email"
            component={InputRedux}
            placeholder={"Email"}
            validate={[stringNotEmpty, validateEmail]}
          />
          <Field
            name="password"
            type="password"
            label="Password"
            component={InputRedux}
            validate={[stringNotEmpty, higherThanEight]}
          />
        </FormContainer>
        <ButtonContainer>
          <Button disabled={!valid} type="submit">
            Submit
          </Button>
        </ButtonContainer>
      </form>
    </FormContent>
  );
};

export default reduxForm({ form: "login-form" })(LoginForm);
