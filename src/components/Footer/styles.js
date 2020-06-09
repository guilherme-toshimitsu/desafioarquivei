import { memo } from "react";
import styled from "styled-components";
import { breakpoints } from "@commons/theme";

const StyledButton = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.main};
  ${breakpoints.sm} {
    height: 20px;
  }
`;

export default memo(StyledButton);
