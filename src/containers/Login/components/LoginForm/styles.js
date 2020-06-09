import { memo } from "react";
import styled from "styled-components";
import { breakpoints } from "@commons/theme";

const FormContent = styled.div`
  display: block;
`;

const FormTitle = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: 24px;
`;

const FormContainer = styled.div`
  margin-left: 25%;
  ${breakpoints.sm} {
    margin: 0 auto;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 110px;
  display: flex;
  justify-content: flex-end;
  ${breakpoints.sm} {
    justify-content: flex-start;
  }
`;

export { FormContent, FormTitle, FormContainer, ButtonContainer };
