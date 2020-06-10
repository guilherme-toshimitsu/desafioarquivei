import { memo } from "react";
import styled from "styled-components";
import { breakpoints } from "@commons/theme";

const ButtonContainer = memo(styled.div`
  margin-top: 140px;
  display: flex;
  justify-content: flex-end;
  ${breakpoints.sm} {
    justify-content: flex-start;
  }
`);

export { ButtonContainer };
