import { memo } from "react";
import styled from "styled-components";

import { breakpoints, points } from "@commons/theme";

const ButtonContainer = styled.div`
  margin-top: 140px;
  display: flex;
  justify-content: flex-end;
  ${breakpoints.sm} {
    justify-content: flex-start;
  }
`;

export { ButtonContainer };
