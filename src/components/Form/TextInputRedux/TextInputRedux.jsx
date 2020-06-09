import React from "react";
import PropTypes from "prop-types";
import {
  InputContainer,
  StyledInput,
  StyledError,
  StyledLabel,
} from "./styles";

const TextInputRedux = ({
  input: inputProps,
  meta: { touched, error },
  type,
  label,
  placeholder,
}) => {
  return (
    <InputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        {...inputProps}
        type={type}
        placeholder={placeholder}
        error={error}
        touched={touched}
      />
      {touched && error && <StyledError>{error}</StyledError>}
    </InputContainer>
  );
};

TextInputRedux.defaultProps = {
  input: {},
  type: "text",
  label: "",
  placeholder: "",
  meta: {
    touched: false,
    error: "",
  },
};

TextInputRedux.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.bool,
  }),
};

export default TextInputRedux;
