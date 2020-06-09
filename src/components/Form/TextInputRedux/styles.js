import styled, { css } from "styled-components";

const InputContainer = styled.div`
  ${({ label }) =>
    label &&
    css`
      height: 116px;
    `}
  height: 80px;
  display: block;
`;

const StyledInput = styled.input`
  border: 0px;
  padding: 8px 8px 8px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  box-shadow: 0 0.3em 0.4em -0.5em ${({ theme }) => theme.colors.text};
  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.main};
    box-shadow: 0 0.3em 0.4em -0.5em ${({ theme }) => theme.colors.main};
  }
  ${({ error, touched }) =>
    error &&
    touched &&
    css`
      box-shadow: 0 0 1em 0.2e ${({ theme }) => theme.colors.error};
      border-bottom: 1px solid ${({ theme }) => theme.colors.error};
    `}

  ${({ error, touched }) =>
    touched &&
    !error &&
    css`
      box-shadow: 0 0 2em 0.3e ${({ theme }) => theme.colors.success};
      border-bottom: 1px solid ${({ theme }) => theme.colors.success};
    `}
`;

const StyledError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin: 4px;
`;

const StyledLabel = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: 18px;
  margin: 4px;
`;
export { InputContainer, StyledInput, StyledError, StyledLabel };
